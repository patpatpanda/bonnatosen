import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Välkommen till Bonnatösen!</h1>
      <p className={styles.heroText}>
        Vår grundidé: Bonnatösen ska vara lite bonnigt, ganska amerikanskt med en country vibe och vi ska servera riktigt god mat som vi själva älskar.
      </p>
      <div className={styles.buttonContainer}>
        <Link href="/burgare" className={styles.heroButton}>Bonnatösens Burgare</Link>
        <Link href="/mackor" className={styles.heroButton}>Bonnatösens Mackor</Link>
        <Link href="/event" className={styles.heroButton}>Bonnatösens Event & Catering</Link>
      </div>
    </div>
  );
}
