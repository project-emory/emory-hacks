import Section from "@/components/section";

const graphics = [
  { src: "/graphics/2-about/bg.png" },
  { src: "/graphics/2-about/fish-bl.png" },
  { src: "/graphics/2-about/fish-tl.png" },
  { src: "/graphics/2-about/rock-l.png" },
  { src: "/graphics/2-about/rock-r.png" },
];

const AboutSection = () => {
  return (
    <Section graphics={graphics}>
      <div className="absolute top-20 left-10 text-white font-display text-shadow-2xs">
        <h1 className="text-8xl mb-3"></h1>
      </div>
    </Section>
  );
};

export default AboutSection;
