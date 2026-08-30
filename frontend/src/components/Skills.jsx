import skills from '../data/skills.json'

export default function Skills() {
  return (
    <dl className="skills">
      {skills.map((group) => (
        <div key={group.group} className="skill-group">
          <dt>{group.group}</dt>
          <dd>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill">{item}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}
