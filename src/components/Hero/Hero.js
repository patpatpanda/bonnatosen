// src/components/Hero/Hero.js
"use client";

import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Error playing the video:", error);
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        className={styles.backgroundVideo}
      >
        <source src="/images/igen.mp4" type="video/mp4" />
        Din webbläsare stöder inte videouppspelning.
      </video>

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
          <Link href="/events">
            <button className={styles.ctaButton}>Bonnatösens Event & Catering</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
