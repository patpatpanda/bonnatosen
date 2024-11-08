// app/about/page.js

import styles from '../../components/AboutUs.module.css';
import TeamMember from '../../components/TeamMember';

export const metadata = {
  title: 'Om Oss - Bonnatösen',
  description: 'Lär känna teamet och historien bakom Bonnatösen.',
};

export default function AboutPage() {
  return (
    <section id="about" className={styles.aboutContainer}>
    <div className={styles.aboutContainer}>
      
      {/* Hero-sektion */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Om Bonnatösen</h1>
        <p className={styles.heroText}>
          Vårt mål är att skapa en plats där god mat och en lantlig atmosfär möts. Upptäck historien och människorna bakom Bonnatösen.
        </p>
      </section>

      {/* Historien */}
      <section className={styles.historySection}>
        <h2 className={styles.sectionTitle}>Vår Historia</h2>
        <p className={styles.historyText}>
          Bonnatösens resa började 2021 som en spontan idé av Oskar och Hanna, som började servera smashed burgers på familjegården. Det blev så populärt att de bestämde sig för att flytta ut på landet för att driva Bonnatösen fullt ut. Idag är Bonnatösen en plats där kärleken för mat, natur och gemenskap förenas.
        </p>
      </section>

      {/* Team-sektion */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Möt Teamet</h2>
        <div className={styles.teamMembers}>
          <TeamMember
            name="Hanna Schramme"
            role="Grundare & Kock"
            bio="Hanna har en bakgrund som kock och restaurangchef med erfarenheter från både Norge och Stockholm. Idag leder hon köket och utvecklar menyn med kreativitet och kärlek för råvaror."
          />
          <TeamMember
            name="Oskar Tigerström"
            role="Grundare & Administratör"
            bio="Med erfarenhet inom media och en passion för mat har Oskar hjälpt Bonnatösen växa. Han ansvarar för bokföring och sociala medier, och är en av de drivande krafterna bakom verksamheten."
          />
        </div>
      </section>
    </div>
    </section>
  );
}
