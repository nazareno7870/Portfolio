import LinkIcon from '../../public/assets/link-icon.svg';
import Image from 'next/image';
import styles from './styles.module.css';

const ViewButton = ({ url }) => {
    return (

        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.view}>
            <Image
                src={LinkIcon}
                alt="Link"
                width={32}
                height={32}
            />
            Demo
        </a>
    );
}

export default ViewButton;