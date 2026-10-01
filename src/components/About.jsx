import './About.css'

function About() {
  return (
    <section id="about" className="section about section-light">
      <div className="container">
        <div className="about-layout">
          <div className="about-heading">
            <span className="section-tag">01 / About</span>
            <h2>Built by following systems all the way through.</h2>
            <p>From network layers to full-stack web applications.</p>
          </div>

          <div className="about-body">
            <p>
              I'm a B.Tech graduate in Electronics and Communication
              Engineering with a strong foundation in Python, Django, React,
              SQL, and web development. Along the way I moved into full stack
              development, and now work comfortably across the stack — from
              REST APIs built with Django REST Framework to interfaces built
              with React.
            </p>
            <p>
              My engineering background is in networking — I've worked with
              VLANs, NAT, ACLs, and routing in Cisco Packet Tracer — and that
              habit of tracing a system end to end carries over directly into
              how I debug and build web applications: from a form in the
              browser, through an API, into a database, and back.
            </p>
            <p>
              I'm eager to build scalable applications and grow as a full
              stack engineer in a dynamic organization.
            </p>
          <ul className="about-contact">
            <li>
              <span>Email</span>
              <a href="mailto:gv2047@gmail.com">gv2047@gmail.com</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+919573580365">+91 95735 80365</a>
            </li>
            <li>
              <span>Location</span>
              <span>Hyderabad, India</span>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
