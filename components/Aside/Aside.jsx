import HeaderAside from '../HeaderAside.jsx/HeaderAside';
import styles from '../Navbar/styles.module.css';
import instagramIcon from '../../public/assets/instagram-icon.svg'
import githubIcon from '../../public/assets/github-icon.svg'
import linkedinIcon from '../../public/assets/linkedin-icon.svg'
import messengerIcon from '../../public/assets/messenger-icon.svg'
import tweeterIcon from '../../public/assets/tweeter-icon.svg'
import Image from 'next/image';
import Flags from '../Flags/Flags';

const Aside = ({lang,setlang}) => {
    return (
        <aside className={`${styles.menu} ${styles.aside}`}>
            <HeaderAside lang={lang}/>
            <ul>
                <li><a href="#about">{lang['about.title']}</a></li>
                <li><a href="#projects">{lang['index.projects']}</a></li>
                <li><a href="#experience">{lang['experience.title']}</a></li>
                <li><a href="#stack">Stack 📚</a></li>
                <li><a href="#contact">{lang['contact.title']}</a></li>
            </ul>
            <div className={styles.social}>
                <a Target="_blank" href="https://www.instagram.com/naza.dr/">
                    <Image
                        src={instagramIcon}
                        alt="@naza.dr"
                        className={styles.socialIcon}
                        width={32}
                        height={32}
                    />
                </a>
                <a Target="_blank" href="https://github.com/nazareno7870">
                    <Image
                        src={githubIcon}
                        alt="@nazareno7870"
                        className={styles.socialIcon}
                        width={32}
                        height={32}
                    />
                </a>
                <a Target="_blank" href="https://www.linkedin.com/in/nazarenodelrio/">
                    <Image
                        src={linkedinIcon}
                        alt="@nazarenodelrio"
                        className={styles.socialIcon}
                        width={32}
                        height={32}
                    />
                </a>
                <a Target="_blank" href="https://www.facebook.com/Dr.Nazareno">
                    <Image
                        src={messengerIcon}
                        alt="@nazarenodelrio"
                        className={styles.socialIcon}
                        width={32}
                        height={32}
                    />
                </a>
                <a Target="_blank" href="https://twitter.com/nazareno7870">
                    <Image
                        src={tweeterIcon}
                        alt="@nazareno7870"
                        className={styles.socialIcon}
                        width={32}
                        height={32}
                    />
                </a>
            </div>
            <Flags 
            lang={lang}
            setlang={setlang}
            />
        </aside>
    );
}

export default Aside;