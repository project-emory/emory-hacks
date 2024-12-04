import About from "./sections/1-about/about";
import FAQ from "./sections/5-faq/faq";
import Schedule from "./sections/3-schedule/schedule";
import Sponsors from "./sections/6-sponsors/sponsors";
import Tracks from "./sections/2-tracks/tracks";
import Nav from "./components/nav";
import Landing from "./sections/0-landing/landing";
import Speakers from "./sections/4-speakers/speakers";
import Footer from "./sections/7-footer/footer";

export default function Home() {
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
    </>
  );
}
