import { useState } from 'react'
import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  const { about, personal } = portfolioData
  const [src, setSrc] = useState(personal.photo)
  const onPhotoError = () => {
    // Local portrait missing (e.g. not added yet) — fall back to the
    // verified GitHub avatar so the layout never shows a broken image.
    if (src !== personal.avatar) setSrc(personal.avatar)
  }

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
            <p className="status-strip">
              <strong>Now — </strong>
              {about.statusLine}
            </p>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <figure className="portrait">
                <img
                  src={src}
                  alt={`Portrait of ${personal.name}`}
                  loading="lazy"
                  onError={onPhotoError}
                />
                <figcaption className="lbl">
                  Portrait — {personal.name} · {personal.locationShort}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <ul className="index-rows">
                {about.focusPoints.map((point, i) => (
                  <li key={point.title}>
                    <span className="idx" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
