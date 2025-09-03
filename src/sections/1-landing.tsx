import Section from "@/components/section";

// Graphics to be used in the section.
// Add the path to the image in the src field
// and pass it to the Section component
// The Section component will handle the rest
// of the logic for displaying the graphics.
// The order of the graphics in the array matters.
// The first graphic will be the farthest from the viewer
// and the last graphic will be the closest to the viewer.
// So naturally, the background should be the first graphic.
const graphics = [
  { src: "/graphics/1-landing/bg.png" },
  { src: "/graphics/1-landing/turtle.png" },
  { src: "/graphics/1-landing/coral-l.png" },
  { src: "/graphics/1-landing/coral-r.png" },
  { src: "/graphics/1-landing/fish-l.png" },
];

const LandingSection = () => {
  return (
    <Section graphics={graphics}>
      <div className="absolute top-20 left-10 text-white font-display text-shadow-2xs">
        <h1 className="text-8xl mb-3">Emory Hacks</h1>
        <p className="text-5xl">11/14 - 11/16</p>
      </div>
    </Section>
  );
};

export default LandingSection;
