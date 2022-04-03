import CardProject from './CardProject';
import { projects } from '../../public/assets/projects.json'
import { proyectos } from '../../public/assets/projects-es.json'
import styles from './styles.module.css'

const Projects = ({ lang }) => {

    return (
        <>
            {lang.language === 'en'
                ? <section className={styles.section} >
                    {projects.map((project, index) => {
                        return (
                            <CardProject
                                key={index}
                                project={project}
                                lang={lang}
                            />
                        )
                    })}
                </section>
                : <section className={styles.section} >
                    {proyectos.map((project, index) => {
                        return (
                            <CardProject
                                key={index}
                                project={project}
                                lang={lang}
                            />
                        )
                    })}
                </section>
            }

        </>


    );
}

export default Projects;