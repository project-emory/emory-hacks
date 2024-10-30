"use client";

import Content from "./content"; // Import the Frame component
import Graphics from "./graphics";

const About = () => {
  return (
    <section id="about">
      {/* LANDING */}
      <div className="h-[768px] md:h-[100vw] bg-cover bg-[url('/images/landing-bg.png')]">
        {/* TITLE */}
        <div className="mx-[61px] md:mx-[8vw] mt-[92px] md:mt-[12vw] inline-block">
          <h1 className="text-[75px] md:text-[10vw] font-bold leading-none bg-gradient-to-tl from-white to-brand-tertiary inline-block text-transparent bg-clip-text drop-shadow-lg">
            <span className="block">EMORY</span>
            <span className="block">HACKS</span>
            <span className="block">2025</span>
          </h1>
          <h2 className="mt-5 text-[22px] md:text-[3vw] font-bold text-white drop-shadow-lg">
            MAR 21 - MAR 23
          </h2>
        </div>
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
