import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  const { education } = portfolioData
  if (!education || !education.items || !education.items.length) return null
  return (
    <section className="section section-alt" id="education" aria-labelledby="education-title">
      <div className="wrap">
        <SectionHeading
          index="04"
          eyebrow="Education"
          title={education.heading}
          sub={education.subheading}
          id="education-title"
        />
        <div className="edu-grid">
          {education.items.map((item) => (
            <Reveal key={item.institution}>
              <article className="edu-card">
                <p className="edu-program">
                  {item.program} · {item.field}
                </p>
                <h3>{item.institution}</h3>
                <p className="edu-detail">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
