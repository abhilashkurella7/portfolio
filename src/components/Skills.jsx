import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const { skills } = portfolioData
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={skills.heading}
          sub={skills.subheading}
          id="skills-title"
        />
        <div className="skill-rows">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="skill-row">
                <div>
                  <h3>{group.title}</h3>
                  <p className="note">{group.note}</p>
                </div>
                <ul className="chips" aria-label={group.title}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="honesty">
            No proficiency bars or percentages — those would imply measurements
            that don&apos;t exist. This list mirrors exactly what my public
            README, repositories and live demo document.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
