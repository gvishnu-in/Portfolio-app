import './Education.css'

const schools = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    school: 'Anurag University, Ghatkesar, Hyderabad',
    period: 'Nov 2021 – May 2025',
    detail: 'CGPA: 7.29 / 10',
  },
  {
    degree: 'Intermediate (MPC)',
    school: 'Narayana Junior College, Hyderabad',
    period: '2019 – 2021',
    detail: 'Percentage: 97.6%',
  },
  {
    degree: 'SSC',
    school: 'New Shathavahana High School, Huzurabad',
    period: '2019',
    detail: 'GPA: 9.5 / 10',
  },
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">education</span>
          <h2>Academic background</h2>
        </div>

        <div className="education-list">
          {schools.map((item) => (
            <div className="education-card" key={item.degree}>
              <div className="education-top">
                <h3>{item.degree}</h3>
                <span className="education-period">{item.period}</span>
              </div>
              <p className="education-school">{item.school}</p>
              <p className="education-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
