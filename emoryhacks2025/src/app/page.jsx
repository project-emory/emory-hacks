"use client";

import About from "./sections/about/about";
import FAQ from "./sections/faq/faq";
import Schedule from "./sections/schedule/schedule";
import Sponsors from "./sections/sponsors/sponsors";
import Tracks from "./sections/tracks/tracks";
import HomePage from "./sections/homepage/homepage";

export default function Home() {
  return (
    <main>
      <About />
      <Tracks />
      <Schedule />
      <FAQ />
      <Sponsors />
      <HomePage />
    </main>
  );
}
