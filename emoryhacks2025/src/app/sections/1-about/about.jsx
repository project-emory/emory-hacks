"use client";

import Content from "./content"; // Import the Frame component
import Graphics from "./graphics";
import HeroText from "./heroText";

const About = () => {
  return (
    <section id="about">
      {/* LANDING */}
      <div className="relative h-[100vw] bg-cover bg-[url('/images/landing-bg.png')]">
        {/* TITLE */}
        <HeroText />
      </div>
      {/* ABOUT US */}
      <div className="relative h-[100vw]">
        <Graphics />
        <Content />
      </div>
    </section>
  );
};

export default About;
