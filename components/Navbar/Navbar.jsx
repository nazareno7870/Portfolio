import styles from './styles.module.css';
import menuIcon from '../../public/assets/menu-icon.svg'
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);

    const handleMenu = () => {
        setshowMenu(!showMenu);
    }

    return (
        <header className={styles.header}>

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
                    <li><a onClick={handleMenu} href="#home">Home</a></li>
                    <li><a onClick={handleMenu} href="#about">About</a></li>
                    <li><a onClick={handleMenu} href="#projects">Projects</a></li>
                    <li><a onClick={handleMenu} href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;