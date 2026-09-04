import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Vishnu Vardhan</p>
        <div className="footer-links">
          <a
            href="https://github.com/gvishnu-in"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/replace-with-your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
