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
      <div className="absolute top-20 left-10 text-white font-display text-shadow-2xs">
        <h1 className="text-8xl mb-3">About</h1>
      </div>
    </Section>
  );
};

export default AboutSection;
