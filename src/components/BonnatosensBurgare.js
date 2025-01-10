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
        Långt ut på landet, där vägarna tar slut och utsikten börjar, hittar du oss – och några av Sveriges mest älskade burgare.
        </p>
      </section>

      {/* Historien bakom Bonnatösens Burgare med video */}
      <section className={styles.historySection}>
        <div className={styles.historyContent}>
          <div className={styles.historyText}>
            <p>
            Det hela började lite på skoj – en idé vi knappt hann tänka klart innan grillen gick varm på Hannas föräldrars gård under Bergslagens loppishelg 2021. Folk strömmade till, burgarna tog slut, och vi insåg snabbt att vi kanske var något på spåren.
            </p>
            <p>
            Idag har Bonnatösens Burgare hittat hem på vår egna gård, vid slutet av Fåsjön. Här har vi öppnat upp några helger om året och fått se vår lilla dröm växa till något mycket större. Och ärligt talat, efterfrågan är så stor att vi knappt hinner med – men det är ett lyxproblem vi älskar!
            </p>
          </div>
          <div className={styles.historyImageWrapper}>
            <img
              src="/images/mrburgare.jpg" /* Ersätt med din bild */
              alt="Bonnatösens Burgare historia"
              className={styles.historyImage}
            />
          </div>
        </div>
      </section>

      {/* Menysektion */}
      <section className={styles.menuSection}>
        <h2 className={styles.menuTitle}>Våra Hamburgare</h2>
        <p>
          Vi serverar alltid endast en slags hamburgare när vi håller öppet. Den består av vår hemliga hamburgerblandning från närområdet (100% nötkött), cheddarost från Väddö gårdsmejeri, briochebröd och andra goda toppings som vi oftast informerar om innan på våra social medier.
        </p>
        <ul>
          <li>Enkelburgare 129kr (145g kött)</li>
          <li>Dubbelburgare 169kr (290g kött)</li>
        </ul>
        <p>
          Då trycket hos oss oftast är ganska högt uppskattar vi om man äter sin burgare som vi komponerat den. Dels för att det är godast, men också för att underlätta för kockarna.
        </p>
        <p>
          Vi har alltid ett vegetariskt alternativ som är en ekologisk grillost från Väddö. Den serveras med samma tillbehör som den andra burgaren. (129kr)
        </p>
        <p>
          Barnburgare finns alltid på menyn (80kr).
        </p>
        <p>
          I mån av tid och plats i kylar och frysar serverar vi pommes med dip.
        </p>
      </section>

      {/* Catering och sociala medier */}
      <section className={styles.cateringSection}>
      
       
        <p>
          Vi kan åka ut med vagnen till större evenemang och tillställningar. Vi brukar säga minimum 100 pers men allt går att diskutera. Det är svårt att sätta ett exakt pris på vad det kostar att boka vår vagn men vi ska försöka ge ett exempel. Priset kommer att vara baserad på plats, dag, tid, antal, val av meny, säsong osv. Det lättaste är att skicka en förfrågan till oss så tar vi det därifrån.
        </p>
        <p>
          <strong>Exempel:</strong>
        </p>
        <ul>
          <li>Bokning av vag inom Örebroområdet 2000-3500kr för utkörning</li>
          <li>Hamburgare (enkel) ink pommes och dryck: 195kr p.p (OBS att priserna kan variera, detta är endast ett exempel)</li>
        </ul>
        <p>
          Vill man boka oss till större evenemang och personalfester kan priserna se annorlunda ut. Sommarsäsong har vi svårare att åka ut med vagnen då vi oftast håller öppet på gården i Järnboås.
        </p>
      
        <section className={styles.bookingSection}>
          <h2 className={styles.sectionTitle}>Kontakta oss</h2>
         
          <p className={styles.contactInfo}>📧 Email: Bonnatosensburgare@gmail.com</p>
<p className={styles.contactInfo}>📞 Telefon: 0046 76 879 59 35</p>
<p className={styles.contactInfo}>🏠 Adress: Tolvsbörd 130</p>
<p className={styles.contactInfo}>71393 Nora</p>

        </section>

        <p className={styles.socialMediaText}>Följ oss på sociala medier för senaste nyheterna och öppettider!</p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/bonnatosensburgare" target="_blank" rel="noopener noreferrer">@bonnatosensburgare</a>
          <a href="https://www.instagram.com/Bonnatosensmackor" target="_blank" rel="noopener noreferrer">@Bonnatosensmackor</a>
        </div>
      </section>
    </div>
  );
}
