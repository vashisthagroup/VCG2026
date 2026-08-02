const crypto = require('crypto');

function parseCookies(header) {
  return Object.fromEntries(
    String(header || '')
      .split(';')
      .filter(Boolean)
      .map((p) => {
        const [k, ...v] = p.trim().split('=');
        return [k, decodeURIComponent(v.join('='))];
      })
  );
}

function signPayload(obj) {
  const payload = Buffer.from(JSON.stringify(obj)).toString('base64url');
  const sig = crypto.createHmac('sha256', process.env.APP_SESSION_SECRET).update(payload).digest('hex');
  return { payload, sig };
}

module.exports = { parseCookies, signPayload };
