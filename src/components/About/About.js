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
