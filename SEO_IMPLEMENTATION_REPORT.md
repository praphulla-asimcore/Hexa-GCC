# Hexa SEO implementation and strategy

Date: 30 October 2026

Current repository state: 20 public, indexable pages. The initial SEO release was pushed to `main` as `cdf46235537d5c82b5b2980d44d4a2c307aae56a`, triggering the user-confirmed Vercel integration. The follow-up below adds Insights and honest notification outcomes. Live deployment completion remains unverified because runtime network access is blocked.

## Outcome and scope

Implemented the initial commercial and technical SEO phase in the existing Next.js App Router site. All existing public URLs and legacy redirects are retained. Two new pages fill distinct accounting search intents; existing `/finance` and `/centre` serve the shared-services and managed-GCC intents. This avoids creating competing `/finance-shared-services` and `/global-capability-center-as-a-service` pages.

This is a repository implementation, not a deployed-site audit or a promise of rankings. The initial phase performed no deployment, Search Console submission, analytics property creation or publication. Deployment was subsequently authorised and triggered through main; Search Console and analytics actions remain pending. Search volumes, positions, field performance and indexing have not been measured.

## Baseline findings

- Fifteen existing public page routes; an explicit sitemap already existed.
- `public/robots.txt` allowed crawling but did not reference the sitemap.
- Most pages already declared canonicals; `/privacy` and `/terms` did not.
- Root Open Graph fields were inherited rather than matching each page's title, description and URL.
- Finance and Centre already covered much of the proposed shared-services/GCC scope.
- No dedicated Australian accounting or offshore accounting team route existed.
- Existing lead form posted to `/api/submit-lead`; no GA4 integration or consent manager was found in the inspected application source.
- The lead API attempts an Abacus notification and returns success even when notification delivery fails. It does not persist leads to the included Prisma model. This baseline defect is corrected in the follow-up: success now requires provider acceptance. Acceptance is still not proof of inbox delivery or a CRM-qualified lead.

## Search strategy and keyword-to-page map

Australia and Singapore are the first priority markets. UK and Malaysia follow; US targeting is selective. These priorities come from the supplied brief, not measured query demand. Validate hypotheses using Search Console and market-specific SERP research before expanding.

| Canonical route | Primary intent / keyword hypothesis | Role and action |
|---|---|---|
| `/` | Finance and accounting outsourcing; technology teams | Broad proposition; updated SEO title, retained brand and homepage layout |
| `/finance` | Finance shared services outsourcing; outsourced finance operations | Existing service hub strengthened with scope, entity responsibilities, controls and transition content |
| `/accounting-outsourcing-australia` | Accounting outsourcing for Australian accounting firms | New market/workflow page; preparation scope, professional responsibility boundaries and review requirements |
| `/offshore-accounting-teams` | Dedicated offshore accounting team | New capacity-model page; role design, supervision, onboarding and comparison with managed service |
| `/centre` | Global capability centre/center as a service; managed GCC | Existing operating-model page strengthened with charter, transition and ownership comparison |
| `/support` | Client-directed finance and technology capacity | Operating-model explanation; related from search landing pages |
| `/delivery` | Managed finance/technology function | Operating-model explanation; scope and service-level accountability |
| `/technology` | Technology shared services | Existing technology hub; matching metadata and breadcrumbs |
| `/hexa-intelligence` | Hexa finance/operations applications | Platform explanation and branded discovery |
| `/case-studies` | Delivery evidence | Buyer reassurance; existing cases preserved without new results or clients |
| `/security` | Security and data control | Buyer assurance; existing claims preserved, not independently certified by this work |
| `/why-nepal` | Outsourcing to Nepal | Location due diligence and differentiation |
| `/about` | Hexa company and group information | Entity and organisational trust |
| `/faq` | Buyer questions | Objection handling; no FAQ rich-result promise |
| `/call` | Consultation and proposal request | Conversion destination |
| `/privacy` | Privacy policy | Legal information; self-canonical added |
| `/terms` | Terms of service | Legal information; self-canonical added |

Keep `/support` focused on the broad engagement model and the offshore-accounting page focused on accounting-team design. Keep `/finance` as the finance process hub. Avoid publishing near-duplicate pages to match spelling variants or country names.

