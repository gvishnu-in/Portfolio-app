import './Certifications.css'

const certifications = [
  {
    name: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
  },
  {
    name: 'IT Essentials: PC Hardware and Software',
    issuer: 'Cisco Networking Academy',
  },
  {
    name: 'Programming Fundamentals',
    issuer: 'Coursera, authorized by Duke University',
  },
  {
    name: 'AI & Data Science Specialist',
    issuer: 'Data Minds Analytics Pvt Ltd',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">certifications</span>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-body">
          <ul className="certifications-list">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </li>
            ))}
          </ul>

          <a
            href="/uploaded-files/Certificates.pdf"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View All Certificates (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications
