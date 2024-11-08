// app/menu/page.js

import styles from './MenuPage.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Meny - Bonnatösen',
  description: 'Utforska vår meny med alternativen Burgarmeny och Mackor.',
};

export default function MenuPage() {
  return (
    <div className={styles.menuPageContainer}>
      <h1 className={styles.menuTitle}>Vår Meny</h1>
      <p className={styles.menuDescription}>
        Utforska våra olika alternativ för läckra måltider. Välj bland våra specialiteter!
      </p>
      <div className={styles.menuOptions}>
        <Link href="/menu/burgers" className={styles.menuOption}>
          <div>
            <h2>Burgarmeny</h2>
            <p>Upptäck våra saftiga burgare med färska ingredienser och unika smaker.</p>
          </div>
        </Link>
        <Link href="/menu/sandwiches" className={styles.menuOption}>
          <div>
            <h2>Mackor</h2>
            <p>Njut av våra mättande och smakrika mackor med både svenska och amerikanska inslag.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
