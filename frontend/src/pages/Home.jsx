import profile from '../data/profile.json'

export default function Home() {
  const { email, github, linkedin } = profile.links

  return (
    <section className="home">
      <h1 className="tagline">{profile.tagline}</h1>
      <p className="location">{profile.location}</p>
      <p className="blurb">{profile.blurb}</p>
      <nav className="links" aria-label="Contact">
        <a href={`mailto:${email}`}>Email</a>
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </section>
  )
}
