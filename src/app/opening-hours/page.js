// app/opening-hours/page.js

import styles from '../../components/OpeningHours.module.css';

export const metadata = {
  title: 'Öppettider - Bonnatösen',
  description: 'Håll koll på våra öppettider via sociala medier.',
};

export default function OpeningHoursPage() {
  return (
    <section id="opening-hours" className={styles.openingHoursContainer}>
      <div className={styles.openingHoursContent}>
        <h1 className={styles.title}>Öppettider</h1>
        <p className={styles.text}>
          Våra öppettider kan variera beroende på säsong, event och andra faktorer. För att hålla dig uppdaterad rekommenderar vi att du följer oss på våra sociala medier. Där delar vi våra aktuella öppettider och all annan viktig information.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/bonnatosensmackor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @bonnatosensmackor
          </a>
          <a
            href="https://www.facebook.com/bonnatosensmackor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook: @bonnatosensmackor
          </a>
        </div>
      </div>
    </section>
  );
}
