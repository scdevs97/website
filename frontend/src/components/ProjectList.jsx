import projects from '../data/projects.json'

export default function ProjectList() {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noreferrer">
            View →
          </a>
          <div className="tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}
