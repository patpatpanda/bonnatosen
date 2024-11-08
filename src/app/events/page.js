// app/events/page.js

import styles from './EventsPage.module.css';

export const metadata = {
  title: 'Kommande Event - Bonnatösen',
  description: 'Håll dig uppdaterad om våra kommande event och speciella tillfällen!',
};

export default function EventsPage() {
  const events = [
    {
      title: "Sommarfest på gården",
      date: "2024-06-15",
      location: "Bonnatösens Gård, Flåsjön",
      description: "Fira sommaren med oss på gården! Det blir live-musik, grillade burgare och massor av aktiviteter för hela familjen.",
    },
    {
      title: "Höstmarknad",
      date: "2024-09-20",
      location: "Bryggeriområdet, Nora",
      description: "Kom och njut av god mat och fina höstprodukter! Vi finns på plats med vår foodtruck och serverar våra populära mackor.",
    },
    {
      title: "Julmarknad",
      date: "2024-12-10",
      location: "Bonnatösens Gård, Flåsjön",
      description: "Julmarknad med hantverk, glögg och våra specialmackor i julens smaker. En dag att fira julstämning med hela familjen!",
    },
  ];

  return (
    <div className={styles.eventsPageContainer}>
      <h6 className={styles.pageTitle}>Kommande Event</h6>
      <p className={styles.pageDescription}>Håll dig uppdaterad om våra speciella tillfällen och evenemang.</p>
      <div className={styles.eventsList}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <h2 className={styles.eventTitle}>{event.title}</h2>
            <p className={styles.eventDate}>📅 Datum: {new Date(event.date).toLocaleDateString()}</p>
            <p className={styles.eventLocation}>📍 Plats: {event.location}</p>
            <p className={styles.eventDescription}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
