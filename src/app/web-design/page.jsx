import ContactCta from "@/components/ContactCta";
import Portfolio from "@/components/Portfolio";
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
import { images } from "@/components/constants";
import Image from "next/image";
import Link from "next/link";
import { FaClipboardList, FaGraduationCap, FaRegComments, FaTools } from "react-icons/fa";

export const metadata = {
  title: "Cheshire Web Design | WordPress, React, & Vanilla Web Design.",
  description:
    "Cheshire Web Design focused on results-driven websites for tech startups and established businesses. WordPress, Vanilla HTML/CSS, and React Frameworks tailored to your goals.",
  openGraph: {
    title: "Cheshire Web Design | WordPress, React, & Vanilla Web Design.",
    description:
      "Cheshire Web Design for tech startups and established businesses. WordPress, Vanilla HTML/CSS, and React Frameworks tailored to your goals.",
    url: "https://ojsweb.co.uk/web-design",
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
        alt: "Cheshire Web Design services.",
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
    name: "Cheshire Web Design Services.",
    description:
      "Cheshire Web Design for tech startups and established businesses. WordPress, Vanilla HTML/CSS, and React Frameworks tailored to your goals.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "Cheshire Web Design, WordPress, React, & Vanilla Web Design Services.",
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
              <h1 className={h1}>Cheshire Web Design & Development</h1>
              <p className={heroP}>
                I&apos;m a Web Designer based in Cheshire. I have experience working with tech startups and established businesses. My goal is to provide websites that are easy to use, fast to load, and visually stunning.
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
        <section className={lightContainer} id="portfolio">
          <article className="flex flex-col gap-6 max-w-screen-xl mx-auto mb-8 text-center">
            <h2 className={`${h2} ${textGradient}`}>Web Design Portfolio</h2>
            <p>
              A snapshot of recent projects.
            </p>
          </article>
          <Portfolio images={images} />
        </section>
        <section className={lightContainer} id="process">
          <article className="flex flex-col gap-6 max-w-screen-lg mx-auto">
            <h2 className={`${h2} ${textGradient}`}>How I Work With Clients</h2>
            <p>
              A step-by-step process that keeps you in control and delivers the
              best solution for your goals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-3 rounded-xl bg-white p-6">
                <FaRegComments size={28} className="text-teal-600" />
                <h3 className="text-lg font-semibold">Talk</h3>
                <p className="text-sm">Understand your needs, your audience, and goals.</p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl bg-white p-6">
                <FaClipboardList size={28} className="text-teal-600" />
                <h3 className="text-lg font-semibold">Plan</h3>
                <p className="text-sm">Functional spec, transition plan, and wireframes.</p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl bg-white p-6">
                <FaTools size={28} className="text-teal-600" />
                <h3 className="text-lg font-semibold">Build</h3>
                <p className="text-sm">Safe staging area to develop independent of live site.</p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl bg-white p-6">
                <FaGraduationCap size={28} className="text-teal-600" />
                <h3 className="text-lg font-semibold">Handover</h3>
                <p className="text-sm">Training and go live.</p>
              </div>
            </div>
            <p>
              I also provide ongoing maintenance and management, keeping your
              website secure, performant, and evolving as your business grows.
            </p>
          </article>
        </section>
        <section className={`${lightContainer} flex flex-col gap-16 py-48`} id="expertise">
          <article className="flex flex-col gap-6 max-w-screen-md mx-auto mb-8">
            <h2 className={`${h2} ${textGradient}`}>The right tech stack for you</h2>
            <p>
              I am well versed in a range of technologies and can help you choose the right one for your project. It is about finding the right solution for you and your team. My core strengths span CMS platforms and custom-coded builds and will advise on the best approach for your project.
            </p>
            <Link href="/contact" className={linkBlue}>Let&apos;s talk</Link>
          </article>
          <article className={`${twoColGridLightBkg} mb-8`}>
            <div className="flex flex-col gap-8">
              <h3 className={h2}>CMS Platforms: WordPress & Beyond</h3>
              <p>
                Content Management Systems provide you with a solid foundation for your website. I am experienced in using a range of CMS platforms to build websites that are easy to use, manage and scale.
              </p>
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
              src="/portfolio/sciodonia-next-js-site.png"
              alt="Screenshot of a website I built using Next.js"
              width={600}
              height={400}
              quality={80}
              className="w-full h-auto rounded-xl order-2 md:order-1"
            />
            <div className="flex flex-col gap-8 order-1 md:order-2">
              <h3 className={h2}>Vanilla HTML/CSS & React Frameworks</h3>
              <p>
                For lean, fast-loading sites I hand-code Vanilla HTML/CSS with
                careful performance optimisation. For more dynamic products, I
                build React Frameworks that deliver rich interactivity, scalable
                UI, and clean architecture.
              </p>
              <Link href="/react-websites" className={linkBlue}>React Websites</Link>
            </div>
          </article>
          <article className={`${twoColGridLightBkg} mt-8`}>
            <div className="flex flex-col gap-8">
              <h3 className={h2}>Ecommerce & Online Selling</h3>
              <p>
                From WooCommerce stores to Shopify builds and modern website
                builders, I design e-commerce experiences that are easy to manage,
                fast to navigate, and built to convert. I advise on platform
                choice, integrate payments, and streamline product management.
              </p>
            </div>
              <Image
                src="/shopify-developer.webp"
                alt="Screenshot of an ecommerce style website"
                width={600}
                height={400}
                quality={80}
                className="object-cover aspect-3/2 rounded-xl"
              />
          </article>
        </section>
        <section className={darkContainer} id="location">
          <article className="flex flex-col gap-6 max-w-screen-md mx-auto text-center">
            <h2 className={h2}>Where I Work</h2>
            <p>
              I can work on premise across Cheshire and Manchester, and I also
              work remotely with clients across the UK and beyond. Whether you
              need onsite collaboration or a fully remote delivery, I adapt to
              your preferred way of working.
            </p>
          </article>
        </section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
