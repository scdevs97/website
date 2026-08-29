import ProjectList from './components/ProjectList'

export default function App() {
  return (
    <main className="page">
      <header>
        <h1>sczhao.me</h1>
        <p>Hi, I'm building this site to learn Spring Boot, Maven, and React.</p>
      </header>

      <section>
        <h2>Projects</h2>
        <ProjectList />
      </section>
    </main>
  )
}
