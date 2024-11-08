"use client";

import styles from './Hero.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Fördröjning på 300ms för mjukare laddning
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.heroContainer} ${isVisible ? styles.fadeIn : ''}`}>
      <div className={styles.titleContainer}>
      
        <h1 className={styles.heroTitle}>Välkommen till Bonnatösen!</h1>
       
      </div>
      <div className={styles.contentBox}>
        <p className={styles.heroText}>
          Vår grundidé: Bonnatösen ska vara lite bonnigt, ganska amerikanskt med en country vibe och vi ska servera riktigt god mat som vi själva älskar.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/burgare" className={styles.heroButton}>
        
            <span>Bonnatösens Burgare</span>
          </Link>
          <Link href="/mackor" className={styles.heroButton}>
          
            <span>Bonnatösens Mackor</span>
          </Link>
          <Link href="/events" className={styles.heroButton}>
          
            <span>Bonnatösens Event & Catering</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
