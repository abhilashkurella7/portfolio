import { portfolioData } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  const { personal, social } = portfolioData

  const toTop = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          © {year} {personal.name} · {personal.locationShort} · Content based
          only on publicly verified information.{' '}
          <a href={social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          ·{' '}
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <button type="button" className="to-top" onClick={toTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
