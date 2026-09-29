import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  const { about } = portfolioData
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={about.heading}
          id="about-title"
        />
        <div className="about-grid">
          <Reveal>
            <p className="about-lede">{about.paragraphs[0]}</p>
            <p>{about.paragraphs[1]}</p>
            <p className="status-card">{about.statusLine}</p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="focus-grid">
              {about.focusPoints.map((point, i) => (
                <li className="focus-card" key={point.title}>
                  <span className="focus-num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
