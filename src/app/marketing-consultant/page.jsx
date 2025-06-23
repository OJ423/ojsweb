import Navigation from "@/components/Navigation";
import Image from "next/image";
import Testimonials from "@/components/testimonials.js/Testimonials";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import LinkStyled from "@/components/LinkStyled";
import Packages from "@/components/Packages";
import Link from "next/link";
import { FiYoutube, FiBox, FiLayout } from "react-icons/fi";
import { PiGraphDuotone, PiPlantBold, PiStrategyBold } from "react-icons/pi";
import { GiArchiveResearch, GiNewspaper } from "react-icons/gi";
import { FaChartLine, FaIndustry } from "react-icons/fa";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";
import { TbRulerMeasure } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoBusiness } from "react-icons/io5";
import {
  h1,
  herContainerAlt,
  heroP,
  mainContainer,
  twoColGridLightBkg,
} from "@/components/customStyles";
import ContactCta from "@/components/ContactCta";

export const metadata = {
  title: "Marketing Consultant | Manchester & Cheshire",
  description:
    "Helping marketing teams and growing businesses build strategic, data-driven marketing functions for measurable success.",
  openGraph: {
    title: "Content Marketing Services",
    description:
      "Helping marketing teams and growing businesses build strategic, data-driven marketing functions for measurable success.",
    url: "https://ojsweb.co.uk/marketing-consultant",
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
        alt: "Marketing Consultant - Cheshire, Manchester, and Worldwide",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/marketing-consultant",
  },
};

export default function MarketingConsultant() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Consultant in Manchester, Cheshire and Beyond",
    description:
      "Helping marketing teams and growing businesses build strategic, data-driven marketing functions for measurable success.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Marketing Consultant",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "Marketing Consultant",
    url: "https://ojsweb.co.uk/marketing-consultant",
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
          <div className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h1 className={h1}>Growth Focused Marketing Consultant</h1>
              <p className={heroP}>
                I help marketing teams and growing businesses build strategic,
                data-driven marketing functions for measurable success.
              </p>
              <LinkStyled src="/contact" linkText="Hire me" />
            </div>
            <Image
              src="/consultant/cheshire-manchester-marketing-consultant.webp"
              alt="Manchester & Cheshire Marketing Consultant"
              width={600}
              height={600}
              className="w-full h-auto rounded-xl"
              priority
              quality={100}
            />
          </div>
        </section>
        <div className="relative w-full">
          <ColumnsTwoFullH>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold w-full bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Empowering Marketing Teams & Growing Businesses
              </h2>
              <p className="text-lg font-medium leading-7">
                As a marketing consultant, I specialise in helping small
                marketing teams and growing businesses establish a structured
                and effective marketing function. Whether you’re scaling up,
                launching new initiatives, or refining your strategy, I provide
                the expertise and direction needed to build a results-driven
                marketing operation.
              </p>
            </div>
            <section className="flex flex-col gap-8">
              <Image
                src="/consultant/helping-business-growth.webp"
                alt="Helping business growth"
                width={600}
                height={600}
                className="w-full h-auto rounded-xl"
                priority
                quality={100}
              />
            </section>
          </ColumnsTwoFullH>
        </div>
        <section className="bg-gradient-to-br from-teal-100 to-indigo-200 rounded-xl p-8 w-full py-40">
          <div className="flex flex-col gap-16 max-w-screen-md mx-auto">
            <h2 className="text-3xl font-bold w-full text-gray-800">
              How I Can{" "}
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Help
              </span>
            </h2>
            <div className="grid md:grid-cols-6 gap-4 items-center">
              <GiArchiveResearch
                size={96}
                className="col-span-1 text-teal-400"
              />
              <div className="col-span-5 flex flex-col gap-4">
                <h3 className="text-xl font-bold">
                  Market Research & Insights
                </h3>
                <p className="leading-7 font-medium">
                  Understanding your audience is key to successful marketing. I
                  conduct market research to identify your ideal customers,
                  assess competitor positioning, and uncover opportunities that
                  give you an edge.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-6 gap-4 items-center">
              <PiStrategyBold size={96} className="col-span-1 text-teal-400" />
              <div className="col-span-5 flex flex-col gap-4">
                <h3 className="text-xl font-bold">
                  Defining Your Marketing Strategy
                </h3>
                <p className="leading-7 font-medium">
                  I work closely with you to develop a clear, actionable
                  marketing strategy that aligns with your business goals. From
                  brand positioning to campaign planning, I ensure your
                  marketing efforts are purposeful and effective.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-6 gap-4 items-center">
              <TbRulerMeasure size={96} className="col-span-1 text-teal-400" />
              <div className="col-span-5 flex flex-col gap-4">
                <h3 className="text-xl font-bold">
                  Performance Metrics & Best Practices
                </h3>
                <p className="leading-7 font-medium">
                  Marketing should be measurable. I help you set up key
                  performance indicators (KPIs) and tracking systems to monitor
                  success, optimise campaigns, and continuously improve results
                  using industry best practices.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-6 gap-4 items-center">
              <PiPlantBold size={96} className="col-span-1 text-teal-400" />
              <div className="col-span-5 flex flex-col gap-4">
                <h3 className="text-xl font-bold">
                  Building a Scalable Marketing Function
                </h3>
                <p className="leading-7 font-medium">
                  For businesses setting up a marketing department, I provide
                  guidance on hiring, workflows, and processes to ensure a
                  strong foundation for long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8 max-w-screen-md mx-auto px-8 py-20">
          <h2 className="text-2xl sm:text-4xl font-bold pb-6 mb-6 border-b-2 w-fit bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
            Why Work With Me?
          </h2>
          <div className="grid md:grid-cols-6 gap-4 items-center">
            <BsPersonWorkspace size={96} className="col-span-1 text-teal-400" />
            <div className="col-span-5 flex flex-col gap-4">
              <h3 className="text-xl font-bold">Hands-on Experience</h3>
              <p className="leading-7 font-medium">
                I bring real-world marketing expertise, having worked across
                multiple industries.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-6 gap-4 items-center">
            <IoBusiness size={96} className="col-span-1 text-teal-400" />
            <div className="col-span-5 flex flex-col gap-4">
              <h3 className="text-xl font-bold">Tailored Approach</h3>
              <p className="leading-7 font-medium">
                Every business is unique — I create strategies and frameworks
                that suit your specific needs.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-6 gap-4 items-center">
            <FaChartLine size={96} className="col-span-1 text-teal-400" />
            <div className="col-span-5 flex flex-col gap-4">
              <h3 className="text-xl font-bold">No-Nonsense, Results-Driven</h3>
              <p className="leading-7 font-medium">
                My focus is on delivering practical solutions that drive
                measurable impact.
              </p>
            </div>
          </div>
        </section>
        <p></p>
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
