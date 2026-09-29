# Sushanth Maankaala — Portfolio

Premium personal portfolio for **Sushanth Maankaala**, Data Science student.
React + Vite, no heavy animation libraries, light-first editorial theme with
an optional dark mode.

> **Truthfulness rule:** every fact on this site traces to a publicly
> verified source (GitHub profile + repository, user-provided LinkedIn URL).
> Nothing is invented. Sections without verified data (Experience, Education,
> Certifications, Achievements, Kaggle) are intentionally omitted — add them
> only when you have real, verifiable content.

## Verified sources (checked 2026-09-29)

| Fact | Source |
|---|---|
| Name, bio, Data Science focus | `github.com/maankaalasushanth-crypto` bio |
| Skills: Python, SQL, ML, data viz | GitHub bio |
| Skills: HTML, CSS, JavaScript, Git workflow | `team-task-board` repo languages + README |
| Project: Team Task Board, role Project Lead | `team-task-board` README team table |
| Email `mankaalasushanth@gmail.com` | `team-task-board` README (public) |
| Avatar | GitHub avatar (public) |
| LinkedIn URL | Provided by site owner (page body is auth-walled, so no profile claims are used) |

Not used / omitted: house-level address (generalised to city), resume
(none provided), Kaggle (none provided), education institution, experience,
certifications, live demos (repo has no homepage URL).

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
a broken link.

## Deploying to GitHub Pages (automatic)

A workflow is included at `.github/workflows/deploy.yml` — every push to
`main` builds the site and deploys it to Pages.

One-time setup (you do this on github.com — I can't push with your account):

1. Create a new **public** repository, e.g. `portfolio`
   (github.com → **New repository**).
2. In the new repo, go to **Settings → Pages** → under *Build and
   deployment*, set **Source** to **GitHub Actions**. No other change needed.
3. From this folder, push the code (already committed locally on `main`):
   ```bash
   git remote add origin https://github.com/maankaalasushanth-crypto/portfolio.git
   git push -u origin main
   ```
   Sign in with your GitHub account when prompted.
4. Watch it deploy under the repo's **Actions** tab. Your site appears at:
   `https://maankaalasushanth-crypto.github.io/portfolio/`

The build uses a relative base (`./` in `vite.config.js`), so the same code
also works on a user site (`maankaalasushanth-crypto.github.io`), Vercel or
a custom domain with no changes.

## Adding future content

All content lives in `src/data/portfolio.js`. Update that one file and every
section re-renders. If you later verify new facts (education, internship,
certificates, Kaggle, more projects), add them there and add the matching
section + nav entry.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** →
   import the repository.
3. Framework preset: **Vite**. Defaults work unchanged:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Every push to `main` redeploys automatically.

No environment variables or backend required. Contact works via `mailto:`
plus copy-to-clipboard — there is no fake contact form.

## Structure

```
portfolio/
├── index.html            # SEO, fonts, meta
├── public/
│   ├── favicon.svg
│   └── resume/           # add resume.pdf here
├── src/
│   ├── components/       # Navbar, Hero, About, Skills, Projects, Contact, Footer, …
│   ├── data/portfolio.js # ALL site content (verified only)
│   ├── styles/           # tokens.css + global.css
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```
