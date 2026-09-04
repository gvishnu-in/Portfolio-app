import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  // close the mobile menu whenever the viewport grows back to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#home" className="navbar-brand" onClick={handleLinkClick}>
          <span className="navbar-prompt">~/</span>vishnu
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
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
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
