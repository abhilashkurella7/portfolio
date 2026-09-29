import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ProjectVisual() {
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="browser-mock">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>team-task-board — index.html</span>
        </div>
        <div className="browser-body">
          <div className="mock-cols">
            <div className="mock-col">
              <h4>To do</h4>
              <div className="mock-task" />
              <div className="mock-task" />
            </div>
            <div className="mock-col">
              <h4>Doing</h4>
              <div className="mock-task" />
            </div>
            <div className="mock-col">
              <h4>Done</h4>
              <div className="mock-task done" />
              <div className="mock-task done" />
            </div>
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
              <ProjectVisual />
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
              I&apos;m early in my journey — this space grows with every
              repository I ship. Follow along on GitHub for what&apos;s next.
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
