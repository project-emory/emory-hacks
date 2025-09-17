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
      <h1 className="absolute top-25 left-16 text-white font-display text-shadow-2xs text-8xl mb-3">
        ABOUT
      </h1>
    </Section>
  );
};

export default AboutSection;
