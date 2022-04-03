import styles from '../../styles/Home.module.css'
import { experience } from '../../public/assets/experience.json'
import { experiencias } from '../../public/assets/experience-es.json'

const Experience = ({ lang }) => {
    return (
        <>
            {lang.language === 'en'
                ? <section className={styles.experiences}>
                    <div className={styles.title} id="experience">
                        <h2>{lang['experience.title']}</h2>
                    </div>
                    {
                        experience.map(({ empresa, puesto, desde, modalidad, logo }) => (
                            <div className={styles.experience}>
                                <div className={styles.logo}>
                                    <img src={logo} alt={empresa} />
                                </div>
                                <div className={styles.info}>
                                    <h3>{empresa}</h3>
                                    <h4>{puesto}</h4>
                                    <p>{desde}</p>
                                    <p>{modalidad}</p> 
                                </div>
                            </div>
                        ))
                    }
                </section>
                : <section className={styles.experiences}>
                    <div className={styles.title} id="experience">
                        <h2>{lang['experience.title']}</h2>
                    </div>
                    {
                        experiencias.map(({ empresa, puesto, desde, modalidad, logo }) => (
                            <div className={styles.experience}>
                                <div className={styles.logo}>
                                    <img src={logo} alt={empresa} />
                                </div>
                                <div className={styles.info}>
                                    <h3>{empresa}</h3>
                                    <h4>{puesto}</h4>
                                    <p>{desde}</p>
                                    <p>{modalidad}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>}
        </>

    );
}

export default Experience;