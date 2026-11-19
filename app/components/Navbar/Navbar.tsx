
'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Logo from '../../assets/logotype.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.navbar}>
      <nav className={styles.navItems} aria-label="Main navigation">
        <Link href="#top" className={styles.logoLink} onClick={closeMenu}>
          <img src={Logo.src} alt="Joanna Olofsson" className={styles.logo} />
        </Link>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <span className={`${styles.burger} ${isOpen ? styles.burger1Open : ''}`} />
          <span className={`${styles.burger} ${isOpen ? styles.burger2Open : ''}`} />
          <span className={`${styles.burger} ${isOpen ? styles.burger3Open : ''}`} />
        </button>

        <ul
          id="main-navigation"
          className={`${styles.navLinks} ${isOpen ? styles.showMenuNav : ''}`}
        >
          <li>
            <Link href="#aboutsection" className={styles.navLink} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projectssection" className={styles.navLink} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#cardsorting" className={styles.navLink} onClick={closeMenu}>
              Card Sorting
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/joannasofia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joannasofia/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
