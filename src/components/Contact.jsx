import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { contact, social, personal } = portfolioData

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build"
          accentWord="something useful."
          id="contact-title"
        />
        <Reveal delay={100}>
          <p className="contact-sub">{contact.subheading}</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="contact-rows">
            <a href={social.github} target="_blank" rel="noreferrer">
              <span className="c-name">GitHub</span>
              <span className="c-meta">github.com/abhilashkurella7</span>
              <span className="c-arrow" aria-hidden="true">↗</span>
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <span className="c-name">LinkedIn</span>
              <span className="c-meta">{personal.name}</span>
              <span className="c-arrow" aria-hidden="true">↗</span>
            </a>
            <a href="https://spirit-coders.vercel.app" target="_blank" rel="noreferrer">
              <span className="c-name">Live project</span>
              <span className="c-meta">spirit-coders.vercel.app</span>
              <span className="c-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
