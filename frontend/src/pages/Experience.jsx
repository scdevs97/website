import Timeline from '../components/Timeline'
import Skills from '../components/Skills'
import Education from '../components/Education'

export default function Experience() {
  return (
    <>
      <section>
        <h2>Experience</h2>
        <Timeline />
      </section>

      <section>
        <h2>Skills</h2>
        <Skills />
      </section>

      <section>
        <h2>Education</h2>
        <Education />
      </section>
    </>
  )
}
