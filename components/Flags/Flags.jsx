import styles from '../../styles/Home.module.css';
import Spain from '../../public/assets/español.svg';
import English from '../../public/assets/ingles.svg';
import Image from 'next/image'
import EN from '../../lang/en-EN.json'
import ES from '../../lang/es-ES.json'

const Flags = ({ lang, setlang }) => {
    
    return (
        <div className={styles.lang}>
            <Image
                src={Spain}
                alt="ES"
                className={styles.socialIcon}
                width={32}
                height={32}
                onClick={() => setlang(ES)}
            />
            <Image
                src={English}
                alt="EN"
                className={styles.socialIcon}
                width={32}
                height={32}
                onClick={() => setlang(EN)}
            />

        </div>
    );
}

export default Flags;