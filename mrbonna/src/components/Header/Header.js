"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.nav}`) && !event.target.closest(`.${styles.menuButton}`)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>Bonnatösen</span>
        </div>

        <button
          className={`${styles.menuButton} ${menuOpen ? styles.closeButton : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/about" onClick={closeMenu}>Om oss</Link>
          <Link href="/menu" onClick={closeMenu}>Meny</Link>
          <Link href="/events" onClick={closeMenu}>Kommande event</Link>
          <Link href="/hours" onClick={closeMenu}>Öppettider</Link>
          <Link href="/catering" onClick={closeMenu}>Catering</Link>
        </nav>
      </div>
    </header>
  );
}
