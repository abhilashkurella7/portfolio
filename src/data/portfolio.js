/*
 * VERIFIED CONTENT — source of truth for this portfolio.
 * ---------------------------------------------------------------
 * Sources checked 2026-09-29:
 *  - GitHub profile  https://github.com/maankaalasushanth-crypto
 *      name, bio, location, 1 public repo, README team table, languages
 *  - GitHub API      api.github.com/users/maankaalasushanth-crypto (+/repos)
 *  - Repo            .../team-task-board (description, README, languages:
 *                    CSS / HTML / JavaScript, no homepage URL, no license)
 *  - LinkedIn        URL user-provided; page body not publicly fetchable
 *                    (auth wall) — link is used, profile claims are NOT.
 *  - Resume          none found in workspace — no resume facts used.
 *  - Kaggle          none provided — section omitted.
 *
 * Rules enforced here: no invented jobs, companies, metrics, skills,
 * education details, certifications, demos, or testimonials. Anything
 * unverified is omitted, and the UI only renders sections with data.
 */

export const portfolioData = {
  personal: {
    name: 'Sushanth Maankaala',
    headline: 'Data Science Student',
    bio: 'Data Science student passionate about transforming data into meaningful insights. Building skills in Python, SQL, machine learning, data visualization.',
    locationShort: 'Nizamabad, India',
    avatar: 'https://avatars.githubusercontent.com/u/279248463?v=4',
    initials: 'SM',
  },

  social: {
    github: 'https://github.com/maankaalasushanth-crypto',
    linkedin: 'https://www.linkedin.com/in/sushanth-maankaala-415aa1405/',
    email: 'mankaalasushanth@gmail.com',
    // Kaggle: not provided — intentionally absent (no placeholder URLs).
  },

  about: {
    heading: 'About me',
    paragraphs: [
      'I am a Data Science student learning how to turn raw data into meaningful insights.',
      'Right now my focus is on building strong foundations: Python and SQL for working with data, machine-learning concepts, and data visualization for communicating what the data says.',
    ],
    focusPoints: [
      {
        title: 'Working with data',
        text: 'Python and SQL practice for collecting, querying and preparing datasets.',
      },
      {
        title: 'Learning ML concepts',
        text: 'Studying machine-learning fundamentals step by step.',
      },
      {
        title: 'Visual communication',
        text: 'Learning data visualization to present findings clearly.',
      },
      {
        title: 'Collaborating with Git',
        text: 'Practising real team workflows — branching, pull requests and review.',
      },
    ],
    statusLine:
      'Early in my journey and looking for learning opportunities, guidance and peer collaboration.',
  },

  skills: {
    heading: 'Skills',
    subheading:
      'Only what my public profiles document — this list grows as I learn.',
    groups: [
      {
        title: 'Programming Languages',
        note: 'From GitHub bio + repository code',
        items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Data & AI Concepts',
        note: 'From GitHub bio — currently learning',
        items: ['Machine Learning', 'Data Visualization'],
      },
      {
        title: 'Tools & Workflow',
        note: 'From repository collaboration history',
        items: ['Git', 'GitHub', 'Branching & Pull Requests', 'Code Review'],
      },
    ],
  },

  projects: {
    heading: 'Projects',
    subheading:
      'One verified project so far — presented exactly as documented.',
    items: [
      {
        name: 'Team Task Board',
        tagline: 'A collaborative Git practice project.',
        description:
          'A small team task-board web app built to practise real Git collaboration: separate feature branches per member, pull requests and review before merging to main. I contributed as project lead on the project-setup branch.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        features: [
          'Task board UI rendered in the browser',
          'Per-member feature branches (project-setup, UI, task logic)',
          'Full team workflow: clone, branch, code, commit, pull, push, PR, review, merge',
          'Runs locally by opening index.html — no build step',
        ],
        role: 'Project Lead · feature/project-setup',
        github: 'https://github.com/maankaalasushanth-crypto/team-task-board',
        demo: null, // No homepage URL on the repo — no demo link rendered.
      },
    ],
  },

  contact: {
    heading: 'Contact',
    subheading:
      'The best way to reach me is email. My GitHub and LinkedIn are linked below.',
  },

  // Sections rendered by the site. Experience, Education, Certifications and
  // Achievements are omitted: none are documented in verified sources.
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],

  resumePath: 'resume/resume.pdf',
}

export default portfolioData
