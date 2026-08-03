const crypto = require('crypto');
const { parseCookies, signPayload } = require('./_shared');

module.exports = async (req, res) => {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const authError = url.searchParams.get('error');
  const redirectUri = `https://${req.headers.host}/api/auth/google`;

  if (authError) {
    return res.redirect(302, '/connect.html?authError=google');
  }

  if (!code) {
    // Step 1: kick off the OAuth flow
    const stateToken = crypto.randomBytes(16).toString('hex');
    const returnTo = url.searchParams.get('return') || 'connect';
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: redirectUri,
      scope: 'openid email profile',
      access_type: 'online',
      prompt: 'select_account',
      state: `${stateToken}:${returnTo}`,
    });
    res.setHeader('Set-Cookie', `g_oauth_state=${stateToken}; Path=/; HttpOnly; Max-Age=600; SameSite=Lax`);
    return res.redirect(302, `https://accounts.google.com/o/oauth2/v2/auth?${params}`);
  }

  // Step 2: exchange the code for tokens
  try {
    const cookies = parseCookies(req.headers.cookie);
    const [stateToken, returnTo] = String(state || '').split(':');
    if (!stateToken || stateToken !== cookies.g_oauth_state) {
      return res.redirect(302, '/connect.html?authError=state');
    }

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    });
    const tokenData = await tokenRes.json();
    if (!tokenRes.ok) throw new Error(tokenData.error_description || 'Google token exchange failed');

    const profileRes = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const profile = await profileRes.json();
    if (!profileRes.ok) throw new Error('Google profile fetch failed');

    const { payload, sig } = signPayload({
      provider: 'google',
      name: profile.name,
      email: profile.email,
      picture: profile.picture,
      ts: Date.now(),
    });

    res.setHeader('Set-Cookie', 'g_oauth_state=; Path=/; Max-Age=0');
    const dest = returnTo === 'candidate' ? '/index.html' : '/connect.html';
    return res.redirect(302, `${dest}?view=candidate&payload=${payload}&sig=${sig}`);
  } catch (err) {
    console.error('Google OAuth error:', err);
    return res.redirect(302, '/connect.html?authError=google');
  }
};
