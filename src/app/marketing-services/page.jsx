import Navigation from "@/components/Navigation";
import Image from "next/image";
import LinkStyled from "@/components/LinkStyled";
import { TfiWrite } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import Link from "next/link";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";
import Testimonials from "@/components/testimonials.js/Testimonials";

export const metadata = {
  title: "Freelance Marketing Services in Cheshire, Manchester & Worldwide",
  description:
    "Marketing freelancer based in Cheshire and Manchester providing content marking and SEO.",
  openGraph: {
    title: "Freelance Marketing Services",
    description:
      "Marketing freelancer based in Cheshire and Manchester providing content marking and SEO.",
    url: "https://ojsweb.co.uk/marketing-services",
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
        alt: "Freelance Marketing Services - Cheshire, Manchester, and Worldwide",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/marketing-services",
  },
};

export default function MarketingServices() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Services",
    description:
      "Professional marketing services to to increase organic traffic and raise awareness about your business.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "Freelance Marketing",
    url: "https://ojsweb.co.uk/marketing-services",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DesktopNav />
      <Navigation />
      <main className="flex min-h-min flex-col w-full items-center justify-center">
        <section
          className={`flex flex-col gap-20 px-auto px-4 xl:px-0 justify-center items-center py-20 lg:py-40 bg-[url("/full-bloom.webp")] w-full`}
        >
          <div className="flex flex-col gap-8 md:flex-row gap-20 justify-center items-center max-w-screen-lg mt-20 md:mt-0 sm:w-2/3 md:w-full">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Freelance Marketing Services
                </span>{" "}
                Aligned to Your Goals
              </h1>
              <p className="text-lg font-medium">
                {`Seeking a boost in sales leads, increased visibility, or support for a forthcoming product launch? I’m Oliver, your expert in crafting tailor-made organic marketing solutions designed to propel your business towards its unique goals.`}
              </p>
              <LinkStyled src="/contact" linkText="Arrange a chat" />
            </div>
            <Image
              src="/marketing/freelance-marketing-services.svg"
              alt="Freelance Marketing Services"
              width={600}
              height={600}
              className="rounded-xl md:w-5/12"
              priority
              quality={100}
            />
          </div>
        </section>
        <section className="flex flex-col gap-20 mx-4 max-w-screen-xl justify-center items-center p-8 mx-2 lg:p-20 my-20 rounded-xl bg-teal-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 justify-center">
            <Link
              href="/marketing-services/content-marketing"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full">
                <TfiWrite size={42} className="text-teal-500" />
                <h3 className="font-bold text-xl">Content Marketing</h3>
                <p>
                  Unlock the power of content marketing - Engaging, informative,
                  and audience-centric content strategies.
                </p>
              </div>
            </Link>
            <Link
              href="/marketing-services/organic-seo"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full">
                <FaGoogle size={42} className="text-teal-500" />
                <h3 className="font-bold text-xl">Organic SEO</h3>
                <p>
                  Elevate your online presence with customised strategies that
                  enhance visibility, attract targeted traffic, and drive
                  sustainable growth for your business.
                </p>
              </div>
            </Link>
            <Link
              href="/marketing-services/design-services"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full">
                <MdDraw size={42} className="text-teal-500" />
                <h3 className="font-bold text-xl">Design Services</h3>
                <p>
                  Whether its sales brochures, imagery, product videos or any
                  other type of graphic design, I can create on-brand, beautiful
                  and effective marketing collateral.
                </p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 justify-center items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold w-full text-gray-800">
                Freelance Marketing Services that are{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  effective and risk free
                </span>
              </h1>
              <p className="text-lg leading-7">
                I have over 20 years experience in the world of marketing. I
                have helped SMEs, multinational organisations and tech start-ups
                generate leads, increase brand exposure and launch products. I
                offer a range of marketing services to help your business.
              </p>
              <p className="text-lg leading-7 font-medium">
                Hiring a freelance marketer like me brings you a wealth of
                experience that you can take advantage of as and when you need.
                Less costly and time consuming than employing someone full time,
                my freelance marketing services are always crafted with
                precision and care.
              </p>
              <LinkStyled src="/contact" linkText="Talk your needs" />
            </div>
            <div>
              <Image
                src="/marketing/terminusdb-popup-banner-design.webp"
                alt="Pop-up banner designed for TerminusDB"
                width={600}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </section>
        <Testimonials />

        <div className="my-20">
          <h2 className="text-2xl sm:text-4xl font-bold pb-6 mb-6 border-b-2 w-fit bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
            Get in touch to begin...
          </h2>
          <p className="mb-16">Send me a message to arrange a chat.</p>
          <LinkStyled src="/contact" linkText="Arrange a chat" />
        </div>
      </main>
      <Footer />
    </>
  );
}
