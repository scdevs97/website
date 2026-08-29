import { useEffect, useState } from 'react'
import { fetchProjects } from '../api'

export default function ProjectList() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  if (status === 'loading') return <p>Loading projects…</p>
  if (status === 'error') {
    return <p>Couldn't reach the API. Is the Spring Boot backend running on :8080?</p>
  }

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
