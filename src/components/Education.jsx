import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  const { education } = portfolioData
  if (!education || !education.items || !education.items.length) return null
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="wrap">
        <SectionHeading
          index="04"
          eyebrow="Education"
          title={education.heading}
          sub={education.subheading}
          id="education-title"
        />
        <ol className="timeline">
          {education.items.map((item) => (
            <Reveal as="li" key={item.institution}>
              <span className="t-dot" aria-hidden="true" />
              <div>
                <p className="t-program">
                  {item.program} · {item.field}
                </p>
                <h3>{item.institution}</h3>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
