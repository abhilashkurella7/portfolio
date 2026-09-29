# Abhilash Kurella — Portfolio

Premium personal portfolio for **Abhilash Kurella**, Computer Science
student (B.Tech, NNRG) and aspiring software developer.
React + Vite, no heavy animation libraries. "Copperplate Terminal" design
system: warm bone editorial light mode, deep carbon cinematic dark mode,
Space Grotesk display type, hairline rules, one ember-copper accent.

> **Truthfulness rule:** every fact on this site traces to a publicly
> verified source (GitHub profile + repositories + live demo, user-provided
> LinkedIn URL). Nothing is invented. Sections without verified data
> (Experience, Certifications) are intentionally omitted — add them only when
> you have real, verifiable content.

## Verified sources (checked 2026-09-29)

| Fact | Source |
|---|---|
| Name, avatar, 2 public repos | `github.com/abhilashkurella7` + GitHub API |
| B.Tech at NNRG, CS student, Python / Flask / HTML / databases / GitHub / deployment, hackathons | `abhilashkurella7/resume-` README (public) |
| spirit-coders languages TypeScript / CSS / JavaScript | GitHub languages API |
| spirit-coders stack React, Vite, Tailwind, TanStack Start | `spirit-coders` package.json (public) |
| Live demo Smart Agent X, 4 agents, 12 capabilities, 3 roles | `spirit-coders` homepage field → `spirit-coders.vercel.app` (visible copy only) |
| LinkedIn URL | Provided by site owner (page body is auth-walled, so no profile claims are used) |

Not used / omitted: house-level address (generalised to Hyderabad, India),
resume file (none provided), Kaggle (none provided), email (none publicly
verified), CGPA / dates / coursework (never stated), experience,
certifications (none documented).

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Adding your resume

Export your resume as PDF and save it as:

```
public/resume/resume.pdf
```

The hero "Resume" button activates automatically once the file exists. Until
then it renders as a disabled "Resume — coming soon" state so there is never
a broken link. (Note: `src/components/Hero.jsx` currently has
`resumeReady = false` hard-coded — flip it to a real existence check or `true`
after adding the PDF.)

## Deploying to GitHub Pages (automatic)

A workflow is included at `.github/workflows/deploy.yml` — every push to
`main` builds the site and deploys it to Pages.

One-time setup (on github.com):

1. Create a new **public** repository, e.g. `portfolio`
   (github.com → **New repository**, owner `abhilashkurella7`).
2. In the new repo, go to **Settings → Pages** → under *Build and
   deployment*, set **Source** to **GitHub Actions**.
3. From this folder, push the code:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/abhilashkurella7/portfolio.git
   git push -u origin main
   ```
4. Watch it deploy under the repo's **Actions** tab. Your site appears at:
   `https://abhilashkurella7.github.io/portfolio/`

The build uses a relative base (`./` in `vite.config.js`), so the same code
also works on a user site, Vercel or a custom domain with no changes.

## Adding future content

All content lives in `src/data/portfolio.js`. Update that one file and every
section re-renders. If you later verify new facts (internship, certificates,
Kaggle, more projects), add them there and add the matching section + nav entry.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** →
   import the repository.
3. Framework preset: **Vite**. Defaults work unchanged:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Every push to `main` redeploys automatically.

No environment variables or backend required. Contact works via profile links —
there is no fake contact form and no exposed email.

## Structure

```
portfolio/
├── index.html            # SEO, fonts, meta
├── public/
│   ├── favicon.svg
│   └── resume/           # add resume.pdf here
├── src/
│   ├── components/       # Navbar, Hero, About, Skills, Projects,
│   │                      # Education, Activities, Contact, Footer, …
│   ├── data/portfolio.js # ALL site content (verified only)
│   ├── styles/           # tokens.css + global.css
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

## Security note

If you pasted a GitHub personal access token into a chat to enable
publishing, **revoke it now** (GitHub → Settings → Developer settings →
Personal access tokens) and create a fresh one with only the scopes needed
(`repo`, `workflow`). Tokens in chat history should be treated as exposed.
