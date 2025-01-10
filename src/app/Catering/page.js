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
        Letar du efter catering till ditt nästa event? Bonnatösen erbjuder en mängd olika menyer för alla tillfällen - från företagsevenemang till privata fester. Vi har lång erfarenhet i branschen och har jobbat med mycket olika slags mat genom åren. Om ni är sugna på något helt annat än det som står här så  kanske vi kan lösa det. Vi är inte omöjliga, men vi lagar endast sådant som vi känner oss trygga med och som vi själva gillar och kan stå för.
      </p>
      
      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Bonnatösen rekommenderar:</h2>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <h3>Chicken over rice 139kr p.p. </h3>
            <p>(Minimum 15 pers)</p>
            <p>En new york klassiker full av smak som går hem hos de flesta. 

Den består av marinerad, stekt kyckling, ris, yoghurtdressing, röd sås, kålsallad, bröd och färska örter. Nästan lika god att värma på som att äta direkt.</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Caesarsallad á la Bonnatösen 129kr p.p</h3>
            <p>Romansallad, Stekt, marinerad kyckling, krispigt bacon, caesardressing, vårlök, rostade pinjenötter, färska örter, krutonger, cherrytomat och hemlagade krutonger.</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Soppor av olika slag ink. bröd 99-139kr</h3>
            <p>(Minimum 15 pers)</p>
            <p>Vi kan laga allt från vår populära svampsoppa, tomatsoppa, gulaschsoppa eller fisk och skaldjurssoppa m.m. Vi kommer tillsammans fram till ett bra alternativ enligt era önskemål.</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Bonnaplock kall 149kr p.p </h3>
            <p>Bröd med örtkräm (färskost)</p>
            <p>Tomatsallad att toppa brödet med</p>
            <p>2 sorters ostar med fikonmarmelad</p>
            <p>2 sorters chark</p>
            <p>Saltgurka med honung och vispad smetana</p>
            <p>Marinerade oliver</p>
            <p>Cheddarchips</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Bonnaplock kall och varm 289kr p.p. (min 20 pers)</h3>
            <p>Kall Bonnaplock (se ovan)</p>
            <p>Senapsslungad potatissallad</p>
            <p>Creamy corn</p>
            <p>Caesarsallad (endast dressad sallad, ej protein)</p>
            <p>2 sorters korv av bra kvalitet med BBQ ketchup och sötstark senap</p>
            <p>Ekologisk grillost från Väddö gårdsmejeri</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Tex-Mex-Plock (Fredagstaco 2.0)</h3>
            <p>Nachofärs (alt. kyckling), smörfräst majs, guacamole, pico de gallo, smashed beans, spicy mango med koriander, gräddfil, salsa, riven ost, hackad gul lök, nachochips, gurka, picklad jalapeño, picklad rödlök, fetaost och sallad</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Våra mackor:</h3>
            <p><strong>Rostat Levainbröd med kycklingröra 139kr p.p (min 10pers)</strong></p>
            <p>Krämig kycklingröra, romansallad, silverlök, färska örter och picklad gurka</p>
            <p><strong>Baguette med skagenröra 189kr p.p (min 15 pers)</strong></p>
            <p>Hemlagad skagenröra, picklad silverlök, dill och romansallad (+löjrom 40kr p.p)</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Frukostmackor:</h3>
            <p>Ostfralla 49kr</p>
            <p>Ost & skinkfralla 55kr</p>
            <p>Brie & salamifralla med fikonmarmelad 59kr</p>
            <p><em>Lite större frukostmackor?</em> Vi kan göra alla frukostmackor som större baguetter också, då tillkommer en summa på 20kr per macka</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Övrig frukost:</h3>
            <p>Det går bra att boka vår lokal för större sällskap och komma från klockan 8 på morgonen. Vi kan ordna en god frukostbuffé eller ett gott och mättande frukostpaket till er.</p>
            <p><strong>Frukostpaket 159kr p.p</strong></p>
            <ul>
              <li>Ett glas must från Lindesbergs musteri</li>
              <li>Kaffe/te inkl. påtår</li>
              <li>Frukostmacka (ost & skinka)</li>
              <li>Äggröra med örter och riven ost</li>
              <li>Liten krämig yoghurt med äppelkompott, honung och hemlagad granola</li>
            </ul>
            <p><strong>Frukostbuffé för större sällskap: 189kr p.p (barn under 12 år 98kr)</strong></p>
            <p>Vi ställer fram kaffe/te, äppelmust, bröd, pålägg, yoghurt med granola och äppelkompott, banan, äggröra & bacon och någon sötsak. Ät tills ni blir riktigt mätta.</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Kakor och sötsaker:</h3>
            <p>Hör av er för att höra vad vi har för utbud just nu. Vi kan även baka vissa saker på beställning.</p>
          </li>
          <li className={styles.menuItem}>
            <h3>Hamburgare:</h3>
            <p>Boka vagnen för större event? Se prisexempel på sidan för hamburgare.</p>
          </li>
        </ul>
      </section>

      <section className={styles.bookingSection}>
        <h2 className={styles.sectionTitle}>Boka Oss</h2>
        <p className={styles.bookingInfo}>
          För att boka catering eller få en offert, vänligen kontakta oss via e-post eller telefon. Vi arbetar tillsammans med dig för att skapa en meny som passar just ditt event.
        </p>
        <p className={styles.contactInfo}>📧 Email: Bonnatosensburgare@gmail.com</p>
        <p className={styles.contactInfo}>📞 Telefon: 0046 76 879 59 35</p>
      </section>
    </div>
  );
}
