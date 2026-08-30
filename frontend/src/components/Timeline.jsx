import experience from '../data/experience.json'

export default function Timeline() {
  return (
    <ul className="timeline">
      {experience.map((job) => (
        <li key={`${job.company}-${job.role}`} className="timeline-item">
          <div className="timeline-head">
            <span className="timeline-role">{job.role}</span>
            <span className="timeline-dates">
              {job.start} – {job.end}
            </span>
          </div>
          <div className="timeline-sub">
            {job.company} · {job.location}
          </div>
          <ul className="timeline-highlights">
            {job.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
