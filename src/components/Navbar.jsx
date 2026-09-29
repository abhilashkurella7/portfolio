import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolio'

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3L19 19M19 5l-1.7 1.7M6.7 17.3L5 19" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
  )
}

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const { nav, personal } = portfolioData

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight
        setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0)
        setScrolled(window.scrollY > 24)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [nav])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open ])

  return (
    <>
      <header className={`nav-float${scrolled ? ' is-scrolled' : ''}`}>
        <div className="nav-pill">
          <a href="#home" className="nav-brand" aria-label="Back to top — home">
            <span className="nav-mark" aria-hidden="true">
              {personal.initials}
            </span>
            Abhilash
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={active === item.id ? 'is-active' : ''}
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-tools">
            <button
              type="button"
              className="icon-btn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <span className="spin" aria-hidden="true">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>
            <a href="#contact" className="btn btn-solid btn-sm nav-cta">
              Let&apos;s talk
            </a>
            <button
              type="button"
              className="icon-btn burger"
              aria-expanded={open}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true">{open ? '✕' : '☰'}</span>
            </button>
          </div>
          <div
            className="nav-progress"
            aria-hidden="true"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      <div className={`menu-overlay${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  style={{ transitionDelay: open ? `${80 + i * 60}ms` : '0ms' }}
                >
                  <span className="m-idx">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-foot">
          <a className="ulink lbl" href={portfolioData.social.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
            GitHub ↗
          </a>
          <a className="ulink lbl" href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
            LinkedIn ↗
          </a>
          <a className="ulink lbl" href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Contact →
          </a>
        </div>
      </div>
    </>
  )
}
