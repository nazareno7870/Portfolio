import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Nazareno del Río | Full Stack Javascript Developer</title>
        <meta name="description" content="Nazareno del Río - Full Stack Javascript developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>

        <section id="home">
          <h1>Hi, I'm Nazareno del Río</h1>
          <p>I'm a Full Stack Javascript developer</p>
          <p>This is my portfolio. I invite you to get to know me a little more!</p>
        </section>

        <section id="about">
          <h2>About me</h2>
          <p>
            I am passionate in general. I always liked to do things with dedication and to the best of my ability, learning along the way and improving my skills day by day.
          </p>
          <p>
            A year ago I started this career to become a Full Stack Javascript developer and to this day I think it's one of the best things I've done in my life. I enjoy them very much.
          </p>
          <p>
            I have more than 10 years of experience working and leading teams, always with respect and empathy. Working as a team, work is always easier and I learned that throughout my working life.
          </p>
          <p>
            In addition to programming I am a lover of sports and music. A quota of each of those things in my daily life transforms me into a happy and motivated person.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>

        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>

      </main>
    </div>
  )
}
