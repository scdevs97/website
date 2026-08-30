import education from '../data/education.json'

export default function Education() {
  return (
    <ul className="edu-list">
      {education.map((e) => (
        <li key={e.school} className="edu-item">
          <span className="edu-school">{e.school}</span>
          <span className="edu-year">{e.year}</span>
          <span className="edu-credential">
            {e.credential}
            {e.detail ? ` · ${e.detail}` : ''}
          </span>
        </li>
      ))}
    </ul>
  )
}