## Sitemap and technical implementation

- `lib/seo.ts` owns the canonical public route paths and the shared metadata helper: initially 17, now 20 after the Insights follow-up.
- `app/sitemap.ts` emits one XML sitemap at `/sitemap.xml`. Twenty URLs do not require a sitemap index or separate service/editorial sitemaps.
- Canonical host remains `https://gcc.hexabusiness.com`. The homepage canonical and sitemap entry omit the trailing slash to match Next.js metadata output; other paths retain the existing no-trailing-slash convention.
- `robots.txt` references the production sitemap.
- Only canonical public pages are included. API routes and legacy redirects are excluded. No artificial `lastmod` dates or priority values were added.
- Future indexable pages must be added to `publicRoutes`; the SEO check detects differences between physical page routes and this inventory. If private/dynamic/noindex sections are introduced, adapt that check deliberately.
- Every public page now has matching canonical, Open Graph and Twitter metadata, including the existing share image.
- Visible breadcrumbs and matching BreadcrumbList JSON-LD were added to service/product pages and the new accounting pages.
- New accounting pages include Service JSON-LD matching their visible offering. The root retains Organization schema and adds WebSite schema with stable identifiers. This does not imply eligibility for a particular rich result.
- Preview/development builds with `VERCEL_ENV=preview` or `development` receive root `noindex, nofollow` metadata. Production/default builds remain indexable. This environment-dependent branch was source-reviewed; preview output was not separately built. Non-Vercel staging deployments need an explicit indexing policy before release.
- Existing framework rendering is retained: the production build prerenders all 17 public pages, making core text and links available in initial HTML.
- New pages are linked from Services navigation, footer, the Finance hub and each other. Existing branding and design components are reused.

## Conversion measurement

`lib/analytics.ts` provides a dormant event abstraction; `components/analytics-events.tsx` observes link clicks. It makes no vendor/network calls and writes no cookies or storage. Consent defaults to denied for the current document and is never inferred from elapsed time or navigation.

A future consent-aware client integration can import `setAnalyticsConsent` and listen for `window` event `hexa:analytics`. Call `setAnalyticsConsent(true)` only after valid consent, and call it with `false` on withdrawal. Initialise it from the approved consent manager when the document loads. Register the event listener before enabling consent. Forward only approved events to the configured analytics property. No GA4 ID or consent UI was invented.

| Hook | Meaning |
|---|---|
| `lead_form_submit` | One event after the form receives an HTTP success response with `success: true`; the follow-up requires provider acceptance, which is not an inbox delivery receipt |
| `service_page_cta_click` | Link click to `/call` or its fragments; click event, not a lead |
| `meeting_booking_click` | Click on the existing booking URL; not a completed booking |
| `email_click` | Click on a mailto link |
| `whatsapp_click` | Click on the existing WhatsApp URL |

Payloads contain only event name and `window.location.pathname`; no form fields, contact details, target email, URL query or fragment is included. No events are queued before consent. A booking confirmation integration is required before implementing `meeting_booking_complete`. Do not emit both proposal and lead events for the same submission and count them as separate enquiries. Service/market attribution and CRM qualification remain future work.

## Validation evidence

- Locked installation succeeded using `npm ci --legacy-peer-deps --cache /workspace/.npm --no-audit --no-fund`. Normal `npm ci` failed on existing ESLint/TypeScript-ESLint peer conflicts. Dependency declarations and both lockfiles were unchanged during the initial SEO phase; see the release follow-up below.
- `npm run build`: passed compilation, type checking and static generation; all 17 public pages prerendered. The repository's existing Next config skips lint during builds.
- `npx tsc --noEmit`: passed.
- `python scripts/check-seo.py`: passed against a locally running production server. Checks 17 rendered pages, unique titles/descriptions, canonical and share metadata, one H1, JSON-LD parsing, internal links and fragments, complete sitemap inventory, robots reference, 21 legacy 301 redirects and rejection of an incomplete lead request.
- `node scripts/check-analytics.cjs`: passed SSR safety, default-denied consent, approved payload and consent revocation checks.
- Local Chromium/Playwright: passed the four priority pages at 1440px and 390px, visible H1, no horizontal overflow, mobile menu access and no uncaught JavaScript errors. Screenshots were visually reviewed on mobile. Form failure/retry/success used intercepted API responses; external browser requests were blocked and no notification was sent. Playwright/Chromium came from the cloud runtime, not a new project dependency.
- `git diff --check`: passed.
- `npm run lint`: did not run a lint suite; it prompts to create an ESLint configuration and exits. No config was generated to manufacture a pass. Resolve the existing ESLint 9 / config-next 15 / Next 14 compatibility and configuration separately.

