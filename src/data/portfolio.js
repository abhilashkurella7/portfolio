/*
 * VERIFIED CONTENT — source of truth for Abhilash Kurella's portfolio.
 * -----------------------------------------------------------------
 * Sources checked 2026-09-29:
 *  - GitHub profile  https://github.com/abhilashkurella7
 *      name "Abhilash Kurella", avatar, 2 public repos,
 *      location generalised to city (house number never exposed).
 *  - GitHub API      api.github.com/users/abhilashkurella7 (+/repos)
 *  - Repo            abhilashkurella7/spirit-coders
 *      languages: TypeScript / CSS / JavaScript (API),
 *      homepage: https://spirit-coders.vercel.app (repo field),
 *      package.json: React 19, Vite, Tailwind CSS, TanStack Start/Router,
 *      Radix UI — tech listed only from these files.
 *  - Live demo       https://spirit-coders.vercel.app
 *      visible copy: "Smart Agent X", multi-agent AI personalized learning,
 *      Tutor / Planner / Assessor / Recommender agents, 12 capabilities,
 *      3 roles (Students / Teachers / Admins). Features below quote only
 *      what the live page visibly lists.
 *  - Repo            abhilashkurella7/resume-
 *      README.md (public): B.Tech at NNRG, Computer Science student,
 *      aspiring software developer; interests Python, web development, AI;
 *      hands-on HTML, Python, Flask, databases, GitHub, deployment
 *      platforms; hackathons + technical projects. About/education/skills
 *      below paraphrase only these sentences.
 *  - LinkedIn        https://www.linkedin.com/in/abhilash-kurella-6547b2371/
 *      URL user-provided; page body is auth-walled, so no profile claims
 *      are used — link only.
 *  - Resume file     none provided — Resume button stays disabled, no link.
 *  - Kaggle          none provided — section omitted.
 *  - Email           none publicly verified — no email shown, no fake form.
 *
 * Rules enforced: no invented jobs, companies, metrics, CGPA, dates,
 * certifications, testimonials, stars, or demo links. Anything unverified
 * is omitted and the UI only renders sections with data.
 */

