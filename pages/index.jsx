import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import Projects from '../components/Projects/Projects'
import Header from '../components/Header/Header'
import AboutMe from '../components/AboutMe/AboutMe'
import Contact from './../components/Contact/Contact';
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import Stack from '../components/Stack/Stack'
import Aside from '../components/Aside/Aside'
import EN from '../lang/en-EN.json'
import ES from '../lang/es-ES.json'
import Logo from '../public/assets/Logo.svg'
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [lang, setlang] = useState(EN);

  return (
    <>

      <div className={styles.home} id="home">

        <Head>
          <title>Nazareno del Río | Full Stack Javascript Developer</title>
          <meta name="description" content="Nazareno del Río - Full Stack Javascript developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header lang={lang} />
        
        <div className={styles.logoContainer}>
          <Image
            src={Logo}
            alt="Logo Nazareno del Río"
            className={styles.logo}
            width={300}
          />
        </div>

        <main className={styles.container}>

          <AboutMe lang={lang} />

          <div className={styles.projects} id="projects">
            <h2>{lang['index.projects']}</h2>
          </div>

          <Projects lang={lang} />
          <Experience lang={lang} />
          <Stack lang={lang} />
          <Contact lang={lang} />
        </main>

        <Footer />

        <Navbar lang={lang} setlang={setlang} />
      </div>

      <Aside lang={lang} setlang={setlang} />


    </>

  )
}
