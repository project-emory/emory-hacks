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
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-0 md:mb-4 xl:mb-10 border-shine">
        ABOUT
      </h2>
      <p className="text-white text-sm md:text-xl leading-tight md:leading-loose xl:w-1/3 border-shine">
        Emory Hacks, presented by PROJECT Emory, is a hackathon hosted atEmory
        University. We are committed to bringing hundreds of students together
        for an intensive 36-hour hackathon where innovation comes to life.
        Whether you&apos;re a first-time coder or a seasoned developer come bond
        peers and industry professionals, and join us to push your creative and
        technical boundaries in this dynamic weekend of building and
        collaboration.
      </p>
    </Section>
  );
};

export default AboutSection;
