import Navigation from "@/components/Navigation";
import Image from "next/image";
import { TfiWrite } from "react-icons/tfi";
import { FaGoogle, FaIndustry, FaInstagram } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { FiBox, FiLayout, FiYoutube } from "react-icons/fi";
import { GiNewspaper } from "react-icons/gi";
import { PiGraphDuotone } from "react-icons/pi";
import Link from "next/link";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";
import Testimonials from "@/components/testimonials.js/Testimonials";
import {
  h1,
  h2,
  heroContainer,
  heroContainerAlt,
  heroP,
  linkBlue,
  mainContainer,
  textGradient,
  twoColGridLightBkg,
  lightContainer,
  darkContainer,
  gridFiveCol,
  twoSpanCol,
  herContainerAlt,
} from "@/components/customStyles";
import ContactCta from "@/components/ContactCta";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";

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
      <section className={herContainerAlt}>
          <article className={gridFiveCol}>
            <div className={twoSpanCol}>
              <h1 className={h1}>
                  Freelance Marketing Services Aligned to Your Goals
              </h1>
              <p className={heroP}>
                {`Seeking a boost in sales leads, increased visibility, or support for a forthcoming product launch? I’m Oliver, your expert in crafting tailor-made organic marketing solutions designed to propel your business towards its unique goals.`}
              </p>
              <Link href="/contact" className={linkBlue} >Arrange a chat</Link>
          </div>
            <Image
              src="/startup-marketing-strategy.png"
              alt="Marketing for Tech Startups Strategy Diagram"
              quality={100}
              width={800}
              height={500}
              priority
              className={`
                w-full ms-auto h-auto md:col-span-3 `}
                />
          </article>
        </section>
        <section className={lightContainer} id="content-marketing">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <TfiWrite size={32} className="text-teal-500" />
                <h2 className={`${h2} ${textGradient}`}>Content Marketing</h2>
              </div>
              <p>
                Thoughtful content that builds trust, explains complex ideas,
                and brings the right people to your brand. I help you create and
                distribute content that supports growth without fluff.
              </p>
              <Link href="/marketing-services/content-marketing" className={linkBlue}>
                Explore content marketing
              </Link>
            </div>
            <Image
              src="/marketing/content-marketing-services.webp"
              alt="Content marketing example"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto"
              quality={80}
            />
          </article>
        </section>

        <section className={lightContainer} id="content-examples">
          <article className="flex flex-col gap-6 max-w-screen-md mx-auto mb-8 text-left">
            <h2 className={`${h2} ${textGradient}`}>Content Marketing Examples</h2>
            <p>
              A selection of content formats and channels I&apos;ve produced for
              clients.
            </p>
          </article>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
            <Link
              href="https://bookwyrm.ai/blog/pdf-to-json"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <PiGraphDuotone size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Technical Tutorial</p>
              </div>
            </Link>
            <Link
              href="https://namm.org.uk/hse-inspectors-focusing-on-memorial-masons/"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FaIndustry size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Industry Channels</p>
              </div>
            </Link>
            <Link
              href="https://paperbreak.ai/open-letter/"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FiLayout size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Advertorial Copy</p>
              </div>
            </Link>
            <Link
              href="https://youtu.be/KtPClqwOtoM?si=1MATI0ePJraVhHT2"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FiYoutube size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Product Video</p>
              </div>
            </Link>
            <Link
              href="https://occupational-hygiene.co.uk/preventing-occupational-lung-disease/"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <PiGraphDuotone size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Technical Article</p>
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/p/DTxqOj_DJ_7/"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FaInstagram size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Social Video</p>
              </div>
            </Link>
            <Link
              href="https://www.thestaffcanteen.com/post/aviko-launches-street-food-inspired-appetisers-range-1582537013#/"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FiBox size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Product PR & Imagery</p>
              </div>
            </Link>
            <Link
              href="https://issuu.com/modernlawmagazine/docs/mcm_23_email/24"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <GiNewspaper size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Work In Print</p>
              </div>
            </Link>
            <Link
              href="https://youtu.be/_1CKtT6QQuQ?si=vZX8Dg8AtTJMEcpj"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FiYoutube size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Product Video</p>
              </div>
            </Link>
            <Link
              href="https://www.cmswire.com/the-wire/terminusdb-launches-terminuscms/"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FaIndustry size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Industry Channels</p>
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/p/DTh3pCtilid/"
              target="_blank"
              className="transition-all duration-500 hover:opacity-50"
            >
              <div className="flex flex-col gap-3 items-center text-center p-4 rounded-xl bg-white">
                <FaInstagram size={72} className="text-teal-500" />
                <p className="font-bold uppercase text-xs">Social Video</p>
              </div>
            </Link>
          </div>
        </section>

        <section className={darkContainer} id="organic-seo">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <FaGoogle size={32} className="text-teal-500" />
                <h2 className={h2}>Organic SEO</h2>
              </div>
              <p>
                Sustainable organic growth through research, technical fixes,
                and content that earns visibility. I focus on long-term gains,
                not quick wins.
              </p>
              <Link href="/marketing-services/organic-seo" className={linkBlue}>
                Explore organic SEO
              </Link>
            </div>
            <Image
              src="/freelance-seo-consultant.svg"
              alt="Organic SEO services"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto"
              quality={80}
            />
          </article>
        </section>

        <section className={lightContainer} id="design-services">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <MdDraw size={32} className="text-teal-500" />
                <h2 className={`${h2} ${textGradient}`}>Design Services</h2>
              </div>
              <p>
                Visual assets that support marketing campaigns and product
                storytelling, from collateral to on-brand graphics.
              </p>
              <Link href="/marketing-services/design-services" className={linkBlue}>
                View design portfolio
              </Link>
            </div>
            <Image
              src="/marketing/terminusdb-popup-banner-design.webp"
              alt="Design portfolio example"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto"
              quality={80}
            />
          </article>
        </section>
        <section className={darkContainer} id="web-services">
          <article className="max-w-screen-lg w-full mx-auto flex flex-col gap-6 text-center">
            <h2 className={h2}>Explore Web Services</h2>
            <p>
              Pair your marketing strategy with high-performing web design or
              interactive widgets that drive engagement.
            </p>
          </article>
          <div className="max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link
              href="/web-design"
              className="rounded-xl bg-white text-gray-900 hover:scale-105 duration-500 p-6 transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                <h3 className={`text-xl font-semibold mb-4 ${textGradient}`}>Web Design</h3>
                <Image
                  src="/portfolio/bookwyrm-home.webp"
                  alt="Bookwyrm.ai website screenshot"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-xl"
                  quality={80}
                />
                <p>Websites built for clarity, performance, and growth.</p>
              </div>
            </Link>
            <Link
              href="/web-widgets"
              className="rounded-xl bg-white text-gray-900 hover:scale-105 duration-500 p-6 transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                <h3 className={`text-xl font-semibold mb-4 ${textGradient}`}>Web Widgets, Apps & Tools</h3>
                <Image
                  src="/portfolio/react-game.webp"
                  alt="React game screenshot"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-xl"
                  quality={80}
                />
                <p>Interactive tools that attract traffic and convert users.</p>
              </div>
            </Link>
          </div>
        </section>
        <Testimonials />

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
