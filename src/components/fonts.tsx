import { Fredoka, Inconsolata, Poppins } from "next/font/google";

const sans = Poppins({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const mono = Inconsolata({
  variable: "--font-mono",
  weight: "variable",
  subsets: ["latin"],
});

const display = Fredoka({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const fonts = {
  sans,
  mono,
  display,
};
