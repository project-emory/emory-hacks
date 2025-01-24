import Head from "next/head";
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
          content="Emory Hacks, hackathon, Emory University, coding, programming, innovation, Emory Hackathon, Atlanta Hackathon, Emory University"
        />
        <meta property="og:title" content="Emory Hacks 2025" />
        <meta
          property="og:description"
          content="Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life."
        />
        <meta property="og:image" content="../../public/logo.webp" />
        <meta property="og:url" content="https://www.emoryhacks.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Emory Hacks" />
        <meta property="og:site_name" content="Emory Hacks" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emory Hacks 2025" />
        <meta
          name="twitter:description"
          content="Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life."
        />
        <meta name="twitter:image" content="../../public/logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Emory Hacks 2025",
            "startDate": "2025-03-21T00:00:00Z",
            "endDate": "2025-03-23T23:59:59Z",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Emory University",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "201 Dowman Dr",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "postalCode": "30322",
                "addressCountry": "US",
              },
            },
            "image": ["../../public/logo.webp"],
            "description":
              "Join us for Emory Hacks 2025, a 36-hour hackathon at Emory University where innovation comes to life.",
            "organizer": {
              "@type": "Organization",
              "name": "Emory Hacks",
              "url": "https://www.emoryhacks.com",
            },
          })}
        </script>
      </Head>

      <body className={`${spaceGrotesk.className} antialiased w-screen bg-bg`}>
        {children}
      </body>
    </html>
  );
}
