import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-signoff">Vishnu Vardhan <span> / Full Stack Python Developer</span></a>
        <p>© {year} Hyderabad, India</p>
        <div className="footer-links">
          <a href="mailto:gv2047@gmail.com">Email</a>
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
