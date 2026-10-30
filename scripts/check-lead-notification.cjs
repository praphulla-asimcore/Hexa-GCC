const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');

function load(relative, overrides = {}) {
  const filename = path.resolve(__dirname, relative);
  const target = new Module(filename, module);
  target.paths = Module._nodeModulePaths(path.dirname(filename));
  const originalRequire = target.require.bind(target);
  target.require = name => name in overrides ? overrides[name] : originalRequire(name);
  target._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText, filename);
  return target.exports;
}

(async () => {
  const { sendLeadNotification } = load('../lib/lead-notification.ts');
  const notification = { subject: 'Local test', body: '<p>Local test</p>' };
  const config = { ABACUSAI_API_KEY: 'test-only', WEB_APP_ID: 'test-only', NOTIF_ID_LEAD_FORM_SUBMISSION: 'test-only' };
  const forbiddenFetch = async () => { throw new Error('Must not call provider without config'); };
  assert.equal(await sendLeadNotification(notification, {}, forbiddenFetch), 'unavailable');
  const scenarios = [
    [200, { success: true }, 'accepted'],
    [200, { success: false }, 'failed'],
    [200, { success: true, notification_disabled: true }, 'failed'],
    [401, { success: true }, 'failed'],
    [500, {}, 'failed'],
  ];
  for (const [status, body, expected] of scenarios) {
    assert.equal(await sendLeadNotification(notification, config,
      async () => new Response(JSON.stringify(body), { status })), expected);
  }
  assert.equal(await sendLeadNotification(notification, config, async () => { throw new Error('timeout'); }), 'failed');
  assert.equal(await sendLeadNotification(notification, config, async () => new Response('not json')), 'failed');

  let result = 'accepted';
  let calls = 0;
  const { POST } = load('../app/api/submit-lead/route.ts', {
    '@/lib/lead-notification': { sendLeadNotification: async () => { calls++; return result; } },
  });
  const lead = { name: 'Local Test', company: 'Local Company', email: 'local@example.test', country: 'Australia', interest: 'Finance', timeline: 'Exploring options' };
  const request = body => new Request('http://localhost/api/submit-lead', { method: 'POST', body: JSON.stringify(body) });
  for (const body of [{}, { ...lead, email: 'invalid' }, { ...lead, name: ' ' }, { ...lead, company: {} }]) {
    assert.equal((await POST(request(body))).status, 400);
  }
  assert.equal((await POST(new Request('http://localhost/api/submit-lead', { method: 'POST', body: '{' }))).status, 400);
  assert.equal(calls, 0);
  for (const [providerResult, status] of [['unavailable', 503], ['failed', 502], ['accepted', 200]]) {
    result = providerResult;
    const response = await POST(request(lead));
    assert.equal(response.status, status);
    const body = await response.json();
    assert.equal(body.success, providerResult === 'accepted');
    assert.equal('id' in body, providerResult === 'accepted');
  }
  console.log('PASS: notification config, provider acceptance/rejection/disabled/error/timeout; input validation; HTTP 400/503/502/200; no external notification sent.');
})().catch(error => { console.error(error); process.exit(1); });
