// app/catering/page.js

import styles from './CateringPage.module.css';

export const metadata = {
  title: 'Catering - Bonnatösen',
  description: 'Utforska våra cateringalternativ och boka oss för ditt nästa event.',
};

export default function CateringPage() {
  return (
    <div className={styles.cateringPageContainer}>
      <h1 className={styles.pageTitle}>Catering</h1>
      <p className={styles.pageDescription}>
        Letar du efter catering till ditt nästa event? Bonnatösen erbjuder en mängd olika menyer för alla tillfällen - från företagsevenemang till privata fester. Vi använder endast färska, lokala ingredienser för att skapa unika och läckra måltider som dina gäster kommer att minnas.
      </p>
      
      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Våra Menyer</h2>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <h3>Burgarbuffé</h3>
            <p>En buffé med våra signaturburgare, färska tillbehör och olika dressingar.</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Mackor & Sallader</h3>
            <p>En variation av mättande mackor och fräscha sallader, perfekt för både lunch och middag.</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Efterrättsbuffé</h3>
            <p>Vårt urval av desserter, inklusive brownies, cupcakes och andra sötsaker som avslutar måltiden perfekt.</p>
          </li>
        </ul>
      </section>

      <section className={styles.bookingSection}>
        <h2 className={styles.sectionTitle}>Boka Oss</h2>
        <p className={styles.bookingInfo}>
          För att boka catering eller få en offert, vänligen kontakta oss via e-post eller telefon. Vi arbetar tillsammans med dig för att skapa en meny som passar just ditt event.
        </p>
        <p className={styles.contactInfo}>📧 Email: catering@bonnatosen.se</p>
        <p className={styles.contactInfo}>📞 Telefon: 070-123 4567</p>
      </section>
    </div>
  );
}
