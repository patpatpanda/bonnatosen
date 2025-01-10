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
          
          <Link href="/Catering" onClick={closeMenu}>Catering</Link>
          <Link href="/burgare" onClick={closeMenu}>Burgare</Link>
          <Link href="/mackor" onClick={closeMenu}>Mackor</Link>
       
          
         
        </nav>
      </div>
    </header>
  );
}
