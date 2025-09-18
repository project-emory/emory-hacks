import Section from "@/components/section";

const graphics = [
  { src: "/graphics/2-about/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/2-about/rock-l.webp", parallaxLevel: 0 },
  { src: "/graphics/2-about/rock-r.webp", parallaxLevel: 0 },
  { src: "/graphics/2-about/fish-tl.webp", parallaxLevel: 5 },
];

const AboutSection = () => {
  return (
    <Section graphics={graphics}>
      <div className="absolute md:top-10 xl:top-25 left-1/2 -translate-x-1/2 w-4/5">
        <h1 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-4 xl:mb-10 border-shine">
          ABOUT
        </h1>
        <p className="text-white text-base md:text-xl leading-tight md:leading-loose xl:w-1/3 text-shadow-xs">
          Emory Hacks, presented by PROJECT Emory, is a hackathon hosted at
          Emory University. We are committed to bringing hundreds of students
          together for an intensive 36-hour hackathon where innovation comes to
          life. Participants build cutting-edge applications, websites, and
          digital tools while learning from industry professionals through
          hands-on workshops and mentorship. Whether you&apos;re a first-time
          coder or a seasoned developer, join us to push your creative and
          technical boundaries in this dynamic weekend of building and
          collaboration.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
