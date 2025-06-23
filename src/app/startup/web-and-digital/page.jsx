import ContactCta from "@/components/ContactCta";
import {
  darkContainer,
  flexRowDarkBkg,
  gridFiveCol,
  h1,
  h2,
  herContainerAlt,
  lightContainer,
  mainContainer,
  textGradient,
  twoColGridLightBkg,
  twoSpanCol,
} from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import PageSectionNav from "@/components/pageSectionNav";
import Image from "next/image";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Web Design & Digital - Tech Startup Marketing Services",
  description:
    "Strategic web and digital consultancy for tech startups. Expertise in website design, UX/CRO, SEO, landing page builds, and analytics to drive your online success.",
  openGraph: {
    title: "Web Design & Digital - Tech Startup Marketing Services",
    description:
      "Strategic web and digital consultancy for tech startups. Expertise in website design, UX/CRO, SEO, landing page builds, and analytics to drive your online success.",
    url: "https://ojsweb.co.uk/web-apps",
    siteName: "Tech Startup Marketing Services",
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
        alt: "Web Design & Digital - Tech Startup Marketing Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/startup/web-and-digital",
  },
};


export default function WebAndDigitalPage() {
  const sections = ["design", "ux", "seo", "landing", "analytics"];
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design & Digital - Tech Startup Marketing Services",
    description:
      "Strategic web and digital consultancy for tech startups. Expertise in website design, UX/CRO, SEO, landing page builds, and analytics to drive your online success.",
    provider: {
      "@type": "ProfessionalService",
      name: "Tech Startup Marketing Services",
      url: "https://ojsweb.co.uk",
    },
    areaServed: [
      "Cheshire",
      "Manchester",
      "UK",
      "Worldwide",
      "Remote",
      "USA",
      "Europe",
    ],
    serviceType: "Web Design & Digital - Tech Startup Marketing Services",
    url: "https://ojsweb.co.uk/startup/web-and-digital",
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
        <section className={herContainerAlt}>
          <article className={gridFiveCol}>
            <div className={twoSpanCol}>
              <h1 className={h1}>
                Strategic Web & Digital Consulting for Tech Startups
              </h1>
              <p>
                Your tech startup deserves a digital presence that&apos;s goes
                beyond a simple template site. My web and digital services aim
                to engage your audience and drive measurable growth. Let me help
                create your digital foundation to scale and succeed.
              </p>
              <LinkStyled src="/contact" linkText="Let's talk" />
            </div>
            <Image
              src="/tech-startup/scidonia-website.png"
              alt="AI Tech Startup Scidonia website screenshot"
              quality={80}
              width={800}
              height={600}
              priority
              className="w-full h-auto md:col-span-3 hover:scale-110 hover:-rotate-3 transition-all duration-500 ease-in-out rounded-xl"
            />
          </article>
        </section>
        <section className={lightContainer} id="design">
          <article className={`${gridFiveCol} md:gap-16`}>
            <div className={twoSpanCol}>
              <h2 className={`${h2} ${textGradient}`}>
                Website Design: Your Digital HQ
              </h2>
              <p>
                Your website is often the first impression your tech startup
                makes. First impressions count which is why I specialise in
                designing beautiful, cross-device websites that are fast,
                functional, and designed with purpose. From initial concept to
                launch, I&apos;ll consult with you to develop a responsive,
                scalable, and secure website that serves as the central hub for
                your online operations, built with future growth in mind.
              </p>
            </div>
            <Image
              src="/portfolio/vectorlink-entity-resolution-services.jpg"
              alt="VectorLink website screenshot showing entity resolution services page"
              width={800}
              height={600}
              quality={80}
              className="w-full h-auto rounded-xl md:col-span-3"
            />
          </article>
        </section>
        <section className={darkContainer} id="ux">
          <article className={`${gridFiveCol} md:gap-16`}>
            <div className={twoSpanCol}>
              <h2 className={h2}>UX + Conversion UX</h2>
              <p>
                User experience is paramount when it comes to your
                website&apos;s goals. I&apos;ll meticulously analyse your user
                journeys, identify friction points, and implement data-driven
                improvements to ensure your website isn&apos;t only easy to use
                but also highly effective at guiding visitors towards
                conversion. My focus on Conversion UX means every design
                decision is aimed at transforming browsers into engaged users
                and customers.
              </p>
            </div>
            <Image
              src="/portfolio/vectorlink-entity-call-to-action.jpg"
              alt="Call to action section of VectorLink website"
              width={800}
              height={600}
              quality={80}
              className="w-full h-auto rounded-xl md:col-span-3"
            />
          </article>
        </section>
        <section className={lightContainer} id="seo">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h2 className={`${h2} ${textGradient}`}>SEO Fundamentals</h2>
              <p>
                Visibility is crucial for any tech startup. I&apos;ll help you
                establish a strong foundation in SEO (Search Engine
                Optimisation), ensuring your website ranks higher in search
                results for the terms that matter most to your business. This
                isn&apos;t about quick fixes, but about implementing sustainable
                strategies that attract organic traffic, positioning you as an
                authoritative voice in your niche.
              </p>
            </div>
            <Image
              src="/freelance-seo-consultant.svg"
              alt="Graphic design showing tech startup SEO services"
              width={600}
              height={600}
              quality={80}
              className="w-full h-auto rounded-xl"
            />
          </article>
        </section>
        <section className={darkContainer} id="landing">
          <article className={`${gridFiveCol} md:gap-16`}>
            <div className={twoSpanCol}>
              <h2 className={h2}>Campaign Launch Pages</h2>
              <p>
                Every marketing campaign deserves a powerful destination. I
                specialise in designing and building high-performing landing
                pages that are meticulously optimized for specific campaign
                goals. Whether it&apos;s lead generation, product sign-ups, or
                demo requests, I&apos;ll ensure your landing pages are clear,
                compelling, and designed to maximize your conversion rates.
              </p>
            </div>
            <Image
              src="/portfolio/climateresilient.world.webp"
              alt="Climate Resilient World Landing Page"
              width={800}
              height={600}
              quality={80}
              className="w-full h-auto rounded-xl md:col-span-3"
            />
          </article>
        </section>
        <section className={lightContainer} id="analytics">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h2 className={`${h2} ${textGradient}`}>
                Measuring What Matters
              </h2>
              <p>
                You can&apos;t optimise what you don&apos;t measure. I&apos;ll
                set up comprehensive analytics tracking for your website and
                digital properties, providing you with the critical insights
                needed to understand user behaviour, campaign performance, and
                overall digital effectiveness. I am experienced with Google
                Analytics and alternative platforms like Plausible and Matomo.
              </p>
              <p>
                With clear, actionable data at your fingertips, you can make
                informed decisions that fuel your startup&apos;s growth.
              </p>
            </div>
            <Image
              src="/tech-startup/web-analytics.png"
              alt="Graphic design showing charts and tables representing web analytics"
              width={600}
              height={600}
              quality={80}
              className="w-full h-auto"
            />
          </article>
        </section>
        <ContactCta />
        <PageSectionNav sections={sections} />
      </main>
      <Footer />
    </>
  );
}
