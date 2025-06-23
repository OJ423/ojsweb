import ContactCta from "@/components/ContactCta";
import {
  darkContainer,
  gridFiveCol,
  h1,
  h2,
  herContainerAlt,
  heroP,
  lightContainer,
  linkBlue,
  linkWhite,
  mainContainer,
  textGradient,
  twoColGridLightBkg,
  twoSpanCol,
} from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "WordPress, React, & Vanilla Web Design Services.",
  description:
    "Web design & development for tech startups and businesses. Specializing in WordPress, Vanilla HTML/CSS, and React Frameworks for bespoke, results-driven websites.",
  openGraph: {
    title: "WordPress, React, & Vanilla Web Design Services.",
    description:
      "Web design & development for tech startups and businesses. Specializing in WordPress, Vanilla HTML/CSS, and React Frameworks for bespoke, results-driven websites.",
    url: "https://ojsweb.co.uk/shopify-sites",
    siteName: "Tech Startup Marketing & Web Design | OJSWEB",
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
        alt: "WordPress, React, & Vanilla Web Design Services.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/web-design",
  },
};

export default function WebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress, React, & Vanilla Web Design Services.",
    description:
      "Web design & development for tech startups and businesses. Specializing in WordPress, Vanilla HTML/CSS, and React Frameworks for bespoke, results-driven websites.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "WordPress, React, & Vanilla Web Design Services.",
    url: "https://ojsweb.co.uk/web-design",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <DesktopNav />
      <main className={mainContainer}>
        <section className={herContainerAlt}>
          <article className={gridFiveCol}>
            <div className={twoSpanCol}>
              <h1 className={h1}>Web Design & Development</h1>
              <p className={heroP}>
                Whether you&apos;re a burgeoning tech startup or an established
                local business in Cheshire and Manchester, I can create robust,
                user-friendly, and visually stunning websites that stand out and
                perform.
              </p>
              <p className={heroP}>
                I&apos;m proficient across HTML, CSS, JS, TS, WordPress and
                React Frameworks and will work with you to create a a website
                bespoke to your needs.
              </p>
              <LinkStyled src="/contact" linkText="Let's talk" />
            </div>
            <Image
              src="/portfolio/vectorlink-entity-resolution-services.jpg"
              alt="VectorLink website screenshot showing entity resolution services page"
              quality={80}
              width={800}
              height={600}
              priority
              className="w-full h-auto md:col-span-3 hover:scale-110 hover:-rotate-3 transition-all duration-500 ease-in-out rounded-xl"
            />
          </article>
        </section>
        <section className={lightContainer} id="cms">
          <article className={`${twoColGridLightBkg} mb-8`}>
            <div className="flex flex-col gap-8">
              <h2 className={`${h2} ${textGradient}`}>Flexible Foundations: Content Management Systems</h2>
              <p>
                For many businesses, a Content Management System (CMS) is the backbone of their digital presence, offering ease of use and powerful scalability. I specialise in leveraging these platforms to give you control over your content without sacrificing design or functionality.
              </p>
              <Link href="/contact" className={linkBlue}>Let&apos;s talk</Link>
            </div>
            <Image
              src="/portfolio/terminusdb-wordpress-website.webp"
              alt="Example of a WordPress website I built"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
              quality={80}
            />
          </article>
          <article className={twoColGridLightBkg}>
            <Image 
              src="/wordpress-265132_640.jpg"
              alt="Example WordPress interface"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl order-2 md:order-1"
              quality={80}
            />
            <div className="flex flex-col gap-8 order-1 md:order-2">
              <h2 className={`${h2} ${textGradient}`}>WordPress: Powering Millions of Websites</h2>
              <p>WordPress is a versatile and incredibly powerful CMS that&apos;s perfect for a wide range of businesses. From dynamic blogs and informative corporate sites to intricate e-commerce platforms, WordPress offers unparalleled flexibility, a vast ecosystem of plugins, and an intuitive interface that empowers you to manage your content effortlessly.</p>
              <Link href="/wordpress-websites" className={linkBlue}>Explore WordPress Services</Link>
            </div>
          </article>
        </section>
        <section className={darkContainer} id="bespoke">
          <article className="flex flex-col gap-8 mb-8 max-w-screen-md mx-auto">
              <h2 className={h2}>Bespoke Builds, Crafting with Code</h2>
              <p>When your project demands ultimate flexibility, lightning-fast performance, or a truly unique user experience, a custom-coded approach might be the perfect fit.</p>
          </article>
            <article className="max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8">
                <h3 className={h2}>Vanilla HTML & CSS</h3>
                <Image 
                  src="/portfolio/animated-display-website.webp"
                  alt="Screenshot of a website I built using HTML and CSS"
                  width={600}
                  height={400}
                  quality={80}
                  className="w-full h-auto rounded-xl"
                />
                <p>For projects requiring lean, highly optimised, and incredibly fast loading times, building with Vanilla HTML and CSS offers unmatched control. This approach is ideal for static sites, landing pages, or when absolute precision over every pixel and responsive behaviour is paramount. I hand-code elegant and efficient front-ends, ensuring your website is not only beautiful but also incredibly performant and accessible across all devices.</p>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className={h2}>React Frameworks</h3>
                <Image 
                  src="/portfolio/sciodonia-next-js-site.png"
                  alt="Screenshot of a website I built using Next.js"
                  width={600}
                  height={400}
                  quality={80}
                  className="w-full h-auto rounded-xl"
                />
                <p>For modern web applications that demand rich interactivity, real-time data handling, and a seamless user experience, React Frameworks are our go-to. Technologies like React.js allow us to build complex, single-page applications (SPAs) and dynamic user interfaces that feel incredibly fluid and responsive. If you&apos;re looking for a web application with sophisticated features, intricate user flows, or a highly interactive dashboard, React provides the robust and scalable foundation needed to bring your most ambitious digital visions to life.</p>
                <Link href="/react-websites" className={linkWhite}>React Websites</Link>
              </div>
            </article>
        </section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
