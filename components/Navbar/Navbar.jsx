import styles from './styles.module.css';
import menuIcon from '../../public/assets/menu-icon.svg'
import Image from 'next/image';
import { useState } from 'react';
import Flags from '../Flags/Flags';

const Navbar = ({ lang, setlang }) => {
    const [showMenu, setshowMenu] = useState(false);

    const handleMenu = () => {
        setshowMenu(!showMenu);
    }

    return (
        <div className={styles.header}>

            <nav className={styles.navbar}>
                <Image
                    src={menuIcon}
                    alt="Menu icon"
                    width={40}
                    height={40}
                    className={styles.menuIcon}
                    onClick={handleMenu}
                />
            </nav>

            <div className={styles.menu} style={{ width: showMenu ? '100%' : '0px' }}>
                <ul>
                    <li><a onClick={handleMenu} href="#home">{lang['navBar.home']}</a></li>
                    <li><a onClick={handleMenu} href="#about">{lang['about.title']}</a></li>
                    <li><a onClick={handleMenu} href="#projects">{lang['index.projects']}</a></li>
                    <li><a onClick={handleMenu} href="#experience">{lang['experience.title']}</a></li>
                    <li><a onClick={handleMenu} href="#stack">Stack 📚</a></li>
                    <li><a onClick={handleMenu} href="#contact">{lang['contact.title']}</a></li>
                </ul>

                <Flags
                    lang={lang}
                    setlang={setlang}
                />

            </div>


        </div>
    );
}

export default Navbar;