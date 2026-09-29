import { portfolioData } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  const { personal, social, nav } = portfolioData

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
          © {year} {personal.name} · {personal.locationShort}
        </p>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
          <a href={social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
        <button type="button" className="to-top" onClick={toTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
