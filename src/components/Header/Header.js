"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Växla mellan öppet och stängt
  };

  const closeMenu = () => {
    setMenuOpen(false); // Stäng menyn
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.nav}`) && !event.target.closest(`.${styles.menuButton}`)) {
        setMenuOpen(false); // Stäng menyn om användaren klickar utanför
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

        {/* Menuknapp för mobila enheter */}
        <button
          className={`${styles.menuButton} ${menuOpen ? styles.closeButton : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigeringsmeny */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu}>Hem</Link>
          <Link href="/#about" onClick={closeMenu}>Om oss</Link>
          <Link href="/menu" onClick={closeMenu}>Meny</Link>
          <Link href="/events" onClick={closeMenu}>Kommande event</Link>
          <Link href="/#hour" onClick={closeMenu}>Öppettider/Kontakt</Link>
          <Link href="/catering" onClick={closeMenu}>Catering</Link>
        </nav>
      </div>
    </header>
  );
}
