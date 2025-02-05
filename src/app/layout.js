import "./globals.css";

import { Space_Grotesk } from "next/font/google";
import Head from "next/head";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata = {
  title: "Emory Hacks 2025",
  description:
    "Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life.",
  keywords: [
    "emory hacks",
    "hackathon",
    "emory university",
    "coding",
    "programming",
    "innovation",
    "emory hackathon",
    "atlanta",
    "emory university",
    "emory",
    "software",
    "contest",
    "competition",
    "atlanta hackathon",
    "atl hackathon",
    "atlanta coding",
    "computer science",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Emory Hacks 2025",
    description:
      "Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life.",
    url: "https://www.emoryhacks.com",
    site_name: "Emory Hacks 2025",
    images: [
      {
        url: "https://www.emoryhacks.com/thumbnail.png",
        width: 800,
        height: 800,
        alt: "Emory Hacks",
      },
    ],
    locale: "en_us",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emory Hacks 2025" />
        <meta
          name="twitter:description"
          content="Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life."
        />
        <meta
          name="twitter:image"
          content="https://www.emoryhacks.com/thumbnail.png"
        />
      </Head>

      <body className={`${spaceGrotesk.className} antialiased w-screen bg-bg`}>
        {children}
      </body>
    </html>
  );
}
