const crypto = require('crypto');

module.exports = (req, res) => {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const payload = url.searchParams.get('payload');
  const sig = url.searchParams.get('sig');

  if (!payload || !sig) {
    return res.status(400).json({ error: 'missing payload or signature' });
  }

  const expected = crypto.createHmac('sha256', process.env.APP_SESSION_SECRET).update(payload).digest('hex');
  const a = Buffer.from(sig, 'hex');
  const b = Buffer.from(expected, 'hex');
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).json({ error: 'invalid signature' });
  }

  try {
    const profile = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    // Signed redirects expire after 5 minutes so a stale/shared link can't replay an old sign-in.
    if (!profile.ts || Date.now() - profile.ts > 5 * 60 * 1000) {
      return res.status(401).json({ error: 'session expired' });
    }
    return res.status(200).json(profile);
  } catch {
    return res.status(400).json({ error: 'malformed payload' });
  }
};
