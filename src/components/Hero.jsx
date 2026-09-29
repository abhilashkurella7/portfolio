import { useRef } from 'react'
import { portfolioData } from '../data/portfolio'

function Magnetic({ children }) {
  const onMove = (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    el.style.transform = `translate(${x * 7}px, ${y * 7}px)`
  }
  const onLeave = (e) => {
    e.currentTarget.style.transform = ''
  }
  return (
    <span
      style={{ display: 'inline-flex' }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </span>
  )
}

export default function Hero() {
  const { personal, social, resumePath } = portfolioData
  const sectionRef = useRef(null)
  // No resume file was provided — button stays a clearly labelled
  // disabled state instead of a broken link.
  const resumeReady = false

  const onPointer = (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const node = sectionRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    node.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-name"
      ref={sectionRef}
      onPointerMove={onPointer}
    >
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-top hero-enter" style={{ '--enter-delay': '60ms' }}>
          <span className="lbl">Folio — © 2026</span>
          <span className="lbl hide-sm">Hyderabad, IN · 17.38°N 78.48°E</span>
          <span className="dot-live">
            <i aria-hidden="true" />
            Open to collaboration
          </span>
        </div>

        <h1 id="hero-name" className="hero-name" aria-label={personal.name}>
          <span className="row hero-enter" style={{ '--enter-delay': '140ms' }} aria-hidden="true">
            <span>Abhilash</span>
          </span>
          <span className="row hero-enter" style={{ '--enter-delay': '230ms' }} aria-hidden="true">
            <span className="stroke">Kurella</span>
          </span>
        </h1>

        <div className="hero-mid">
          <p className="hero-role hero-enter" style={{ '--enter-delay': '320ms' }}>
            {personal.headline} — <em>{personal.subline}</em>
          </p>
          <p className="hero-bio hero-enter" style={{ '--enter-delay': '400ms' }}>
            {personal.bio}
          </p>
        </div>

        <div className="hero-cta hero-enter" style={{ '--enter-delay': '480ms' }}>
          <Magnetic>
            <a href="#projects" className="btn btn-solid">
              View my work
              <span className="ext" aria-hidden="true">↓</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={social.github}
              className="btn btn-line"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span className="ext" aria-hidden="true">↗</span>
            </a>
          </Magnetic>
          {resumeReady ? (
            <Magnetic>
              <a href={resumePath} className="btn btn-line" download>
                Resume
                <span className="ext" aria-hidden="true">↓</span>
              </a>
            </Magnetic>
          ) : (
            <span
              className="btn btn-line"
              aria-disabled="true"
              title="Add public/resume/resume.pdf to enable this button"
            >
              Resume — coming soon
            </span>
          )}
        </div>

        <div className="hero-links hero-enter" style={{ '--enter-delay': '560ms' }}>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span className="ext" aria-hidden="true">↗</span>
          </a>
          <a href={social.github} target="_blank" rel="noreferrer">
            GitHub <span className="ext" aria-hidden="true">↗</span>
          </a>
          <a href="https://spirit-coders.vercel.app" target="_blank" rel="noreferrer">
            Live project <span className="ext" aria-hidden="true">↗</span>
          </a>
        </div>

        <dl className="spec hero-enter" style={{ '--enter-delay': '640ms' }}>
          <div>
            <dt>Status</dt>
            <dd>Pursuing B.Tech · NNRG</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Python · Web · AI systems</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>TypeScript · React · Flask</dd>
          </div>
          <div>
            <dt>Live</dt>
            <dd>
              <a
                href="https://spirit-coders.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Smart Agent X ↗
              </a>
            </dd>
          </div>
        </dl>

        <a
          className="scroll-cue hero-enter"
          style={{ '--enter-delay': '720ms', marginTop: '2.5rem' }}
          href="#about"
          aria-label="Scroll to about section"
        >
          <span className="track" aria-hidden="true" />
          <span className="lbl">Scroll</span>
        </a>
      </div>
    </section>
  )
}
