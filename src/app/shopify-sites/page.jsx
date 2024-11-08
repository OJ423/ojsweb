import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/PeterWilliams";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Portfolio from "@/components/Portfolio";
import CallToAction from "@/components/CallToAction";
import LinkStyled from "@/components/LinkStyled";
import Costs from "@/components/Costs";
import { images } from "@/components/constants";
import Footer from "@/components/Footer";

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
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min flex-col w-full items-center justify-center">
          <section
            className={`min-h-screen flex flex-col gap-20 px-[8%] sm:px-[15%] md:px-[20%] lg:px-[8%] justify-center items-center bg-[url("/full-bloom.webp")]`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                  Shopify Stores that{" "}
                  <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                    Drive Sales
                  </span>
                </h1>
                <p className="text-lg font-medium">
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
                className="hidden lg:block mx-auto md:w-full h-auto rounded-xl"
                priority
                quality={100}
              />
            </div>
          </section>
          <PeterWilliams />
          <ColumnsTwoFullH>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold w-full text-gray-800">
                A Store for{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Every Need
                </span>
              </h2>
              <p className="text-lg leading-7">
                With extensive experience working with both emerging brands and
                established businesses, I know how to create a Shopify store
                that meets your unique requirements.
              </p>
              <p className="text-lg leading-7 font-medium">
                Shopify&apos;s robust platform allows for a wide range of
                customisations. From unique themes to advanced integrations, I
                can build a store that not only looks great but also provides an
                exceptional shopping experience for your customers.
              </p>
              <LinkStyled src="/contact" linkText="Talk your needs" />
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
          <section className="bg-gradient-to-br from-teal-100 to-cyan-200 md:min-h-screen flex flex-col gap-20 mx-auto w-full justify-center items-center z-50 py-20 px-4">
            <h2 className="text-2xl md:text-3xl font-bold">{`Here's some of my work...`}</h2>
            <Portfolio images={images} />
          </section>
          <Costs description={costDescription} cost="£1,200" />
          <CallToAction />
          <Footer />
        </main>
      </div>
    </>
  );
}
