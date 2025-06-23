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
import { h1, h2, heroContainer, heroP, linkBlue, mainContainer } from "@/components/customStyles";
import ContactCta from "@/components/ContactCta";

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
      <main className={mainContainer}>
        <section className={heroContainer}>
          <article className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-end justify-between mx-auto gap-8 text-white">
            <div className="flex flex-col gap-8 m-auto item lg:col-span-2 pb-20">
              <h1 className={h1}>
                  Freelance Marketing Services Aligned to Your Goals
              </h1>
              <p className={heroP}>
                {`Seeking a boost in sales leads, increased visibility, or support for a forthcoming product launch? I’m Oliver, your expert in crafting tailor-made organic marketing solutions designed to propel your business towards its unique goals.`}
              </p>
              <Link href="/contact" className={linkBlue} >Arrange a chat</Link>
            </div>
            <Image
              src="/fractional-cmo-services.png"
              alt="Oliver Smith, Fractional CMO services"
              quality={100}
              width={800}
              height={800}
              priority
              className="w-full ms-auto h-auto lg:col-span-3 md:mt-40 lg:mt-0"
            />
          </article>
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
              <h2 className={h2}>
                Freelance Marketing Services that are{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  effective and risk free
                </span>
              </h2>
              <p>
                I have over 20 years experience in the world of marketing. I
                have helped SMEs, multinational organisations and tech start-ups
                generate leads, increase brand exposure and launch products. I
                offer a range of marketing services to help your business.
              </p>
              <p>
                Hiring a freelance marketer like me brings you a wealth of
                experience that you can take advantage of as and when you need.
                Less costly and time consuming than employing someone full time,
                my freelance marketing services are always crafted with
                precision and care.
              </p>
              <Link href="/contact" className={linkBlue} >Let&apos;s chat</Link>
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

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
