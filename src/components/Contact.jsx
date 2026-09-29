import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export default function Contact() {
  const { contact, social, personal } = portfolioData
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(social.email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = social.email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section section-alt" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title={contact.heading}
          sub={contact.subheading}
          id="contact-title"
        />
        <div className="contact-grid">
          <Reveal>
            <div className="contact-card">
              <h3>Email me directly</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '0.97rem' }}>
                No forms, no middlemen — your message lands straight in my
                inbox. I&apos;m happy to talk about learning, collaboration or
                opportunities.
              </p>
              <div className="email-row">
                <span className="email-address">{social.email}</span>
              </div>
              <div className="email-row">
                <a href={`mailto:${social.email}`} className="btn btn-primary btn-sm">
                  Write an email
                </a>
                <button type="button" className="btn btn-ghost btn-sm" onClick={copyEmail}>
                  {copied ? 'Copied ✓' : 'Copy email'}
                </button>
              </div>
              <span aria-live="polite" style={{ fontSize: '0.85rem', color: 'var(--ink-3)' }}>
                {copied ? 'Email address copied to clipboard.' : ''}
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="social-list" aria-label="Social profiles">
              <li>
                <a href={social.github} target="_blank" rel="noreferrer">
                  <span className="social-icon">
                    <GitHubIcon />
                  </span>
                  <span>
                    <strong>
                      GitHub <span className="ext-mark" aria-hidden="true">↗</span>
                    </strong>
                    <small>github.com/maankaalasushanth-crypto</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={social.linkedin} target="_blank" rel="noreferrer">
                  <span className="social-icon">
                    <LinkedInIcon />
                  </span>
                  <span>
                    <strong>
                      LinkedIn <span className="ext-mark" aria-hidden="true">↗</span>
                    </strong>
                    <small>{personal.name}</small>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
