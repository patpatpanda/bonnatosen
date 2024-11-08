// components/OpeningHours/OpeningHours.js

import styles from './OpeningHours.module.css';

export default function OpeningHours() {
  return (
    <section id="hour" className={styles.openingHoursSection}>
      <h2 className={styles.sectionTitle}>Öppettider</h2>
      <ul className={styles.hoursList}>
        <li>Måndag: Stängt</li>
        <li>Tisdag - Torsdag: 11:00 - 18:00</li>
        <li>Fredag: 11:00 - 22:00</li>
        <li>Lördag: 12:00 - 22:00</li>
        <li>Söndag: 12:00 - 17:00</li>
      </ul>
    </section>
  );
}
