import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/Testimonials";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import Portfolio from "@/components/Portfolio";
import { wordpressImgs } from "@/components/constants";
import CallToAction from "@/components/CallToAction";
import LinkStyled from "@/components/LinkStyled";
import Costs from "@/components/Costs";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";
import { h1, h2, herContainerAlt, heroP, linkBlue, mainContainer, textGradient, twoColGridLightBkg } from "@/components/customStyles";
import Link from "next/link";

export const metadata = {
  title: "Freelance WordPress Design Services",
  description:
    "Need a WordPress website? I am an experience WordPress developer who can help create or update your website",
  openGraph: {
    title: "Full-stack contractor or hire.",
    description:
      "Need a WordPress website? I am an experience WordPress developer who can help create or update your website",
    url: "https://ojsweb.co.uk/wordpress-websites",
    siteName: "ojsweb - Marketing and Web Design Excellence",
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
        alt: "Freelance WordPress Design Services.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/wordpress-websites",
  },
};

export default function WordPressWebsites() {
  const costDescription =
    "WordPress does a lot of the heavy lifting so developing and deploying a WordPress website can be cost effective. Ideal for small online shops or news/blog sites. A basic website will cost as little as £250.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freelance WordPress Web Designer",
    description:
      "WordPress web design and maintenance, blog, shop, or a web presence, I can design and built it.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "WordPress Web Design",
    url: "https://ojsweb.co.uk/wordpress-websites",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DesktopNav />
      <Navigation />
      <main className={mainContainer}>
        <section
          className={herContainerAlt}
        >
          <div className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h1 className={h1}>
                Master Your Web Presence with Expert WordPress Design
              </h1>
              <p className={heroP}>
                {`The world's most popular CMS, perfect for those who want to take charge of their web presence.`}
              </p>
              <LinkStyled src="/contact" linkText="Arrange a chat" />
            </div>
            <Image
              src="/portfolio/terminusdb-wordpress-website.webp"
              alt="Screenshot of an app I built"
              width={600}
              height={300}
              className="w-full h-auto rounded-xl"
              priority
              quality={100}
            />
          </div>
        </section>
        <PeterWilliams />
        <ColumnsTwoFullH>
          <div className="flex flex-col gap-4">
            <h2 className={`${h2} ${textGradient}`}>
              Tried and tested by millions
            </h2>
            <p>
              WordPress is used by some of the biggest companies in the world,
              and countless SMEs. It offers a tried and tested platform for
              websites, e-commerce sites, blogs and more.
            </p>
            <p>
              I have extensive experience building quality and reliable
              WordPress sites. Whatever your needs, I can deliver a site that is
              fast, beautiful and perfectly functional.
            </p>
            <Link href="/contact" className={linkBlue}>Let&apos;s chat</Link>
          </div>
          <div>
            <Image
              src="/wordpress-265132_640.jpg"
              alt="Example WordPress interface"
              width={600}
              height={300}
              className="w-full h-auto rounded-xl"
              priority
              quality={100}
            />
          </div>
        </ColumnsTwoFullH>
        <section className="bg-gradient-to-br from-teal-100 to-indigo-200 flex flex-col gap-16 mx-auto w-full justify-center items-center py-20 px-4">
          <h2 className={`${h2} ${textGradient}`}>{`Here's some of my work...`}</h2>
          <Portfolio images={wordpressImgs} />
        </section>
        <Costs description={costDescription} cost="£250" />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
