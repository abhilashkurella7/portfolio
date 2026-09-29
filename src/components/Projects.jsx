import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Constellation() {
  const ink = 'var(--ink-3)'
  const nodes = [
    { x: 70, y: 80, label: 'TUTOR' },
    { x: 310, y: 80, label: 'PLANNER' },
    { x: 70, y: 230, label: 'ASSESSOR' },
    { x: 310, y: 230, label: 'AGENT·R' },
  ]
  return (
    <svg viewBox="0 0 380 310" role="img" aria-label="Diagram of four AI agents connected to a central core">
      <circle className="orbit" cx="190" cy="155" r="120" fill="none" stroke={ink} strokeWidth="1" opacity="0.7" />
      <circle className="orbit" cx="190" cy="155" r="150" fill="none" stroke={ink} strokeWidth="1" opacity="0.35" />
      {nodes.map((n) => (
        <g key={n.label}>
          <line x1="190" y1="155" x2={n.x} y2={n.y} stroke={ink} strokeWidth="1" opacity="0.6" />
          <circle cx={n.x} cy={n.y} r="26" fill="var(--surface)" stroke={ink} strokeWidth="1.5" />
          <text x={n.x} y={n.y + 25} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fill={ink}>
            {n.label}
          </text>
        </g>
      ))}
      <circle cx="190" cy="155" r="34" fill="var(--accent)" />
      <text x="190" y="150" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif" fill="var(--on-accent)">
        CORE
      </text>
      <text x="190" y="165" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="var(--on-accent)" opacity="0.85">
        4 AGENTS
      </text>
    </svg>
  )
}

export default function Projects() {
  const { projects, social } = portfolioData
  const [feature, ...rest] = projects.items

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title={projects.heading}
          sub={projects.subheading}
          id="projects-title"
        />

        <Reveal>
          <article className="feat" aria-labelledby="project-feature">
            <div className="feat-visual">
              <span className="live-badge">
                <i aria-hidden="true" />
                Live
              </span>
              <Constellation />
              <span className="fig-cap">Fig. 01 — Multi-agent learning loop</span>
            </div>
            <div className="feat-meta">
              <p className="proj-idx">P.01 — Featured build</p>
              <h3 id="project-feature">{feature.name}</h3>
              <p className="proj-tag">{feature.tagline}</p>
              <p className="proj-desc">{feature.description}</p>
              <ul className="tech-meta" aria-label={`Technologies used in ${feature.name}`}>
                {feature.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ul className="feat-list">
                {feature.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="proj-actions">
                <a
                  href={feature.github}
                  className="btn btn-solid btn-sm"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${feature.name} source code on GitHub (opens in new tab)`}
                >
                  View on GitHub
                  <span className="ext" aria-hidden="true">↗</span>
                </a>
                {feature.demo ? (
                  <a
                    href={feature.demo}
                    className="btn btn-line btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                    <span className="ext" aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
              <p className="proj-role">{feature.role}</p>
            </div>
          </article>
        </Reveal>

        {rest.map((project, i) => (
          <Reveal key={project.name} delay={100}>
            <article className="proj-row" aria-labelledby={`project-row-${i}`}>
              <div className="doc-glyph" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div>
                <p className="proj-idx">P.0{i + 2}</p>
                <h3 id={`project-row-${i}`}>{project.name}</h3>
                <p className="proj-tag">{project.tagline}</p>
                <p className="proj-desc">{project.description}</p>
                <ul className="tech-meta" aria-label={`Technologies used in ${project.name}`}>
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="proj-actions">
                <a
                  href={project.github}
                  className="btn btn-line btn-sm"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
                >
                  View on GitHub
                  <span className="ext" aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={120}>
          <div className="more-strip">
            <p>
              Two public repositories so far — this space grows with every repo
              I ship. Follow along on GitHub for what&apos;s next.
            </p>
            <a
              href={social.github}
              className="btn btn-line btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub
              <span className="ext" aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
