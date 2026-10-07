import { ReactNode } from 'react'
import { about } from '../data'

export function Section({ id, title, aside, children }: { id: string; title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`}>{title}</h2>
        {aside && <span className="section-aside">{aside}</span>}
      </div>
      {children}
    </section>
  )
}

const NAV = [
  ['#publications', 'Publications'],
  ['#experience', 'Experience'],
  ['#teaching', 'Teaching'],
  ['#projects', 'Projects'],
]

function toggleTheme() {
  const root = document.documentElement
  const current = root.getAttribute('data-theme')
    ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const next = current === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try { localStorage.setItem('theme', next) } catch {}
}

function ThemeButton() {
  return (
    <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
      <svg viewBox="0 0 24 24" aria-hidden><path d="M12 3a9 9 0 1 0 0 18z" fill="currentColor" /><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
    </button>
  )
}

export function TopBar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a href="#top" className="topbar-logo" aria-label={`${about.name}, back to top`}>
          <Logo />
        </a>
        <nav aria-label="Sections">
          {NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="topbar-actions">
          {about.cv && <a href={about.cv} className="btn">CV</a>}
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}

// Inline copy of public/logo.svg (/^[A-Z]*$/: "A–Z", Amir Ziashahabi), so it follows the theme.
function Logo() {
  return (
    <svg viewBox="0 0 180 40" aria-hidden>
      <rect width="180" height="40" rx="6" fill="currentColor" />
      <text x="90" y="20" fontFamily="'Courier New', monospace" fontSize="26" fontWeight="bold" style={{ fill: 'var(--bg)' }} textAnchor="middle" dominantBaseline="middle">
        /^[A-Z]*$/
      </text>
    </svg>
  )
}

export function Footer({ year }: { year: string }) {
  return (
    <footer className="footer">
      <p>© {year} {about.name}</p>
    </footer>
  )
}
