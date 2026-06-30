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
