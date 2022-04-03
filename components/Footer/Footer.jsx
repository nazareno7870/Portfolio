import styles from '../../styles/Home.module.css';
import profileImg from '../../public/assets/profile.jpg'
import instagramIcon from '../../public/assets/instagram-icon.svg'
import githubIcon from '../../public/assets/github-icon.svg'
import linkedinIcon from '../../public/assets/linkedin-icon.svg'
import messengerIcon from '../../public/assets/messenger-icon.svg'
import tweeterIcon from '../../public/assets/tweeter-icon.svg'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
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
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} - Nazareno del Río 🧔</p>
            </div>

        </footer>
    );
}

export default Footer;