// components/Footer/Footer.js

import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Kontaktinformation */}
        <div className={styles.contactInfo}>
          <h3>Kontakta Oss</h3>
          <p>Telefon: <a href="tel:+46123456789" className={styles.navLink}>+46 123 456 789</a></p>
          <p>Email: <a href="mailto:info@bonnatosen.se" className={styles.navLink}>info@bonnatosen.se</a></p>
          <p>Adress: Gårdsvägen 12, 123 45 Lantstad</p>
        </div>
        
        {/* Navigeringslänkar */}
        <div className={styles.navLinks}>
          <h3>Snabblänkar</h3>
          <Link href="/" className={styles.navLink}>Hem</Link>
          <Link href="#about" className={styles.navLink}>Om Oss</Link>
          <Link href="/burgare" className={styles.navLink}>Burgare</Link>
          <Link href="/mackor" className={styles.navLink}>Mackor</Link>
          <Link href="/contact" className={styles.navLink}>Kontakt</Link>
        </div>
        
        {/* Sociala Medier */}
        <div className={styles.socialMedia}>
          <h3>Följ Oss</h3>
          <a href="https://www.instagram.com/bonnatosensburgare" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
          <a href="https://www.facebook.com/bonnatosen" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Bonnatösen. Alla rättigheter förbehållna.
      </p>
    </footer>
  );
}
