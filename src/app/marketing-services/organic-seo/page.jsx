import Navigation from "@/components/Navigation";
import Image from "next/image";
import Testimonials from "@/components/testimonials.js/Testimonials";
import LinkStyled from "@/components/LinkStyled";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";
import Link from "next/link";
import DesktopNav from "@/components/DeskTopNav";
import { h1, h2, herContainerAlt, heroP, linkBlue, mainContainer, twoColGridLightBkg } from "@/components/customStyles";
import ContactCta from "@/components/ContactCta";

export const metadata = {
  title: "Freelance SEO Consultant Cheshire and Manchester",
  description:
    "I am a Freelance SEO SEO Consultant working with clients in Cheshire, Manchester and Worldwide. Hire me as your SEO specialist.",
  openGraph: {
    title: "Freelance SEO Consultant in Cheshire & Manchester",
    description:
      "Freelance SEO services in Cheshire, Manchester and Worldwide. Hire me as your SEO specialist.",
    url: "https://ojsweb.co.uk/marketing-services/organic-seo",
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
        alt: "SEO Consultant Cheshire and Manchester",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/marketing-services/organic-seo",
  },
};

export default function OrganicSEO() {
  const packageDescription =
    "A three month package would enable provide you with 48 hours of my time. This includes SEO tools such as Ahrefs saving you further money on software packages.";
  const packageTitle = "3 Month SEO Starter Package";
  const packageFeatures = [
    "16 hours per month x 3",
    "Site Audit",
    "Topic & Keyword Research",
    "SEO Plan",
    "On-Page Optimisation",
    "Internal Link Building",
    "External Link Building",
    "SEO Optimised Content Generation",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freelance SEO Services",
    description:
      "Organic SEO services to help companies improve search engine visibility.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "Freelance SEO Services",
    url: "https://ojsweb.co.uk/marketing-services/organic-seo",
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
          <section
            className={herContainerAlt}
          >
            <div className={twoColGridLightBkg}>
              <div className="flex flex-col gap-8">
                <h1 className={h1}>
                    Freelance SEO Consultant in Manchester and Cheshire
                </h1>
                <p className={heroP}>
                  Do you need a freelance SEO consultant to boost your online presence? I am a freelance SEO consultant based in Manchester and Cheshire and specialise in helping businesses improve their search rankings.
                </p>
                <p className={heroP}>
                  My SEO services are proven to increase web traffic and
                  lead generation.
                </p>
                <Link href="/contact" className={linkBlue} >Arrange a chat</Link>
              </div>
              <Image
                src="/freelance-seo-consultant.svg"
                alt="A graphic design of a laptop with a blog and a person moving elements around. Designed to represent a freelance seo consultant"
                width={600}
                height={300}
                className="rounded-xl mx-auto"
                priority
                quality={100}
              />
            </div>
          </section>
          <section className="flex flex-col max-w-screen-lg w-full px-8 xl:px-0 gap-20 my-20">
            <section className="flex flex-col gap-8 p-8 bg-gradient-to-br from-teal-100 to-indigo-200 rounded-xl">
              <h2 className={h2}>
                Freelance SEO results...
              </h2>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center justify-center">
                <p className="text-teal-500 text-4xl font-bold text-left">{`4900 % Growth`}</p>
                <p className="text-gray-600 font-medium">
                  I grew TerminusDB`&apos;s organic web traffic from under 200 monthly visitors to over 10,000, generating over 1,200 leads in just 12 months.You can read about how <Link className="text-indigo-500 hover:text-teal-500 transition-all duration-500" href="/blog/how-i-achieved-seo-growth">I achieved 4900% growth using SEO here</Link>.
                </p>
              </div>
              <div className="border-t-2 border-teal-500 my-4"></div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center justify-center">
                <p className="text-teal-500 text-4xl font-bold text-left">{`125 % Growth`}</p>
                <p className="text-gray-600 font-medium">
                  Food manufacturer Aviko saw their web visitors increase from
                  2,000 monthly visitors to 4,500 visitors in under 12 months
                  and exponentially improved lead generation.{" "}
                </p>
              </div>
            </section>
            <div className="flex flex-col gap-4 max-w-screen-md mx-auto">
              <h2 className={h2}>
                How I can help you as a{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Freelance SEO Consultant
                </span>
              </h2>
              <p className="text-lg leading-7">
              Do you want to improve your online presence and connect with your audience? My freelance SEO services are designed to help businesses succeed in organic search. From technical SEO to content creation, I provide a comprehensive approach tailored to your needs and budget.
              </p>
              <p className="text-lg leading-7">
              I believe the best way to build awareness, trust, and customer loyalty is through content that educates, entertains, and helps your audience. This is the foundation of my organic SEO services: creating a meaningful connection between you and your customers.
              </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-4 p-4 flex-1">
                  <h3 className="text-xl font-semibold">Technical Optimisation</h3>
                  <p>I will refine your existing site to improve performance and visibility</p>
                </div>
                <p className="text-5xl font-bold text-gray-600 rotate-90 md:rotate-0">{`>`}</p>
                <div className="flex flex-col gap-4 p-4 flex-1">
                  <h3 className="text-xl font-semibold">Research & Strategy</h3>
                  <p>Keyword research and competitor analysis identify quick wins and strategic opportunities</p>
                </div>
                <p className="text-5xl font-bold text-gray-600 rotate-90 md:rotate-0">{`>`}</p>
                <div className="flex flex-col gap-4 p-4 flex-1">
                  <h3 className="text-xl font-semibold">Content & Growth</h3>
                  <p>I will focus on creating valuable content, building links, and optimizing your owned channels for continuous improvement</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 max-w-screen-md mx-auto">
              <p className="text-lg leading-7 font-medium">
                If you are interested, the best port-of-call is to arrange a
                chat to discuss your needs.
              </p>
              <Link href="/contact" className={linkBlue} >Arrange a chat</Link>
            </div>
          </section>
          <section className="bg-gradient-to-br from-teal-100 to-indigo-200 rounded-xl mx-8 p-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-20 max-w-screen-xl mx-auto items-center mb-20">
            <div className="flex flex-col gap-4">
              <h2 className={h2}>
                The Key Is{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Consistency
                </span>
              </h2>
              <p className="text-lg leading-7 font-medium">
                Organic SEO is not a quick fix. It takes time for changes to
                correlate across search engines, but with the right craft and
                care, results can steadily increase month by month.
              </p>
              <p className="text-lg leading-7 font-medium">
                I would recommend hiring me for a minimum of three months to
                start to see an increase in web traffic and website generated
                enquiries. If you have junior marketing staff I can teach best
                practices so you can continue without my assistance and still
                reap the rewards.
              </p>
            </div>
            <div>
              <Image
                src="/marketing/organic-seo-results.svg"
                alt="Mock up of google browser on desktop"
                width={600}
                height={600}
                quality={80}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </section>
          <Packages
            description={packageDescription}
            title={packageTitle}
            features={packageFeatures}
            cost="£1,800"
          />
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-8 xl:px-0 mx-auto w-full max-w-screen-lg mb-20">
            <div className="flex flex-col gap-4">
              <h2 className={h2}>
                Want to manage{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  SEO yourself?
                </span>
              </h2>
              <p className="text-lg font-medium">
                If you have not got the budget or have a few hours a week to
                spend increasing your search engine performance, I have written
                a blog that will help. Read{" "}
                <Link
                  className="transition-all duration-500 text-teal-500 hover:text-indigo-500"
                  href="/blog/seo-tips-for-small-businesses"
                >
                  SEO tips for small businesses
                </Link>{" "}
                for some free advice.
              </p>
              <Link href="/blog/seo-tips-for-small-businesses" className={linkBlue}>
                SEO Tips for Businesses
              </Link>
            </div>
            <Link href="/blog/seo-tips-for-small-businesses">
              <Image
                alt="SEO Tips for Businesses - mock up of google search results"
                src="/blog/seo-tips-for-small-businesses-title.png"
                width={500}
                height={500}
                className="rounded mx-auto"
              />
            </Link>
          </section>
          <Testimonials />
          <ContactCta />
        </main>
        <Footer />
    </>
  );
}
