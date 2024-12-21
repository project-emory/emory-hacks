import Head from "next/head";
import SmoothScrolling from "./components/smoothScrolling";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata = {
  title: "Emory Hacks 2025",
  description:
    "Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Emory Hacks 2025</title>
        <meta
          name="description"
          content="Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life."
        />
        <meta
          name="keywords"
          content="Emory Hacks, hackathon, Emory University, coding, programming, innovation"
        />
        <meta property="og:title" content="Emory Hacks 2025" />
        <meta
          property="og:description"
          content="Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life."
        />
        <meta property="og:image" content="../../public/logo.webp" />
        <meta property="og:url" content="https://www.emoryhacks.com" />
      </Head>

      <body className={`${spaceGrotesk.className} antialiased w-screen bg-bg`}>
        {/* <SmoothScrolling> */}
        {children}

        {/* </SmoothScrolling> */}
      </body>
    </html>
  );
}