The reusable HTML checks are not a Google crawl, schema eligibility certification, accessibility audit or Core Web Vitals measurement. Live host redirects, Search Console indexing, external script behaviour, real notification delivery and calendar completion remain unverified.

## Release and business actions

1. Review the diff and new service copy. Confirm Australian market scope, platform experience, review boundaries and engagement terms before publishing. Existing certification and case-study claims were retained, not independently reverified.
2. The release follow-up upgrades Next.js to the maintained 15.5.28 backport and updates package-lock.json. The unused duplicate `package-lock 2.json` is left untouched. Other dependency advisories remain and require a separate dependency review.
3. Deploy through the existing Vercel workflow. Verify the canonical host, HTTP/HTTPS and trailing-slash redirects, production indexing directives and preview protection on actual deployments.
4. Verify the Search Console domain or URL-prefix property using the business's existing access. Submit `https://gcc.hexabusiness.com/sitemap.xml`; inspect the homepage and four priority commercial pages. No verification token is available in this task.
5. Connect the approved consent manager and GA4 property to the event hooks. Validate consent, event delivery and deduplication in a debug environment before reporting conversion totals. Configure booking confirmation through a supported calendar integration if available.
6. Verify the production enquiry configuration and inbox delivery. The follow-up no longer acknowledges missing, rejected or disabled notifications as success, but does not add persistence, retries or CRM integration. Existing Abacus configuration names are `ABACUSAI_API_KEY`, `WEB_APP_ID`, `NOTIF_ID_LEAD_FORM_SUBMISSION` and `NEXTAUTH_URL`; enter credentials only through secure environment settings.
7. Establish a baseline using Search Console query/page/country/device data and measured mobile performance. Review initial results after indexing; set commercial targets from the baseline rather than inventing them.

## Content and authority rollout

The initial phase did not add editorial pages. The follow-up adds two guides and an Insights index; AP/R2R/engineering/QA expansion pages remain unimplemented. Continue the 90-day work according to validated demand and factual review:

- First: technical release, indexing validation, commercial copy review and conversion reliability.
- Next: validate whether AP, R2R, development-team and QA queries justify distinct pages beyond existing hubs.
- Publish these eight guide candidates in a future `/insights` section only after research and expert review: offshore accountant cost methodology; finance shared-services setup; dedicated team versus managed outsourcing; month-end close controls; Build–Operate–Transfer versus managed GCC; audit preparation boundaries; evidence-based Nepal/India/Philippines comparison; practical finance automation controls.
- Link each guide to its relevant service and real proof. Show accurate authorship and meaningful dates. Do not manufacture costs, comparisons, client outcomes or statistics.
- Develop permissioned case studies, genuine association listings and useful partner resources. No bulk paid links, automated outreach or fabricated endorsements.
- Review monthly: non-brand clicks/impressions, priority-page organic traffic, qualified enquiries, confirmed meetings, opportunities/pipeline where attribution exists, indexing issues and field Core Web Vitals. Segment by priority market where the data supports it.

## Reproduce the checks

From `/workspace/Hexa-GCC`, using the current environment's Node.js and npm:

```sh
npm ci --legacy-peer-deps --no-audit --no-fund
npm run build
npx tsc --noEmit
node scripts/check-analytics.cjs
node scripts/check-lead-notification.cjs
npm run start -- --hostname 127.0.0.1
```

In another shell in the same directory:

```sh
python scripts/check-seo.py
```

Use a different base URL argument if needed. The script expects an indexable production build and intentionally sends only an incomplete lead request. Do not assume running processes survive an environment snapshot. Use the existing isolated checkout; no worktree is needed.


## Deployment follow-up — 30 October 2026

