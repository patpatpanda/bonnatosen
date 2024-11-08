// components/BonnatosensMackor.js

import styles from './BonnatosensMackor.module.css';
import Link from 'next/link';

export default function BonnatosensMackor() {
  return (
    <div className={styles.mackorContainer}>
      
      {/* Hero-sektionen med ikon */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src="/images/mackor.png" alt="Mackikon" className={styles.heroIcon} />
          <h1 className={styles.heroTitle}>Bonnatösens Mackor</h1>
        </div>
        <p className={styles.heroText}>
          Vårt mål är att servera maffiga mackor och smakrika sötsaker med en touch av amerikansk och svensk matkultur!
        </p>
      </section>

      {/* Historien bakom Bonnatösens Mackor */}
      <section className={styles.historySection}>
        <div className={styles.historyText}>
          <p>
            Bonnatösens Mackor grundades av en slump, men snabbt växte vår passion för att servera riktigt goda mackor och fika. Med inspiration från USA och en dos svensk kärlek är våra mackor perfekta för alla tillfällen.
          </p>
          <p>
            Idag finns vi i Bryggeriområdet i Nora, där vi erbjuder allt från frukostmackor till rejäla lunchalternativ. Vårt fokus ligger på att använda lokala råvaror och skapa smaker som får dig att längta efter mer!
          </p>
        </div>
        <img src="/images/bakery.jpg" alt="Bild av mackstället" className={styles.historyImage} />
      </section>

      {/* Utbud-sektion */}
      <section className={styles.menuSection}>
        <h2 className={styles.menuTitle}>Vårt Utbud</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <h3>Frulle och Fika</h3>
            <p>Prova vår bonnagröt toppad med vår hemlagade granola, eller vår äppelkompott med Lindesbergs must.</p>
          </div>
          <div className={styles.menuItem}>
            <h3>Maffiga Mackor</h3>
            <p>Rejäla mackor inspirerade av våra resor i USA. Vi har alltid 4-5 alternativ att välja på.</p>
          </div>
          <div className={styles.menuItem}>
            <h3>Nachotallrik</h3>
            <p>Högrevsfärs från närområdet på en krispig nachotallrik, perfekt för lunch eller middag.</p>
          </div>
          <div className={styles.menuItem}>
            <h3>Veckans Soppa</h3>
            <p>En välsmakande soppa som varierar varje vecka. Fråga gärna om dagens special!</p>
          </div>
        </div>
      </section>

      {/* Catering och sociala medier */}
      <section className={styles.cateringSection}>
        <h2>Beställ Catering</h2>
        <p>
          Vi erbjuder Bonnatösens Mackor som catering för ditt event! Kontakta oss för mer information.
        </p>
        <Link href="/contact" className={styles.cateringButton}>Beställ Catering</Link>
        <p className={styles.socialMediaText}>Följ oss på sociala medier för senaste nyheterna och öppettider!</p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/bonnatosensmackor" target="_blank" rel="noopener noreferrer">@Bonnatosensmackor</a>
        </div>
      </section>
    </div>
  );
}
