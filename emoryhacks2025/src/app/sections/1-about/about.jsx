"use client";
import styles from '../../components/index.module.css';

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
      <div className="h-[768px] md:h-[100vw] bg-cover bg-[url('/images/aboutus.png')]">
        {/* "ABOUT" Title */}
        <h2 className="text-[36px] md:text-[5vw] font-bold text-white drop-shadow-lg mb-8">
          ABOUT
        </h2>
        {/* About Content Box */}
        <div className={styles.emoryHacksPresentedByProjParent}>
          <div className={styles.emoryHacksPresented}>
            Emory Hacks, presented by PROJECT Emory, is a hackathon hosted at Emory University.
            We are committed to bringing hundreds of students together for an intensive 36-hour
            hackathon where innovation comes to life. Participants build cutting-edge applications,
            websites, and digital tools while learning from industry professionals through hands-on
            workshops and mentorship. Whether you're a first-time coder or a seasoned developer,
            join us to push your creative and technical boundaries in this dynamic weekend of
            building and collaboration.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
