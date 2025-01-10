// components/BonnatosensMackor.js

import styles from './BonnatosensMackor.module.css';
import Link from 'next/link';

export default function BonnatosensMackor() {
  return (
    <div  className={styles.mackorContainer}>
      
      {/* Hero-sektionen med ikon */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src="/images/mackor.png" alt="Mackikon" className={styles.heroIcon} />
          <h1 className={styles.heroTitle}>Bonnatösens Mackor</h1>
        </div>
        <p className={styles.heroText}>
          Precis som vi älskar hamburgare, älskar vi även riktigt goda mackor. Vi ville ta chansen att visa hur man gör mackor i äkta bonnatös-stil, och samtidigt göra det lite enklare att nå oss – därför öppnade vi i Bryggeriområdet i Nora.
        </p>
      </section>

      <section className={styles.youtubeSection}>
        <h2>Följ oss på YouTube</h2>
        <p>
          På vår YouTube-kanal får du följa med oss – Oskar och Hanna – i vår resa från storstadens stress till livet på landsbygden. Här delar vi allt: hur Bonnatösens Burgare blev verklighet, livet på gården i Bergslagen, och vad som händer bakom kulisserna. Det är en mix av matglädje, familjeliv och drömmar som blir verklighet – häng med!
        </p>
      </section>

      <section className={styles.menuSection}>
        <h2 className={styles.menuTitle}>Vårt Utbud</h2>
        <p>
          Vi gör små ändringar i menyn ganska ofta, därför hänvisar vi till att kika på våra sociala medier för att få ett hum om vad vi serverar just nu. Vill du veta mer detaljerat vad vi har rekommenderar vi att ni kontaktar oss.
        </p>
        <p>
          Vi har alltid tre till fem maffiga mackor på menyn. Utöver det brukar vi ha Ceasarsallad á la Bonnatösen, Nachotallrik med färs från närområdet, Bonnagröt med äppelkompott, mandelsmör och hemlagad granola. Sist men inte minst har vi såklart lite sötsaker om ni bara vill fika.
        </p>
      </section>

      {/* Catering och sociala medier */}
      <section className={styles.cateringSection}>
       
       
        <section className={styles.bookingSection}>
        <h2 className={styles.sectionTitle}>Kontakta oss</h2>
         
          <p className={styles.contactInfo}>📧 Email: Bonnatosensburgare@gmail.com</p>
<p className={styles.contactInfo}>📞 Telefon: 0046 76 879 59 35</p>
<p className={styles.contactInfo}>🏠 Adress: Prästgatan 27 </p>
<p className={styles.contactInfo}>71331 Nora</p>



        </section>

        <p className={styles.socialMediaText}>Följ oss på sociala medier för senaste nyheterna och öppettider!</p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/bonnatosensmackor" target="_blank" rel="noopener noreferrer">@Bonnatosensmackor</a>
        </div>
      </section>
    </div>
  );
}
