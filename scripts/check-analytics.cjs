// Exercise consent and payload boundaries without an analytics vendor or network.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');

const filename = path.resolve(__dirname, '../lib/analytics.ts');
const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const moduleUnderTest = new Module(filename, module);
moduleUnderTest._compile(compiled, filename);
const { setAnalyticsConsent, trackEvent } = moduleUnderTest.exports;

trackEvent('lead_form_submit'); // SSR-safe, before a window exists.
const events = [];
global.window = {
  location: { pathname: '/call', search: '?email=private@example.test' },
  dispatchEvent: event => events.push(event),
};
trackEvent('lead_form_submit');
assert.equal(events.length, 0, 'Consent must default to denied');
setAnalyticsConsent(true);
trackEvent('lead_form_submit');
assert.equal(events.length, 1);
assert.equal(events[0].type, 'hexa:analytics');
assert.deepEqual(events[0].detail, { event: 'lead_form_submit', page_path: '/call' });
setAnalyticsConsent(false);
trackEvent('email_click');
assert.equal(events.length, 1, 'Revoking consent must stop events');
delete global.window;
console.log('PASS: SSR safety, default-denied consent, allowed event payload and consent revocation.');
