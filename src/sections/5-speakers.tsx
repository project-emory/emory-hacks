import Section from "@/components/section";

const graphics = [{ src: "/graphics/5-speakers/bg.webp", parallaxLevel: 0 }];

const SpeakersSection = () => {
  return (
    <Section graphics={graphics}>
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl md:mb-4 xl:mb-10 border-shine">
        SPEAKERS
      </h2>
    </Section>
  );
};

export default SpeakersSection;
