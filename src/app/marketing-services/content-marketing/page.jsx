import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/PeterWilliams";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import LinkStyled from "@/components/LinkStyled";
import Packages from "@/components/Packages";
import Link from "next/link";
import { FiYoutube, FiBox, FiLayout } from "react-icons/fi";
import { PiGraphDuotone } from "react-icons/pi";
import { GiNewspaper } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Freelance Content Marketing Services",
  description: "I specialise in content marketing services and offer a reasonable and quality freelance service.",
  openGraph: {
    title: "Content Marketing Services",
    description: "I specialise in content marketing services and offer a reasonable and quality freelance service.",
    url: 'https://ojsweb.co.uk/marketing-services/content-marketing',
    siteName: 'ojsweb - Marketing and Web Design Excellence',
    images: [
      {
        url: 'https://ojsweb.co.uk/ojsweb-og-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://ojsweb.co.uk/ojsweb-og-image-lg.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Content Marketing Services - Cheshire, Manchester, and Worldwide',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  metadataBase: new URL('https://ojsweb.co.uk'),
  alternates: {
    canonical: '/marketing-services/content-marketing'
  }
};

export default function ContentMarketing() {

  const packageDescription =
    "One shoe does not fit all. The monthly content service details a typical service. Ideal for a regular flow of content to generate awareness and leads. Discounts available for retainers.";
  const packageTitle = "Monthly Content Service"
  const packageFeatures = ["Keyword Research", "Topic Research", "800 word article / 2 minute video", "5 x Social Cards", "3 x Social Amplification"]


  return (
    <>
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className={`flex min-h-min flex-col w-full items-center justify-center`}>
          <section className={`min-h-screen flex flex-col gap-20 mx-auto px-[8%] md:px-[20%] xl:px-[8%] justify-center items-center bg-[url("/full-bloom.webp")] py-20`}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-center items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                  <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                    Interesting and Engaging Content
                  </span>{" "}
                  To Get In Front of Buyers
                </h1>
                <p className="text-lg font-medium">
                  I plan and manage content strategies to raise awareness of your business and generate leads among your target audience.
                </p>
                <LinkStyled src="/contact" linkText="Arrange a chat" />
              </div>
              <Image
                src="/marketing/content-marketing-services.webp"
                alt="A screenshot of an article talking about data mesh"
                width={600}
                height={300}
                className="md:w-5/6 h-auto rounded-xl hidden xl:block"
                priority
                quality={100}
              />
            </div>
          </section>
          <ColumnsTwoFullH>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold w-full text-gray-800">
                Content is{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  King/Queen
                </span>
              </h2>
              <p className="text-lg leading-7">
                I enjoy writing and have even published my own Zombie novel. I
                was on the editorial board for Modern Claims Magazine and have
                written across varied topics for  multinationals and tech start-ups.
              </p>
              <p className="text-lg leading-7 font-medium">
                I pride myself in creating engaging content, be it written,
                pictorial or video. I have experience across many sectors and am
                as adept at writing about the fast-food industry as I am
                technical topics such as knowledge graphs.
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
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                  href="https://vectorlink.ai"
                  target="_blank"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <FiLayout size={96} className="text-teal-500" />
                    <p className="font-bold uppercase text-xs">Optimized Web Copy</p>
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
                  href="https://terminusdb.com/blog/knowledge-graph-management/"
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
              </div>
            </section>
          </ColumnsTwoFullH>
          <section className="bg-teal-100 rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-20 w-11/12 mx-auto md:w-5/6 items-center mb-20">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold w-full text-gray-800">
                Your Content{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Amplified
                </span>
              </h2>
              <p className="text-lg leading-7 font-medium">
                Does content exist if it is never seen? Never mind the
                philosophical musing, you benefit by having more eyes on
                your content. Not just any eyes, people who are relevant to
                your business.
              </p>
              <p className="text-lg leading-7 font-medium">
                I always research keywords and optimise content for SEO, I will also find relevant groups and communities to amplify your business to potential customers.
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
          <Packages description={packageDescription} title={packageTitle} features={packageFeatures} cost="£800" />
          <PeterWilliams />
          <section className="my-20">
            <h2 className="text-2xl sm:text-4xl font-bold pb-6 mb-6 border-b-2 w-fit bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
              Get in touch to begin...
            </h2>
            <p className="mb-16">Send me a message to arrange a chat.</p>
            <LinkStyled src="/contact" linkText="Arrange a chat" />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
