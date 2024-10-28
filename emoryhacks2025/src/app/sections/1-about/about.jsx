"use client";
import Frame from '../../components/aboutusFrame'; // Import the Frame component

const About = () => {
  return (
    <section id="about">
      {/* LANDING */}
      <div className="h-[768px] md:h-[100vw] bg-cover bg-[url('/images/landing-bg.png')]">
        {/* TITLE */}
        <div className="mx-[61px] md:mx-[8vw] mt-[92px] md:mt-[12vw] inline-block">
          <h1 className="text-[46px] md:text-[6vw] font-bold bg-gradient-to-r from-white to-brand-tertiary inline-block text-transparent bg-clip-text drop-shadow-lg">
            EMORY HACKS 2025
          </h1>
          <h2 className="text-[23px] md:text-[3vw] font-bold text-brand-tertiary drop-shadow-md">
            MAR 21 - MAR 23
          </h2>
        </div>
      </div>

      {/* ABOUT US PAGE STARTS HERE */}
      <div className="h-[768px] md:h-[100vw] bg-cover bg-[url('/images/aboutus.png')] flex items-center justify-center flex-col p-6">
        <h1 className="text-[36px] md:text-[5vw] font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-md mb-6 ml-[20%]">
          ABOUT
        </h1>
        <Frame />
      </div>
    </section>
  );
};

export default About;
