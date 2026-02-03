import Navigation from "@/components/Navigation";
import Image from "next/image";
import Testimonials from "@/components/testimonials.js/Testimonials";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import LinkStyled from "@/components/LinkStyled";
import Packages from "@/components/Packages";
import Link from "next/link";
import { FiYoutube, FiBox, FiLayout } from "react-icons/fi";
import { PiGraphDuotone } from "react-icons/pi";
import { GiNewspaper } from "react-icons/gi";
import { FaIndustry, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";
import { h1, h2, herContainerAlt, heroP, linkBlue, mainContainer, twoColGridLightBkg } from "@/components/customStyles";
import ContactCta from "@/components/ContactCta";

export const metadata = {
  title: "Freelance Content Marketing Services",
  description:
    "I specialise in content marketing services and offer a reasonable and quality freelance service.",
  openGraph: {
    title: "Content Marketing Services",
    description:
      "I specialise in content marketing services and offer a reasonable and quality freelance service.",
    url: "https://ojsweb.co.uk/marketing-services/content-marketing",
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
        alt: "Content Marketing Services - Cheshire, Manchester, and Worldwide",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/marketing-services/content-marketing",
  },
};

export default function ContentMarketing() {
  const packageDescription =
    "One shoe does not fit all. A typical monthly freelance content marketing contract is detailed below. It is ideal for a regular flow of content to generate awareness and leads. Discounts are available for retainers.";
  const packageTitle = "Monthly Content Marketing Service";
  const packageFeatures = [
    "Keyword Research",
    "Topic Research",
    "800 word article / 2 minute video",
    "5 x Social Cards",
    "3 x Social Amplification",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Marketing Services",
    description:
      "Content marketing services to generate awareness and product interest through effective content marketing strategies",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "Content Marketing",
    url: "https://ojsweb.co.uk/marketing-services/content-marketing",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <DesktopNav />
      <main
        className={mainContainer}
      >
        <section
          className={herContainerAlt}
        >
          <div className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h1 className={h1}>
                  Content marketing services to engage, educate and entice
              </h1>
              <p className={heroP}>
                I provide content marketing services to raise awareness of your
                business and generate leads.
              </p>
              <p className={heroP}>
                As a content marketing freelancer, I can help build and manage your content strategy, or join your team as an extra pair of hands.
              </p>
              <Link href="/contact" className={linkBlue} >Discuss your needs</Link>
            </div>
            <Image
              src="/marketing/content-marketing-services.webp"
              alt="A screenshot of an article talking about data mesh"
              width={600}
              height={300}
              className="w-full h-auto rounded-xl"
              priority
              quality={100}
            />
          </div>
        </section>
        <div className="relative w-full">
          <ColumnsTwoFullH>
            <div className="flex flex-col gap-4">
              <h2 className={h2}>
                Being a Content Marketing Freelancer is{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  the dream job
                </span>
              </h2>
              <p className="text-lg leading-7">
                Being a content marketing freelancer is perfect for me as I enjoy writing. I have even published my own Zombie novel and an illustrated children&apos;s book. I was on the editorial board for Modern Claims Magazine and have
                written across varied topics for multinationals and tech
                start-ups.
              </p>
              <p className="text-lg leading-7 font-medium">
                I pride myself in creating engaging content, be it written,
                pictorial or video. I have lots of experience and am as adept at writing about the fast-food industry as I am technical topics such as knowledge graphs.
              </p>
              <p className="text-lg leading-7 font-medium">
                My content marketing services are targeted, researched and
                designed for purpose. The aim is to provide knowledge to people
                who are interested in your field and as a result become
                knowledgeable about you.
              </p>
              <p className="text-lg leading-7 font-medium">
                If you are interested, the best port-of-call is to arrange a
                chat to discuss your needs.
              </p>
            </div>
            <section className="flex flex-col gap-8">
              <h2 className="font-bold text-xl">Some of my work...</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="https://bookwyrm.ai/blog/pdf-to-json"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <PiGraphDuotone size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">
                      Technical Tutorial
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://namm.org.uk/hse-inspectors-focusing-on-memorial-masons/"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FaIndustry size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">
                      Industry Channels
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://paperbreak.ai/open-letter/"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FiLayout size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">
                      Advertorial Copy
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://youtu.be/KtPClqwOtoM?si=1MATI0ePJraVhHT2"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FiYoutube size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">Product Video</p>
                  </div>
                </Link>
                <Link
                  href="https://occupational-hygiene.co.uk/preventing-occupational-lung-disease/"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <PiGraphDuotone size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">
                      Technical Article
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/p/DTxqOj_DJ_7/"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FaInstagram size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">Social Video</p>
                  </div>
                </Link>
                <Link
                  href="https://www.thestaffcanteen.com/post/aviko-launches-street-food-inspired-appetisers-range-1582537013#/"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FiBox size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">
                      Product PR & Imagery
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://issuu.com/modernlawmagazine/docs/mcm_23_email/24"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <GiNewspaper size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">Work In Print</p>
                  </div>
                </Link>
                <Link
                  href="https://youtu.be/_1CKtT6QQuQ?si=vZX8Dg8AtTJMEcpj"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FiYoutube size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">Product Video</p>
                  </div>
                </Link>
                <Link
                  href="https://www.cmswire.com/the-wire/terminusdb-launches-terminuscms/"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FaIndustry size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">
                      Industry Channels
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/p/DTh3pCtilid/"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FaInstagram size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">Social Video</p>
                  </div>
                </Link>
              </div>
            </section>
          </ColumnsTwoFullH>
          <section className="bg-gradient-to-br from-teal-100 to-indigo-200 rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-20 mx-auto items-center mb-20 lg:max-w-screen-lg md:max-w-screen-sm mx-8 md:mx-auto z-20 relative">
            <div className="flex flex-col gap-8">
              <h2 className={h2}>
                Your Content{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Amplified
                </span>
              </h2>
              <p>
                Does content exist if it is never seen? Never mind the
                philosophical musing, you benefit by having more eyes on your
                content. Not just any eyes, people who are relevant to your
                business.
              </p>
              <p>
                My content marketing services involve keyword research and SEO optimised content, I will also find relevant groups and communities to amplify your business to potential customers.
              </p>
            </div>
            <div>
              <Image
                src="/marketing/online-amplification.webp"
                alt="Post on LinkedIn group gaining attention"
                width={600}
                height={600}
                quality={80}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </section>
        </div>
        <Packages
          description={packageDescription}
          title={packageTitle}
          features={packageFeatures}
          cost="£750"
        />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
