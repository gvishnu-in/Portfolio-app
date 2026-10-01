import './Projects.css'

const projects = [
  {
    path: '~/projects/autopartshub',
    name: 'AutoPartsHub',
    description:
      'A React e-commerce CRUD application for browsing and buying car and bike spare parts. The Vite frontend is deployed on Vercel and communicates with a JSON Server API deployed on Render.',
    stack: ['React', 'Vite', 'React Router DOM', 'Axios', 'Context API', 'JSON Server', 'CSS3', 'localStorage'],
    github: 'https://github.com/gvishnu-in/AutoPartsHub',
    demo: 'https://auto-parts-hub-chi.vercel.app/',
    extraLink: {
      label: 'Deployment Notes',
      href: '/uploaded-files/AutoPartsHub_Complete_Deployment_Steps.md',
    },
  },
  {
    path: '~/projects/weather-station',
    name: 'Weather Station',
    description:
      'A lightweight, client-side weather dashboard that delivers real-time conditions and a short-term forecast for any city worldwide. Integrates with the OpenWeatherMap API for current conditions and 5-day/3-hour forecasts, with dynamic theming (rain, wind, snow, sun glow), a Celsius/Fahrenheit toggle, and an animated day/night sun-arc indicator, all presented in a terminal-inspired UI.',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Fetch API', 'OpenWeatherMap API'],
    demo: 'https://my-weatherapp-01.netlify.app/',
  },
  {
    path: '~/projects/vlan-network-security',
    name: 'VLAN & Network Security Design',
    description:
      'Designed a subnetted VLAN topology connecting multiple routers, switches, and end devices in Cisco Packet Tracer. Configured RIP dynamic routing, plus Static NAT, Dynamic NAT, and PAT, along with ACLs to control host- and subnet-level access.',
    stack: ['Cisco Packet Tracer', 'VLAN', 'NAT', 'ACL', 'RIP', 'DHCP', 'DNS'],
  },
  {
    path: '~/projects/lunar-crater-detection',
    name: 'Lunar Crater Detection (YOLOv2)',
    description:
      'Trained a YOLOv2 deep learning model to detect and classify lunar craters from satellite images, achieving over 90% accuracy using a custom-labeled dataset and image augmentation techniques.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv2'],
  },
  {
    path: '~/projects/smart-street-light',
    name: 'Smart Street Light Automation (IoT)',
    description:
      'An IoT-based street light system using Arduino and sensors to optimize energy usage. Automates lighting based on motion and ambient light levels to enhance efficiency.',
    stack: ['Embedded C', 'Arduino IDE', 'IoT', 'Sensors'],
  },
  {
    path: '~/projects/web-app-entry-form',
    name: 'Web-Based Application Entry Form',
    description:
      'A secure and responsive web application built with JSP and integrated with a MySQL backend. Implements real-time form validation and ensures data integrity.',
    stack: ['HTML', 'JSP', 'Servlets', 'MySQL'],
  },
]

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer">
          Live Demo <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.extraLink && (
        <a href={project.extraLink.href} target="_blank" rel="noreferrer">
          {project.extraLink.label} <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  )
}

function Projects() {
  const featuredProject = projects[0]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-heading">
          <div className="section-head">
            <span className="section-tag">02 / Selected work</span>
            <h2>Projects with a purpose.</h2>
          </div>
          <p>Product interfaces, APIs, networks, and experiments across the stack.</p>
        </div>

        <article className="project-featured">
          <div
            className="project-visual"
            role="img"
            aria-label="AutoPartsHub deployment diagram: React and Vite frontend deployed on Vercel connects to a JSON Server API deployed on Render."
          >
            <div className="project-visual-head">
              <span>PRODUCT SYSTEM / 01</span>
              <span>WEB APPLICATION</span>
            </div>
            <div className="project-diagram">
              <div className="project-node">
                <span>01 / CLIENT</span>
                <strong>React + Vite</strong>
                <small>Frontend / Vercel</small>
              </div>
              <div className="project-connector" aria-hidden="true"><span>API REQUEST</span></div>
              <div className="project-node">
                <span>02 / DATA</span>
                <strong>JSON Server</strong>
                <small>API / Render</small>
              </div>
            </div>
            <div className="project-visual-foot">
              <span>INTERFACE</span><span>↔</span><span>API</span>
            </div>
          </div>

          <div className="project-featured-copy">
            <p className="project-index">FEATURED PROJECT / 01</p>
            <p className="project-path">{featuredProject.path}</p>
            <h3 className="project-name">{featuredProject.name}</h3>
            <p className="project-description">{featuredProject.description}</p>
            <ul className="project-stack">
              {featuredProject.stack.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
            <ProjectLinks project={featuredProject} />
          </div>
        </article>

        <div className="project-detail-band">
          <ul className="project-facts" aria-label="AutoPartsHub project scope">
            <li><strong>11</strong><span>Application views</span></li>
            <li><strong>03</strong><span>Context stores</span></li>
            <li><strong>18</strong><span>Source files</span></li>
          </ul>
          <div className="project-capabilities">
            <article>
              <h4>Browse & buy</h4>
              <p>Category browsing, product details, guest cart, checkout, and order placement.</p>
            </article>
            <article>
              <h4>Account & orders</h4>
              <p>Validated registration and login, protected wishlist, editable profile, and order tracking.</p>
            </article>
            <article>
              <h4>Manage</h4>
              <p>Protected routes and an admin panel for adding, editing, and deleting products.</p>
            </article>
          </div>
          <p className="project-implementation">
            <strong>Implementation</strong>
            <span>React Router DOM for navigation; page-level Axios calls to the db.json-backed JSON Server API; Context API for authentication, cart, and wishlist state; localStorage for session persistence; plain CSS3 styling.</span>
          </p>
        </div>

        <div className="projects-supporting" aria-label="Additional projects">
          {projects.slice(1).map((project, index) => (
            <article className="project-row" key={project.name}>
              <span className="project-row-number">{String(index + 2).padStart(2, '0')}</span>
              <div className="project-row-main">
                <p className="project-path">{project.path}</p>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-stack">
                  {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects