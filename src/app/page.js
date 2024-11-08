// app/page.js

import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import OpeningHours from '../components/OpeningHours/OpeningHours';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <OpeningHours /> {/* Lägg till öppettider här */}
      {/* Resten av innehållet på sidan */}
    </div>
  );
}
