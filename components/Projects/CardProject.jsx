import Slider from './../Slider/Slider';
import styles from './styles.module.css'
import GithubButton from '../Buttons/GithubButton';
import ViewButton from '../Buttons/ViewButton';
import downArrow from '../../public/assets/down-arrow.svg'
import { useState } from 'react';
import Image from 'next/image'

const CardProject = ({ project,lang }) => {
    const [showMore, setshowMore] = useState(false);

    const handleShowMore = () => {
        setshowMore(!showMore);
    }

    return (
        <section className={styles.card_project}>
            <div className={styles.title}>
                <h2>{project.name}</h2>
            </div>
            <div className={styles.sliderContainer}>
                <Slider
                    imgs={project.pics}
                />
            </div>
            <div className={`${styles.show} ${styles.showCard}`} onClick={handleShowMore}>

                        <h5>{lang['projects.showMore']}</h5>
                        <Image
                            src={downArrow}
                            alt="@naza.dr"
                            className={styles.socialIcon}
                            width={26}
                            height={26}
                        />

            </div>
            <div className={styles.content} style={{height: showMore ? '100%' : '0%'}}>
                <div className={styles.description}>
                    <h5>{lang['projects.description']}</h5>
                    <h6>{project.description}</h6>
                </div>
                <div className={styles.stack}>
                    <h5>Stack</h5>
                    <h6>{project?.stack?.map((s, index) => {
                        if (project.stack.length === index + 1) {
                            return s
                        }
                        return s + " | "
                    })}</h6>
                </div>
                <div className={styles.deploy}>
                    <h5>Deploy</h5>
                    <h6>{project.deploy}</h6>
                </div>
                <div className={styles.buttons}>
                    <GithubButton
                        url={project.repo}
                    />
                    <ViewButton
                        url={project.view}
                    />
                </div>
                <div className={`${styles.show} ${showMore ? styles.active : ''}`} onClick={handleShowMore}>
                    {!showMore
                        ?
                        <>
                            <h5>{lang['projects.showMore']}</h5>
                            <Image
                                src={downArrow}
                                alt="@naza.dr"
                                className={styles.socialIcon}
                                width={26}
                                height={26}
                            />
                        </>
                        :
                        <>
                            <h5>{lang['projects.showless']}</h5>
                            <Image
                                src={downArrow}
                                alt="@naza.dr"
                                className={styles.socialIcon}
                                width={26}
                                height={26}
                            />
                        </>
                    }


                </div>
            </div>

        </section>
    );
}

export default CardProject;