import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // close the mobile menu whenever the viewport grows back to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 940) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]
        if (current) setActiveSection(current.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => setOpen(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      document.querySelector('.navbar-toggle')?.focus()
    }
  }

  return (
    <header className="navbar" onKeyDown={handleKeyDown}>
      <div className="navbar-inner container">
        <a href="#home" className="navbar-brand" onClick={handleLinkClick} aria-label="Vishnu Vardhan, home">
          <span className="navbar-monogram">VV</span>
          <span className="navbar-name">Vishnu Vardhan</span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/uploaded-files/Vishnu-Vardhan-Resume.pdf"
          className="navbar-resume"
          target="_blank"
          rel="noreferrer"
        >
          Resume <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar-mobile ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
