import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Web Design and Marketing Services",
  description:
    "I'm Oliver and I am a marketing and web contractor based in Cheshire specialising in tech startups.",
  openGraph: {
    title: "Cheshire Web Design and Marketing Services",
    description:
      "I'm Oliver and I am a marketing and web contractor based in Cheshire specialising in tech startups.",
    url: "https://ojsweb.co.uk/",
    siteName: "Marketing and Web Design Services",
    images: [
      {
        url: "https://ojsweb.co.uk/ojsweb-og-image.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://ojsweb.co.uk/ojsweb-og-image-lg.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Marketing and Web Design Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cheshire Web Design and Marketing Services",
  description:
    "I'm Oliver and I am a marketing and web contractor based in Cheshire specialising in tech startups.",
  url: "https://ojsweb.co.uk",
  logo: "https://ojsweb.co.uk/_next/image?url=%2Fojsweb-avatar.jpeg&w=128&q=75",
  areaServed: ["Cheshire", "Manchester", "UK", "Worldwide", "Remote", "Online", "USA", "Europe"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Knutsford",
    addressRegion: "Cheshire",
    addressCountry: "UK",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