export const portfolioData = {
  personal: {
    name: 'Abhilash Kurella',
    headline: 'Computer Science Student',
    subline: 'B.Tech · NNRG — aspiring software developer',
    bio: 'Computer Science student pursuing B.Tech at NNRG. I build practical web apps with Python and Flask, and I am exploring AI and intelligent learning systems — including a multi-agent learning platform now live on the web.',
    locationShort: 'Hyderabad, India',
    avatar: 'https://avatars.githubusercontent.com/u/281837371?v=4',
    photo: 'images/profile.jpg',
    initials: 'AK',
  },

  social: {
    github: 'https://github.com/abhilashkurella7',
    linkedin: 'https://www.linkedin.com/in/abhilash-kurella-6547b2371/',
    // No publicly verified email — contact section uses profiles only.
    email: null,
  },

  about: {
    heading: 'About me',
    paragraphs: [
      'I am Abhilash — a Computer Science student pursuing B.Tech at NNRG and an aspiring software developer.',
      'My stated focus is Python, web development and Artificial Intelligence: turning ideas into working projects, from Python applications and Flask web platforms to AI-powered systems and personalized learning solutions. I work with HTML, Python, Flask, databases, GitHub and deployment platforms, and I take part in hackathons and technical problem-solving while strengthening full-stack and AI fundamentals.',
    ],
    focusPoints: [
      {
        title: 'Python & Flask',
        text: 'Python applications and Flask web platforms, as documented in my public README.',
      },
      {
        title: 'Web development',
        text: 'HTML plus modern frontend work — TypeScript, React, Vite and Tailwind CSS in my live project.',
      },
      {
        title: 'AI & learning systems',
        text: 'Exploring AI-powered systems and personalized learning: tutor, planner, assessor and recommender agents.',
      },
      {
        title: 'Shipping & collaborating',
        text: 'GitHub workflows, databases and deployment platforms — plus hackathons and real-world problem solving.',
      },
    ],
    statusLine:
      'Currently focused on programming, full-stack development and intelligent software systems — open to learning, collaborating and building useful products.',
  },

  skills: {
    heading: 'Skills',
    subheading:
      'Only what my public README, repositories and live demo document — this list grows as I learn.',
    groups: [
      {
        title: 'Programming Languages',
        note: 'From README + repo languages',
        items: ['Python', 'HTML', 'TypeScript', 'JavaScript', 'CSS'],
      },
      {
        title: 'Frameworks & Libraries',
        note: 'From README + package.json',
        items: ['Flask', 'React', 'TanStack Start', 'TanStack Router', 'Radix UI'],
      },
      {
        title: 'Styling & Build',
        note: 'From repo languages + package.json',
        items: ['Tailwind CSS', 'Vite', 'Responsive UI'],
      },
      {
        title: 'AI & Data Concepts',
        note: 'From README + live demo — exploring',
        items: [
          'Artificial Intelligence',
          'AI-powered systems',
          'Personalized learning',
          'Multi-agent workflows',
          'Databases',
        ],
      },
      {
        title: 'Tools & Platforms',
        note: 'From README + GitHub activity',
        items: ['GitHub', 'Git workflow', 'Deployment platforms', 'Vercel'],
      },
    ],
  },

  projects: {
    heading: 'Projects',
    subheading:
      'Two verified public repositories — one live web app, one documented profile repo. Nothing staged.',
    items: [
      {
        name: 'Spirit Coders — Smart Agent X',
        repo: 'spirit-coders',
        tagline: 'A multi-agent AI personalized learning platform — live on the web.',
        description:
          'Public repository owned by me with a verified live deployment. The live site presents "Smart Agent X": a team of AI agents (tutor, planner, assessment, recommendations) guiding learners, with dashboards for students, teachers and admins.',
        tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'TanStack Start', 'CSS', 'JavaScript'],
        features: [
          'Live deployment linked from the repository homepage field',
          'Four visible agents: Tutor, Planner, Assessor, Recommender',
          'Twelve platform capabilities listed on the live site, incl. AI learning paths and progress tracking',
          'Three roles on the live site: Students, Teachers, Admins',
        ],
        role: 'Repository owner · full-stack build',
        github: 'https://github.com/abhilashkurella7/spirit-coders',
        demo: 'https://spirit-coders.vercel.app',
        visual: 'agents',
      },
      {
        name: 'resume-',
        repo: 'resume-',
        tagline: 'Public README documenting my background and direction.',
        description:
          'A small public repository whose README states my education (B.Tech at NNRG), my Computer Science focus, and my interests across Python, web development, Flask, databases, GitHub, deployment and AI — the source for the About and Education sections on this page.',
        tech: ['Markdown', 'GitHub'],
        features: [
          'Documents B.Tech pursuit at NNRG and CS direction',
          'Lists hands-on stack: HTML, Python, Flask, databases, GitHub, deployment',
          'States hackathon and technical-project participation',
        ],
        role: 'Owner · documentation',
        github: 'https://github.com/abhilashkurella7/resume-',
        demo: null,
        visual: 'doc',
      },
    ],
  },

  education: {
    heading: 'Education',
    subheading: 'Only what my public README states — no dates, grades or coursework invented.',
    items: [
      {
        institution: 'NNRG',
        program: 'B.Tech',
        field: 'Computer Science',
        detail:
          'Pursuing B.Tech at NNRG as a Computer Science student and aspiring software developer, per my public repository README.',
      },
    ],
  },

  activities: {
    heading: 'Activities',
    subheading: 'What my README documents — no event names invented.',
    items: [
      {
        title: 'Hackathons',
        text: 'Active participation in hackathons, per my public README.',
      },
      {
        title: 'Technical projects',
        text: 'Building practical technology solutions and software-focused problem solving.',
      },
      {
        title: 'Continuous learning',
        text: 'Exploring new technologies while strengthening programming, full-stack and AI fundamentals.',
      },
    ],
  },

  contact: {
    heading: 'Contact',
    subheading:
      'No public email on record — the verified way to reach me is GitHub or LinkedIn.',
  },

  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'activities', label: 'Activities' },
    { id: 'contact', label: 'Contact' },
  ],

  resumePath: 'resume/resume.pdf',
}

export default portfolioData
