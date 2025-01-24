"use client";

import About from "./sections/1-about/about";
import FAQ from "./sections/5-faq/faq";
import Schedule from "./sections/3-schedule/schedule";
import Sponsors from "./sections/6-sponsors/sponsors";
import Tracks from "./sections/2-tracks/tracks";
import Nav from "./components/nav";
import Landing from "./sections/0-landing/landing";
import Speakers from "./sections/4-speakers/speakers";
import Footer from "./sections/7-footer/footer";
import { Raleway } from "next/font/google";
import Timer from "./components/timer";
import { useEffect } from "react";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({});
    })();
  });

  return (
    <>
      <Nav />
      <main>
        <section id="about">
          <Landing />
          <About />
        </section>
        <Tracks />
        <Schedule />
        <Speakers />
        <FAQ />
        <Sponsors />
        <Footer />
      </main>
      <Timer />
    </>
  );
}
