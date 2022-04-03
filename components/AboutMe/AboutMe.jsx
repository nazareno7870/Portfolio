import styles from '../../styles/Home.module.css'

const AboutMe = ({ lang }) => {
  return (
    <section className={styles.section}>
      <div className={styles.title} id="about">
        <h2>{lang['about.title']}</h2>
      </div>

      <div className={styles.content}>
        <p>
          {lang['about.p1']}
        </p>
        <p>
          {lang['about.p2']}
        </p>
        <p>
          {lang['about.p3']}
        </p>
        <p>
          {lang['about.p4']}
        </p>
      </div>

    </section>

  );
}

export default AboutMe;