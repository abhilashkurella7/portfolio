import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Activities() {
  const { activities } = portfolioData
  if (!activities || !activities.items || !activities.items.length) return null
  return (
    <section className="section" id="activities" aria-labelledby="activities-title">
      <div className="wrap">
        <SectionHeading
          index="05"
          eyebrow="Activities"
          title={activities.heading}
          sub={activities.subheading}
          id="activities-title"
        />
        <ul className="focus-grid">
          {activities.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <li className="focus-card">
                <span className="focus-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
