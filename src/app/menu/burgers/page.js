// app/menu/burgers/page.js

import styles from '../MenuPage.module.css';

export const metadata = {
  title: 'Burgarmeny - Bonnatösen',
  description: 'Upptäck vår meny av saftiga och smakrika burgare.',
};

export default function BurgersPage() {
  return (
    <div className={styles.menuPageContainer}>
      <h1 className={styles.menuTitle}>Burgarmeny</h1>
      <p className={styles.menuDescription}>Upptäck våra saftiga burgare gjorda med kärlek och färska ingredienser.</p>
      <section  className={styles.menuSection}>
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
    </div>
  );
}
