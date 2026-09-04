import './Projects.css'

const projects = [
  {
    path: '~/projects/autopartshub',
    name: 'AutoPartsHub',
    description:
      'An online automobile-parts platform for browsing vehicle spare parts and product details. React/Vite frontend deployed on Vercel, talking to a JSON Server API deployed on Render.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'JSON Server'],
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

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">projects</span>
          <h2>Things I've built</h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="project-path">{project.path}</p>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.extraLink && (
                  <a
                    href={project.extraLink.href}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.extraLink.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects