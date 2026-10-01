import './Skills.css'

const groups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend & APIs',
    items: ['Django', 'Django REST Framework', 'REST APIs', 'Node.js'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Vite', 'HTML5', 'CSS3'],
  },
  {
    title: 'Data & Tools',
    items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Power BI'],
  },
  {
    title: 'Networking',
    items: ['Cisco Packet Tracer', 'VLAN', 'NAT', 'ACL', 'RIP', 'DHCP', 'DNS'],
  },
  {
    title: 'AI & Computer Vision',
    items: ['TensorFlow', 'OpenCV', 'YOLOv2'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills section-sage">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">03 / Technical toolkit</span>
          <h2>Tools for the whole stack.</h2>
        </div>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <div className="skills-group" key={group.title}>
              <span className="skills-number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="skills-dir">{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skills-bullet">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
