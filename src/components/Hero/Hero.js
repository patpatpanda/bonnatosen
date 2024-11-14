// src/components/Hero/Hero.js
"use client";

import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heroTitle}>Välkommen till Bonnatösen!</h1>
        <p className={styles.subtitle}>
          Vår grundidé: Bonnatösen ska vara lite bonnigt, ganska amerikanskt med en country vibe och vi ska servera riktigt god mat som vi själva älskar.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/burgare">
            <button className={styles.ctaButton}>Bonnatösens Burgare</button>
          </Link>
          <Link href="/mackor">
            <button className={styles.ctaButton}>Bonnatösens Mackor</button>
          </Link>
          <Link href="/Catering">
            <button className={styles.ctaButton}>Bonnatösens Event & Catering</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
