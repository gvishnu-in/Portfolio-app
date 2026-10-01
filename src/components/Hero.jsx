import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span>01</span> DEVELOPER PROFILE <span>HYDERABAD, INDIA</span></p>
          <h1 className="hero-name">Vishnu Vardhan</h1>
          <h2 className="hero-role">Entry-level Full Stack Python Developer</h2>
          <p className="hero-intro">
            I build web applications with Python, Django, REST APIs, React,
            and SQL. I’m looking for an entry-level role where I can contribute
            across the stack and keep growing as an engineer.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn">
              Contact Me
            </a>
            <a
              href="https://github.com/gvishnu-in"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/replace-with-your-linkedin"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="/uploaded-files/Vishnu-Vardhan-Resume.pdf"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div className="hero-credentials">
            <span>B.Tech / Electronics & Communication</span>
            <span>Available for entry-level roles</span>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Development focus">
          <div className="hero-aside-top">
            <span>FIELD NOTES / 01</span>
            <span>PYTHON + WEB</span>
          </div>
          <img
            className="hero-photo"
            src="/portfoliopic.png"
            alt="Portrait of Vishnu Vardhan"
          />
          <div className="hero-aside-caption">
            <p>Building across layers.</p>
            <span>Interface / API / Data</span>
          </div>
          <div className="hero-aside-bottom">
            <div>
              <span>FRONTEND</span>
              <strong>React, JavaScript</strong>
            </div>
            <div>
              <span>BACKEND</span>
              <strong>Python, Django, SQL</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
