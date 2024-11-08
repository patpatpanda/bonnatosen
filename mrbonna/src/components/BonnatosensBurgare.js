// components/BonnatosensBurgare.js

import styles from './BonnatosensBurgare.module.css';
import Link from 'next/link';

export default function BonnatosensBurgare() {
  return (
    <div className={styles.burgareContainer}>
      
      {/* Hero-sektionen med ikon */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src="/images/burgare.png" alt="Burgarikon" className={styles.heroIcon} />
          <h1 className={styles.heroTitle}>Bonnatösens Burgare</h1>
        </div>
        <p className={styles.heroText}>
          Grundades av en slump år 2021 och är idag en självklar mötesplats för alla som älskar burgare med hjärta och smak!
        </p>
      </section>

      {/* Historien bakom Bonnatösens Burgare */}
      <section className={styles.historySection}>
        <div className={styles.historyText}>
          <p>
            Bonnatösens Burgare grundades av en slump år 2021 då vi (Oskar & Hanna) sålde smashed burgers på Hannas föräldrars gård under Bergslagens loppishelg...
          </p>
          <p>
            Idag har Bonnatösens burgare sin fasta punkt på vår nya gård som ligger precis i slutet av Flåsjön. Vi har hållit öppet några helger om året, men vi märker att efterfrågan är så stor...
          </p>
        </div>
        <img src="/images/gård.webp" alt="Bild av gården" className={styles.historyImage} />
      </section>

      {/* Menysektion */}
      <section className={styles.menuSection}>
        <h2 className={styles.menuTitle}>Våra Burgare</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <h3>Enkel Burgare</h3>
            <p>150g nötkött från närområdet, toppad med cheddarost från Väddö gårdsmejeri.</p>
          </div>
          <div className={styles.menuItem}>
            <h3>Dubbel Burgare</h3>
            <p>300g nötkött, dubbel cheddar, och vårt hemliga såsrecept!</p>
          </div>
          <div className={styles.menuItem}>
            <h3>Vegetarisk Burgare</h3>
            <p>Grillost från Väddö, en unik vegetarisk smakupplevelse.</p>
          </div>
          <div className={styles.menuItem}>
            <h3>Barnburgare</h3>
            <p>En mindre variant av vår klassiska burgare, perfekt för de små.</p>
          </div>
        </div>
      </section>

      {/* Catering och sociala medier */}
      <section className={styles.cateringSection}>
        <h2>Beställ Catering</h2>
        <p>
          Vi erbjuder Bonnatösens Burgare som catering för ditt event! Kontakta oss för mer information.
        </p>
        <Link href="/contact" className={styles.cateringButton}>Beställ Catering</Link>
        <p className={styles.socialMediaText}>Följ oss på sociala medier för senaste nyheterna och öppettider!</p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/bonnatosensburgare" target="_blank" rel="noopener noreferrer">@bonnatosensburgare</a>
          <a href="https://www.instagram.com/Bonnatosensmackor" target="_blank" rel="noopener noreferrer">@Bonnatosensmackor</a>
        </div>
      </section>
    </div>
  );
}
