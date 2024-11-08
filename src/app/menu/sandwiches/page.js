// app/menu/sandwiches/page.js

import styles from '../MenuPage.module.css';

export const metadata = {
  title: 'Mackor - Bonnatösen',
  description: 'Njut av våra mättande och smakrika mackor.',
};

export default function SandwichesPage() {
  return (
    <div className={styles.menuPageContainer}>
      <h1 className={styles.menuTitle}>Mackor</h1>
      <p className={styles.menuDescription}>Välj från vårt utbud av mättande och smakrika mackor med inspiration från både Sverige och USA.</p>
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
    </div>
  );
}
