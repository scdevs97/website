import profile from './data/profile.json'
import education from './data/education.json'
import skills from './data/skills.json'
import Experience from './components/Experience'
import ProjectList from './components/ProjectList'

export default function App() {
  const { email, github, linkedin } = profile.links

  return (
    <main className="page">
      <header className="intro">
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="location">{profile.location}</p>
        <p className="blurb">{profile.blurb}</p>
        <nav className="links" aria-label="Contact">
          <a href={`mailto:${email}`}>Email</a>
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </header>

      <section>
        <h2>Experience</h2>
        <Experience />
      </section>

      <section>
        <h2>Projects</h2>
        <ProjectList />
      </section>

      <section>
        <h2>Skills</h2>
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
      </section>

      <section>
        <h2>Education</h2>
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
      </section>

      <footer className="foot">
        <a href={`mailto:${email}`}>{email}</a>
      </footer>
    </main>
  )
}
