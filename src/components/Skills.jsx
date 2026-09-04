import './Skills.css'

const groups = [
  {
    dir: 'programming/',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    dir: 'backend/',
    items: ['Django', 'Django REST Framework', 'REST APIs', 'Node.js'],
  },
  {
    dir: 'frontend/',
    items: ['React.js', 'HTML5', 'CSS3'],
  },
  {
    dir: 'database-tools/',
    items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Power BI'],
  },
  {
    dir: 'networking/',
    items: ['Cisco Packet Tracer', 'VLAN', 'NAT', 'ACL', 'RIP', 'DHCP', 'DNS'],
  },
  {
    dir: 'ai-ml/',
    items: ['TensorFlow', 'OpenCV', 'YOLOv2'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">skills</span>
          <h2>What I work with</h2>
        </div>

        <div className="skills-grid">
          {groups.map((group) => (
            <div className="skills-group" key={group.dir}>
              <p className="skills-dir">{group.dir}</p>
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
