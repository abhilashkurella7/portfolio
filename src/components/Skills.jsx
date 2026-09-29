import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const { skills } = portfolioData
  return (
    <section className="section section-alt" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={skills.heading}
          sub={skills.subheading}
          id="skills-title"
        />
        <div className="skills-grid">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 110}>
              <article className="skill-group">
                <h3>{group.title}</h3>
                <p className="skill-note">{group.note}</p>
                <ul className="chip-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="honesty-note">
            No proficiency bars or percentages — those would imply measurements
            that don&apos;t exist. This list mirrors exactly what my public
            GitHub profile and repositories document.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
