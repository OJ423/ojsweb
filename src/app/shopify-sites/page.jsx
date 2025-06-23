import Navigation from "@/components/Navigation";
import Image from "next/image";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Portfolio from "@/components/Portfolio";
import CallToAction from "@/components/CallToAction";
import LinkStyled from "@/components/LinkStyled";
import Costs from "@/components/Costs";
import { images } from "@/components/constants";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";
import Testimonials from "@/components/testimonials.js/Testimonials";
import { h1, h2, herContainerAlt, heroP, linkBlue, mainContainer, twoColGridLightBkg } from "@/components/customStyles";
import Link from "next/link";

export const metadata = {
  title: "Shopify Freelancer.",
  description:
    "Need help setting up or updating your Shopify site? I can help with my Shopify Freelance services.",
  openGraph: {
    title: "Shopify Freelancer.",
    description:
      "Need help setting up or updating your Shopify site? I can help with my Shopify Freelance services.",
    url: "https://ojsweb.co.uk/shopify-sites",
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
        alt: "Shopify Freelance Services.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/shopify-sites",
  },
};

export default function ShopifySites() {
  const costDescription =
    "The cost of your Shopify store depends on various factors. How many products, the level of customization, and additional features all influence the final price. A basic store setup costs around £1,200.";
  const codeString = `{%- unless shop.enabled_payment_types == empty -%}
  <span class="visuallyhidden">Supported payment methods</span>

  <ul>
    {%- for type in shop.enabled_payment_types -%}
      <li>
        {{ type | payment_type_svg_tag: class: 'icon icon--full-color' }}
      </li>
    {%- endfor -%}
  </ul>
{%- endunless -%}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shopify Development",
    description:
      "Shopify development services to help build and maintain Shopify stores.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "Feelance Shopify Developer",
    url: "https://ojsweb.co.uk/shopify-sites",
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
                Shopify Stores that Drive Sales
              </h1>
              <p className={heroP}>
                Beautiful and fully functional Shopify stores designed to
                elevate your brand.
              </p>
              <LinkStyled src="/contact" linkText="Arrange a chat" />
            </div>
            <Image
              src="/shopify-developer.webp"
              alt="Shopify Web Design"
              width={600}
              height={300}
              className="w-full h-auto rounded-xl"
              priority
              quality={100}
            />
          </div>
        </section>
        <Testimonials />
        <ColumnsTwoFullH>
          <div className="flex flex-col gap-4">
            <h2 className={h2}>
              A Store for{" "}
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Every Need
              </span>
            </h2>
            <p>
              With extensive experience working with both emerging brands and
              established businesses, I know how to create a Shopify store that
              meets your unique requirements.
            </p>
            <p>
              Shopify&apos;s robust platform allows for a wide range of
              customisations. From unique themes to advanced integrations, I can
              build a store that not only looks great but also provides an
              exceptional shopping experience for your customers.
            </p>
            <Link href="/contact" className={linkBlue}>Let&apos;s chat</Link>
          </div>
          <div>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              wrapLongLines={true}
              className="rounded-xl"
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </ColumnsTwoFullH>
        <section className="bg-gradient-to-br from-teal-100 to-indigo-200 flex flex-col gap-16 mx-auto w-full justify-center items-center z-50 py-20 px-8">
          <h2 className={h2}>{`Here's some of my work...`}</h2>
          <Portfolio images={images} />
        </section>
        <Costs description={costDescription} cost="£1,200" />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
