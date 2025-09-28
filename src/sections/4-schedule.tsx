import Section from "@/components/section";

const graphics = [
  { src: "/graphics/4-schedule/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/4-schedule/fish.webp", parallaxLevel: 10 },
];

const ScheduleSection = () => {
  return (
    <Section graphics={graphics}>
      <h2 className="text-white font-display text-shadow-2xs text-2xl md:text-6xl xl:text-8xl mb-0 md:mb-4 xl:mb-10 border-shine">
        SCHEDULE
      </h2>

      <div className="flex items-center justify-center text-white border-shine text-xl">
        COMING SOON!
      </div>
    </Section>
  );
};

export default ScheduleSection;
