import { useState } from 'react'
import { portfolioData } from '../data/portfolio'

function Magnetic({ children }) {
  const onMove = (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    el.style.transform = `translate(${x * 6}px, ${y * 6}px)`
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
  const [photoOk, setPhotoOk] = useState(true)
  // Resume activates only when resume/resume.pdf exists in public/.
  // No resume file was provided, so the button renders as a clearly
  // labelled disabled state instead of a broken link.
  const resumeReady = false
  const resumeHref = resumePath

  return (
    <section className="hero" id="home" aria-labelledby="hero-name">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="hero-kicker hero-enter" style={{ '--enter-delay': '40ms' }}>
            <span className="dot" aria-hidden="true" />
            {personal.headline} · {personal.locationShort}
          </p>
          <h1
            id="hero-name"
            className="hero-name hero-enter"
            style={{ '--enter-delay': '120ms' }}
          >
            {personal.name}
          </h1>
          <p className="hero-role hero-enter" style={{ '--enter-delay': '200ms' }}>
            Turning data into meaningful insights.
          </p>
          <p className="hero-bio hero-enter" style={{ '--enter-delay': '280ms' }}>
            {personal.bio}
          </p>
          <div className="hero-cta hero-enter" style={{ '--enter-delay': '360ms' }}>
            <Magnetic>
              <a href="#projects" className="btn btn-primary">
                View my work
                <span aria-hidden="true">↓</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={social.github}
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span className="ext-mark" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Magnetic>
            {resumeReady ? (
              <Magnetic>
                <a href={resumeHref} className="btn btn-ghost" download>
                  Resume
                  <span aria-hidden="true">↓</span>
                </a>
              </Magnetic>
            ) : (
              <span
                className="btn btn-ghost"
                aria-disabled="true"
                title="Add public/resume/resume.pdf to enable this button"
              >
                Resume — coming soon
              </span>
            )}
          </div>
          <div className="hero-links hero-enter" style={{ '--enter-delay': '440ms' }}>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span className="ext-mark" aria-hidden="true">↗</span>
            </a>
            <a href={social.github} target="_blank" rel="noreferrer">
              GitHub <span className="ext-mark" aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${social.email}`}>Email</a>
          </div>
        </div>

        <div className="hero-enter" style={{ '--enter-delay': '300ms' }}>
          <div className="profile-card">
            <div className="profile-banner" aria-hidden="true" />
            <div className="profile-body">
              {photoOk ? (
                <img
                  className="profile-photo"
                  src={personal.avatar}
                  alt={`Profile photo of ${personal.name}`}
                  width="104"
                  height="104"
                  loading="eager"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <div className="profile-fallback" aria-hidden="true">
                  {personal.initials}
                </div>
              )}
              <p className="profile-name">{personal.name}</p>
              <p className="profile-meta">
                {personal.headline} · {personal.locationShort}
              </p>
              <ul className="profile-chips" aria-label="Currently building skills in">
                <li>Python</li>
                <li>SQL</li>
                <li>Machine Learning</li>
                <li>Data Visualization</li>
              </ul>
              <div className="mini-bars" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <i key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
