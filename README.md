# Emploi by VCG — Reverse Recruiting Web App

Single-file MVP web app with three portals:
- **Candidate** — submit resume (file upload), title, target roles, links
- **Client** — post a job (title, dept, location, salary, description)
- **Employee** — submit a referral (their contact + candidate they're vouching for)

## How it works right now
This is a pure front-end build (`index.html`, no build step) so you can open it
and demo it immediately. Data is stored in the browser's `localStorage` —
meaning submissions persist on your machine/browser but are **not** shared
across devices or visible to a backend yet. Resume files are stored as
base64 inline so they can be downloaded back out from the candidate feed.

## To deploy as-is (static demo)
1. Push this folder to a GitHub repo (e.g. `vashisthagroup/emploi-app`)
2. Enable GitHub Pages on the `main` branch → live in ~1 minute
   OR drag-and-drop the folder into Netlify/Vercel for a free instant URL

## To make it production-ready (real backend)
localStorage won't survive across devices/users, so for a real launch you'd want:
- A backend (Node/Express, or Supabase/Firebase for fastest setup) with:
  - `candidates` table (name, email, phone, title, target_roles, resume_url, notes)
  - `jobs` table (company, title, dept, location, type, salary, description, contact)
  - `referrals` table (employee_name, employee_email, referral_name, referral_contact, role, notes)
- File storage for resumes (S3, Supabase Storage, or Cloudinary) instead of base64
- Auth for clients/employees so they can see only their own postings
- An admin/recruiter dashboard to triage all three feeds, move candidates through stages, and message clients

Happy to build the backend (Supabase is fastest to stand up) and wire this
front end to it — just say the word.

## Vitae connect page — LinkedIn / Google sign-in

`connect.html` is a standalone sign-in landing page ("Vitae") that lets a
candidate authenticate with LinkedIn or Google and hands their verified
name/email/photo off to `index.html` to pre-fill the resume form. Because
the OAuth token exchange requires a client secret, it's backed by three
Vercel serverless functions:

- `api/auth/linkedin.js` and `api/auth/google.js` — start the OAuth
  redirect and exchange the returned code for a profile.
- `api/session.js` — verifies the signed profile payload before the page
  trusts it (signed redirects expire after 5 minutes).

### 1. Register the OAuth apps
- **LinkedIn**: [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps) →
  Create app → add the **"Sign In with LinkedIn using OpenID Connect"**
  product → under Auth, add this exact redirect URL:
  `https://<your-vercel-domain>/api/auth/linkedin`
- **Google**: [Google Cloud Console](https://console.cloud.google.com/apis/credentials) →
  configure the OAuth consent screen (External is fine for testing) →
  create an **OAuth client ID** (type: Web application) → add this exact
  redirect URI: `https://<your-vercel-domain>/api/auth/google`

### 2. Set environment variables in Vercel
Project Settings → Environment Variables:

| Variable | Value |
|---|---|
| `LINKEDIN_CLIENT_ID` | from the LinkedIn app |
| `LINKEDIN_CLIENT_SECRET` | from the LinkedIn app |
| `GOOGLE_CLIENT_ID` | from the Google OAuth client |
| `GOOGLE_CLIENT_SECRET` | from the Google OAuth client |
| `APP_SESSION_SECRET` | any long random string, e.g. `openssl rand -hex 32` |

Redeploy after adding these — serverless functions only pick up new env
vars on the next deploy.

### 3. Note on Gmail
Reading Gmail messages (not just basic profile) requires a *sensitive*
Google API scope, which triggers Google's app verification/security
review — that can take weeks and needs a privacy policy + demo video.
This build intentionally only requests basic profile (`openid email
profile`), not Gmail access. Add that later once you're ready to go
through Google's review.
