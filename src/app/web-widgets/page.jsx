import ContactCta from "@/components/ContactCta";
import Portfolio from "@/components/Portfolio";
import {
  gridFiveCol,
  h1,
  h2,
  herContainerAlt,
  heroP,
  lightContainer,
  linkBlue,
  mainContainer,
  textGradient,
  twoSpanCol,
  darkContainer,
  twoColGridLightBkg,
} from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import { widgets } from "@/components/constants";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaSearch, FaShareAlt, FaUserCheck } from "react-icons/fa";

export const metadata = {
  title: "Web Widget Development | Tools, Calculators, and Games",
  description:
    "Web widget development for calculators, tools, and games that drive engagement, improve SEO, and convert visitors into customers.",
  openGraph: {
    title: "Web Widget Development | Tools, Calculators, and Games",
    description:
      "Web widget development for calculators, tools, and games that drive engagement, improve SEO, and convert visitors into customers.",
    url: "https://ojsweb.co.uk/web-widgets",
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
        alt: "Web widget development services.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/web-widgets",
  },
};

export default function WebWidgetsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Widget Development",
    description:
      "Web widget development for calculators, tools, and games that drive engagement, improve SEO, and convert visitors into customers.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "Web Widget Development",
    url: "https://ojsweb.co.uk/web-widgets",
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
              <h1 className={h1}>Web Widget Development</h1>
              <p className={heroP}>
                SEO has changed dramatically due to AI search overviews. Web
                widgets, such as calculators, tools and games, are a great way
                to get people to your owned channels and away from the
                competition.
              </p>
              <p className={heroP}>
                If you have an idea for a tool or game that would be of use to
                your ideal customers, get in touch and I can build and implement
                it for you.
              </p>
              <LinkStyled src="/contact" linkText="Let's Talk" />
            </div>
            <Image
              src="/portfolio/twa-calculator-close-up.webp"
              alt="Screenshot of a Time Weighted Average Calculator"
              quality={80}
              width={500}
              height={400}
              priority
              className="w-auto max-h-[500px] h-auto ms-auto md:col-span-3 rounded-xl"
            />
          </article>
        </section>

        <section className={lightContainer} id="why-widgets">
          <article className="flex flex-col gap-6 max-w-screen-md mx-auto mb-8 text-left">
            <h2 className={`${h2} ${textGradient}`}>
              Why Widgets Work
            </h2>
            <h3 className={`text-lg ${textGradient}`}>The Data Behind the Results</h3>
            <p>
              In a world of passive scrolling, interactive widgets turn your
              visitors into active participants. Beyond just looking good, these
              tools provide a measurable competitive edge.
            </p>
          </article>
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
              <FaBolt size={28} className="text-teal-600" />
              <h3 className="text-lg font-semibold">Skyrocket Engagement</h3>
              <p>
                Interactive content generates 52.6% more engagement than static
                blog posts, with visitors spending an average of 13 minutes on
                dynamic widgets.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
              <FaSearch size={28} className="text-teal-600" />
              <h3 className="text-lg font-semibold">A No-Brainer for SEO</h3>
              <p>
                Adding a calculator to a landing page can reduce bounce rate by
                18–32%. Search engines prioritize sites with high dwell time.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
              <FaUserCheck size={28} className="text-teal-600" />
              <h3 className="text-lg font-semibold">Higher Quality Leads</h3>
              <p>
                Interactive tools generate 2x more conversions than passive
                content. ROI calculators can increase purchase confidence by up
                to 68%.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
              <FaShareAlt size={28} className="text-teal-600" />
              <h3 className="text-lg font-semibold">The Viral Factor</h3>
              <p>
                Visual, interactive content is 40x more likely to be shared on
                social networks than static text, providing free, organic reach.
              </p>
            </div>
          </div>
        </section>

        <section className={`${lightContainer} py-32`} id="widget-portfolio">
          <article className="flex flex-col gap-6 max-w-screen-md mx-auto mb-8 text-left">
              <h2 className={`${h2} ${textGradient}`}>Here are some of the web widgets I&apos;ve built</h2>
              <p>
                From calculators to interactive tools and games, each widget is
                designed to provide value, boost engagement, and support your
                SEO goals.
              </p>
          </article>
          <div className="mt-12">
            <Portfolio images={widgets} />
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
