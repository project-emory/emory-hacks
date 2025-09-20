import Section from "@/components/section";

const graphics = [
  { src: "/graphics/6-sponsors/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/6-sponsors/fg.webp", parallaxLevel: 5 },
  { src: "/graphics/6-sponsors/starfish-bl.webp", parallaxLevel: 5 },
  { src: "/graphics/6-sponsors/starfish-coral.webp", parallaxLevel: 5 },
];

const SponsorSection = () => {
  return (
    <Section graphics={graphics}>
      <div className="absolute md:top-10 xl:top-25 left-1/2 -translate-x-1/2 w-4/5">
        <h1 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-4 xl:mb-10 border-shine">
          Sponsors
        </h1>
      </div>
    </Section>
  );
};

export default SponsorSection;
