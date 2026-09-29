import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function AgentsVisual() {
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="browser-mock">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>spirit-coders.vercel.app — Smart Agent X</span>
        </div>
        <div className="browser-body">
          <div className="agent-hero">
            <span className="agent-pill">Multi-agent AI · Personalized learning</span>
            <strong>A team of AI agents, guiding every learner forward.</strong>
          </div>
          <div className="agent-grid">
            {['Tutor', 'Planner', 'Assessor', 'Recommender'].map((a) => (
              <div className="agent-card" key={a}>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DocVisual() {
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="browser-mock">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>resume- — README.md</span>
        </div>
        <div className="browser-body">
          <div className="doc-lines">
            <strong>Hi — I am Abhilash, B.Tech @ NNRG.</strong>
            <span />
            <span className="short" />
            <span />
            <span className="short" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { projects, social } = portfolioData
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title={projects.heading}
          sub={projects.subheading}
          id="projects-title"
        />
        {projects.items.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <article className="project-card" aria-labelledby={`project-${i}`}>
              {project.visual === 'agents' ? <AgentsVisual /> : <DocVisual />}
              <div className="project-body">
                <div className="project-top">
                  <h3 id={`project-${i}`}>{project.name}</h3>
                  <span className="project-role">{project.role}</span>
                </div>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>
                <ul className="tech-tags" aria-label={`Technologies used in ${project.name}`}>
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <ul className="feature-list">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a
                    href={project.github}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
                  >
                    View on GitHub
                    <span className="ext-mark" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="btn btn-ghost btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                      <span className="ext-mark" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal delay={120}>
          <div className="more-card">
            <p>
              Two public repositories so far — this space grows with every repo I
              ship. Follow along on GitHub for what&apos;s next.
            </p>
            <a
              href={social.github}
              className="btn btn-ghost btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub
              <span className="ext-mark" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
