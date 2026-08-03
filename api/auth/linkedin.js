const crypto = require('crypto');
const { parseCookies, signPayload } = require('./_shared');

module.exports = async (req, res) => {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const authError = url.searchParams.get('error');
  const redirectUri = `https://${req.headers.host}/api/auth/linkedin`;

  if (authError) {
    return res.redirect(302, '/connect.html?authError=linkedin');
  }

  if (!code) {
    // Step 1: kick off the OAuth flow
    const stateToken = crypto.randomBytes(16).toString('hex');
    const returnTo = url.searchParams.get('return') || 'connect';
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.LINKEDIN_CLIENT_ID,
      redirect_uri: redirectUri,
      scope: 'openid profile email',
      state: `${stateToken}:${returnTo}`,
    });
    res.setHeader('Set-Cookie', `li_oauth_state=${stateToken}; Path=/; HttpOnly; Max-Age=600; SameSite=Lax`);
    return res.redirect(302, `https://www.linkedin.com/oauth/v2/authorization?${params}`);
  }

  // Step 2: exchange the code for tokens
  try {
    const cookies = parseCookies(req.headers.cookie);
    const [stateToken, returnTo] = String(state || '').split(':');
    if (!stateToken || stateToken !== cookies.li_oauth_state) {
      return res.redirect(302, '/connect.html?authError=state');
    }

    const tokenRes = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      }),
    });
    const tokenData = await tokenRes.json();
    if (!tokenRes.ok) throw new Error(tokenData.error_description || 'LinkedIn token exchange failed');

    const profileRes = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const profile = await profileRes.json();
    if (!profileRes.ok) throw new Error('LinkedIn profile fetch failed');

    const { payload, sig } = signPayload({
      provider: 'linkedin',
      name: profile.name,
      email: profile.email,
      picture: profile.picture,
      ts: Date.now(),
    });

    res.setHeader('Set-Cookie', 'li_oauth_state=; Path=/; Max-Age=0');
    const dest = returnTo === 'candidate' ? '/index.html' : '/connect.html';
    return res.redirect(302, `${dest}?view=candidate&payload=${payload}&sig=${sig}`);
  } catch (err) {
    console.error('LinkedIn OAuth error:', err);
    return res.redirect(302, '/connect.html?authError=linkedin');
  }
};
