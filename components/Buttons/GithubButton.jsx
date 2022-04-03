import GithubIcon from '../../public/assets/github-icon.svg';
import Image from 'next/image';
import styles from './styles.module.css';

const GithubButton = ({ url }) => {
    return (

        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.github}>
            <Image
                src={GithubIcon}
                alt="Github"
                width={32}
                height={32}
            />
            Repository
        </a>
    );
}

export default GithubButton;