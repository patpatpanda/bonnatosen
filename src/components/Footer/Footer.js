// components/Footer/Footer.js

import styles from './Footer.module.css';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Importerar ikoner från react-icons

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Kontaktinformation */}
        <div className={styles.contactInfo}>
          <h3>Kontakta Oss</h3>
          <p>Email: <a href="mailto:info@bonnatosen.se" className={styles.navLink}>Bonnatosensburgare@gmail.com</a></p>
          <p className={styles.contactInfo}>📞 Telefon: 0046 76 879 59 35</p>
        </div>
        
       
        {/* Sociala Medier */}
        <div className={styles.socialMedia}>
          <h3>Följ Oss</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/bonnatosensburgare" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com/bonnatosen" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Bonnatösen. Alla rättigheter förbehållna.
      </p>
    </footer>
  );
}
