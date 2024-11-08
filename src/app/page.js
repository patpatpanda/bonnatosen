// app/page.js

import Hero from '../components/Hero/Hero';

import About from '../components/About/About';
import OpeningHours from '../components/OpeningHours/OpeningHours';

export default function HomePage() {
  return (
    <div>
     
      <Hero />
      <About />
      <OpeningHours /> {/* Lägg till öppettider här */}
      {/* Resten av innehållet på sidan */}
    </div>
  );
}
