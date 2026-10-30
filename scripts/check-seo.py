"""Validate a running production build: python scripts/check-seo.py [base-url]."""
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:3000').rstrip('/')
SITE = 'https://gcc.hexabusiness.com'
root = Path(__file__).resolve().parents[1]
source = (root / 'lib/seo.ts').read_text().split('export const publicRoutes = [', 1)[1].split('];', 1)[0]
routes = re.findall(r"'([^']+)'", source)
errors = []
actual_routes = {'/' + str(page.parent.relative_to(root / 'app')).replace('\\', '/').strip('.')
                 for page in (root / 'app').rglob('page.tsx')}
if actual_routes != set(routes):
    errors.append(f'Page route inventory mismatch: {actual_routes.symmetric_difference(set(routes))}')


def check(condition, message):
    if not condition:
        errors.append(message)


def get(path):
    with urllib.request.urlopen(BASE + path, timeout=30) as response:
        check(response.status == 200, f'{path}: status {response.status}')
        return response.read().decode()


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.titles, self.h1s, self.schemas = [], [], []
        self.meta, self.canonicals, self.links, self.ids = {}, [], [], set()
        self.capture = None
        self.buffer = ''
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'meta':
            self.meta.setdefault(attrs.get('name', attrs.get('property')), []).append(attrs.get('content', ''))
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag in ('title', 'h1') or (tag == 'script' and attrs.get('type') == 'application/ld+json'):
            self.capture, self.buffer = tag, ''

    def handle_data(self, data):
        if self.capture:
            self.buffer += data

    def handle_endtag(self, tag):
        if tag == self.capture:
            target = {'title': self.titles, 'h1': self.h1s, 'script': self.schemas}[tag]
            target.append(self.buffer)
            self.capture = None


pages = {}
titles, descriptions = set(), set()
for route in routes:
    page = Page(get(route))
    pages[route] = page
    check(len(page.titles) == 1 and bool(page.titles[0]), f'{route}: one nonempty title required')
    check(len(page.h1s) == 1 and bool(page.h1s[0]), f'{route}: one nonempty H1 required')
    check(page.canonicals == [SITE + (route if route != '/' else '')], f'{route}: incorrect canonical {page.canonicals}')
    check(page.meta.get('robots') == ['index, follow'], f'{route}: production indexing directive')
    description = page.meta.get('description', [])
    check(len(description) == 1 and bool(description[0]), f'{route}: unique description tag required')
    check(page.meta.get('og:url') == [SITE + (route if route != '/' else '')], f'{route}: incorrect OG URL')
    check(page.meta.get('og:title') == page.titles, f'{route}: title/share mismatch')
    check(page.meta.get('og:description') == description, f'{route}: description/share mismatch')
    check(page.meta.get('twitter:title') == page.titles, f'{route}: Twitter title mismatch')
    for value, seen, label in ((page.titles[0], titles, 'title'), (description[0], descriptions, 'description')):
        check(value not in seen, f'{route}: duplicate {label}')
        seen.add(value)
    for schema in page.schemas:
        try:
            data = json.loads(schema)
            check('@context' in data, f'{route}: missing schema context')
        except json.JSONDecodeError:
            check(False, f'{route}: invalid JSON-LD')
    check(bool(page.schemas), f'{route}: missing JSON-LD')

for route, page in pages.items():
    for href in page.links:
        url = urllib.parse.urlsplit(urllib.parse.urljoin(SITE + (route if route != '/' else ''), href))
        if url.netloc != urllib.parse.urlsplit(SITE).netloc:
            continue
        path = url.path or '/'
        if path in pages:
            check(not url.fragment or urllib.parse.unquote(url.fragment) in pages[path].ids,
                  f'{route}: broken fragment {href}')
        elif path.startswith('/api/'):
            check(False, f'{route}: API linked as content {href}')
        elif not (root / 'public' / path.lstrip('/')).is_file():
            check(False, f'{route}: unknown internal destination {href}')

xml = ET.fromstring(get('/sitemap.xml'))
locations = [element.text for element in xml.findall('{*}url/{*}loc')]
check(len(locations) == len(set(locations)), 'Duplicate sitemap URLs')
check(set(locations) == {SITE + (route if route != '/' else '') for route in routes}, 'Sitemap differs from public route inventory')
check(not xml.findall('{*}url/{*}lastmod'), 'Unexpected lastmod: verify timestamps before publishing')
check(f'Sitemap: {SITE}/sitemap.xml' in get('/robots.txt'), 'robots.txt missing sitemap reference')


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


opener = urllib.request.build_opener(NoRedirect)
redirect_count = 0
for old, new in re.findall(r"\['([^']+)', '([^']+)'\]", (root / 'next.config.js').read_text()):
    old = old.replace('/:path*', '/example')
    try:
        opener.open(BASE + old, timeout=10)
        check(False, f'{old}: expected 301')
    except urllib.error.HTTPError as error:
        check(error.code == 301 and error.headers.get('Location') == new, f'{old}: incorrect redirect')
    redirect_count += 1

request = urllib.request.Request(BASE + '/api/submit-lead', data=b'{}', headers={'Content-Type': 'application/json'})
try:
    urllib.request.urlopen(request, timeout=10)
    check(False, 'Incomplete lead request must return 400')
except urllib.error.HTTPError as error:
    check(error.code == 400 and json.load(error).get('success') is False, 'Lead validation response')

if errors:
    print('\n'.join(errors))
    raise SystemExit(1)
print(f'PASS: {len(pages)} rendered pages; unique metadata, canonical, H1, JSON-LD, internal links and fragments; '
      f'{len(locations)} sitemap URLs; robots; {redirect_count} legacy redirects; invalid lead rejected.')
