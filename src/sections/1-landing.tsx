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
  { src: "/graphics/1-landing/bg.webp", parallaxLevel: 0 },
  { src: "/graphics/1-landing/coral-l.webp", parallaxLevel: 0 },
  { src: "/graphics/1-landing/coral-r.webp", parallaxLevel: 0 },
  { src: "/graphics/1-landing/fish-l.webp", parallaxLevel: 10 },
  { src: "/graphics/1-landing/turtle.webp", parallaxLevel: 20 },
];

const LandingSection = () => {
  return (
    <Section graphics={graphics}>
      <div className="absolute top-25 left-16 text-white font-display text-shadow-2xs">
        <h1 className="text-8xl mb-5">EMORY HACKS</h1>
        <p className="text-5xl">11/14 - 11/16</p>
      </div>
    </Section>
  );
};

export default LandingSection;
