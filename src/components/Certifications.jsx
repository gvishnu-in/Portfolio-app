import './Certifications.css'

const certifications = [
  {
    name: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    file: 'CCNA-_Introduction_to_Networks_certificate_21eg104b17-anurag-edu-in_aaf942e1-717a-4a5b-9415-e597bc61e6f9.pdf',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    file: 'Introduction_to_Cybersecurity_certificate_21eg104b17-anurag-edu-in_f17f5a6c-874f-441a-acf0-4bc7d1036222.pdf',
  },
  {
    name: 'IT Essentials: PC Hardware and Software',
    issuer: 'Cisco Networking Academy',
    file: 'IT_Essentials_certificate_21eg104b17-anurag-edu-in_617ea557-757a-40ca-aae7-d311e1bc117b.pdf',
  },
  {
    name: 'Programming Fundamentals',
    issuer: 'Coursera, authorized by Duke University',
    file: 'Coursera MGVK886W48F7.pdf',
  },
  {
    name: 'AI & Data Science Specialist',
    issuer: 'Data Minds Analytics Pvt Ltd',
    file: 'DATASCIENTIST.pdf',
  },
  {
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    file: 'Cybersecurity_Essentials_certificate_21eg104b17-anurag-edu-in_2e3ab31f-5431-44d3-807a-3b437f50ed84.pdf',
  },
  {
    name: 'Frontend Development',
    issuer: 'Certificate',
    file: 'pfs62_frontend.pdf',
  },
  {
    name: 'Introduction to Python',
    issuer: 'SoloLearn',
    file: 'SoloLearn_Introduction to Python.pdf',
  },
  {
    name: 'Certificate',
    issuer: 'G Vishnuvardhan',
    file: 'G vishnuvardhan - Certificate.pdf',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section certifications section-sage">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">05 / Certifications</span>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-body">
          <ul className="certifications-list">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <a
                  className="cert-name"
                  href={`/uploaded-files/Certifications/${encodeURIComponent(cert.file)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cert.name}
                </a>
                <span className="cert-issuer">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Certifications
