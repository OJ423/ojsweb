import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Web Design and Marketing Services",
  description: "I'm Oliver and I am a freelance web developer and marketing professional and available for hire.",
  openGraph: {
    title: "Web Design and Marketing Services",
    description: "I'm Oliver and I am a freelance web developer and marketing professional and available for hire.",
    url: 'https://ojsweb.co.uk/',
    siteName: 'ojsweb - Marketing and Web Design Excellence',
    images: [
      {
        url: 'https://ojsweb.co.uk/ojsweb-og-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://ojsweb.co.uk/ojsweb-og-image-lg.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'OJSWEB web design and marketing services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  metadataBase: new URL('https://ojsweb.co.uk'),
  alternates: {
    canonical:'/'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
