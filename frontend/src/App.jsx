import { NavLink, Route, Routes } from 'react-router-dom'
import profile from './data/profile.json'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <NavLink to="/" className="brand" end>
          {profile.name}
        </NavLink>
        <nav className="tabs" aria-label="Sections">
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="foot">
        <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
      </footer>
    </div>
  )
}