The user confirmed that pushes to GitHub `main` trigger Vercel production deployment and explicitly authorised deployment. The running checkout began on branch `work` at the same commit as remote `main`.

The latest Next.js 14 patch remained affected by newer advisories, so the release uses the published Next.js 15 backport, 15.5.28, with the existing React 18 version. The production dependency audit no longer reports direct Next.js advisories; Next remains listed through its PostCSS dependency, and other production dependencies still have advisories. This is not a clean security audit or a full dependency migration.

On Next.js 15.5.28: production build, 17 rendered SEO page checks, 21 redirects, TypeScript and consent-hook checks passed. Desktop/mobile checks for the four priority pages and mocked form failure/retry/success also passed. Lint remains unconfigured as described above.

Git read and push dry-run access succeeded. Direct live-site checks and GitHub API requests were denied by the environment network policy. Custom-domain additions for `gcc.hexabusiness.com` and `api.github.com` were saved in the environment configuration draft, preserving the existing package-manager preset. Saving the draft does not apply or publish those changes. Until runtime access is granted, a successful Git push can establish deployment was triggered, but cannot establish that Vercel finished successfully or that the live domain serves the new content.


## Follow-up: buyer guides and notification outcomes

Added these canonical, statically generated pages, with matching metadata, breadcrumbs, internal links and sitemap entries:

| Route | Purpose |
|---|---|
| `/insights` | Discoverable editorial index, linked from the Company footer |
| `/insights/dedicated-finance-team-vs-accounting-outsourcing` | Compare capacity, process ownership, review effort and transition requirements; links to teams, Finance, Support and Delivery |
| `/insights/outsourcing-month-end-close-controls` | Practical close-scope, calendar, review and exception checklist; links to Finance, Delivery, Centre and Security |

Both guides use visible Hexa authorship and the actual 30 October 2026 publication date, with matching Article JSON-LD. They contain operational planning advice rather than invented savings, market statistics, named client outcomes or jurisdiction-specific professional advice. No specialist review is claimed. Unknown guide slugs return 404. The remaining six proposed guides and four expansion service pages still require future work; neither keyword demand nor rankings have been validated.

The lead endpoint now validates bounded string fields and an email format. Invalid JSON and incomplete or malformed submissions return 400. The notification integration is extracted into `lib/lead-notification.ts`, requires its existing three configuration bindings and applies a 10-second request timeout. Missing configuration returns 503; rejection, a disabled notification, non-success HTTP, invalid provider JSON or a network error returns 502. Those responses keep the form in its retry/error flow and do not emit a successful lead event. Success requires provider HTTP success and explicit `success: true`, with notifications enabled. Provider bodies, credentials and submitted data are not printed or returned in errors. A direct email fallback is supplied.

No database, durable queue, email-provider migration or retry service was introduced. The cloud task has none of the Abacus bindings; the production Vercel bindings cannot be inspected through the currently blocked API access. Confirm their names and status securely in Vercel settings before treating production form delivery as verified. Do not enter values in chat. Provider acceptance is not inbox delivery, and no real notification was sent during these checks.

Follow-up validation:

- Next.js 15.5.28 production build and TypeScript passed; the public HTML inventory is now 20 pages.
- `python scripts/check-seo.py` passed all 20 pages, unique metadata and canonicals, initial HTML H1s, JSON-LD, article headline/author/visible-date consistency, internal links/fragments, complete sitemap, robots, unknown-guide 404, 21 legacy redirects and incomplete-lead rejection.
- `node scripts/check-lead-notification.cjs` passed configuration gating, mocked provider acceptance/rejection/disabled/HTTP/JSON/network failure, malformed input and route 400/503/502/200 checks without external requests.
- `node scripts/check-analytics.cjs` passed consent and payload boundaries.
- Local Chromium/Playwright passed seven commercial/editorial pages at 1440px, 1024px and 390px, no horizontal overflow or uncaught JavaScript errors, mobile navigation and mocked form failure/retry/success. External browser requests were blocked.
- `git diff --check` passed. Lint remains unconfigured; a full dependency audit is not clean.

Deployment status must distinguish a confirmed Git push from a completed Vercel build and live-domain verification. Both releases are intended for the user-confirmed `main` integration; the network-policy limitation still prevents the latter two observations.
