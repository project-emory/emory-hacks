import SmoothScrolling from "./components/smoothScrolling";
import "./globals.css";
import { Raleway, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata = {
  title: "Emory Hacks 2025",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased w-screen bg-bg`}>
        {/* <SmoothScrolling> */}
        {children}

        {/* </SmoothScrolling> */}
      </body>
    </html>
  );
}
