import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Full Stack Developer</p>
          <h1 className="hero-name">
            Vishnu Vardhan
          </h1>
          <p className="hero-intro">
            Motivated B.Tech graduate with a strong foundation in Python,
            Django, React, and SQL. I build full stack web applications end
            to end, and I'm looking for an entry-level full stack developer
            role where I can grow into a stronger engineer.
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
        </div>

        <div className="hero-terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="terminal-dot" style={{ background: '#d9705a' }}></span>
            <span className="terminal-dot" style={{ background: '#e3a857' }}></span>
            <span className="terminal-dot" style={{ background: '#7fae6a' }}></span>
            <span className="terminal-title">whoami.sh</span>
          </div>
          <pre className="terminal-body">
<code>{`$ whoami
vishnu_vardhan

$ role
"Full Stack Developer"

$ stack --list
python, django, react
javascript, sql, node

$ status
open_to_work: true

$ location
"Hyderabad, India"`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero
