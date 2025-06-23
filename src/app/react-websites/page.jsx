import Navigation from "@/components/Navigation";
import Image from "next/image";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Portfolio from "@/components/Portfolio";
import CallToAction from "@/components/CallToAction";
import LinkStyled from "@/components/LinkStyled";
import TechLogos from "@/components/TechLogos";
import Costs from "@/components/Costs";
import { images } from "@/components/constants";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";
import Testimonials from "@/components/testimonials.js/Testimonials";
import { gridFiveCol, h1, h2, herContainerAlt, heroP, linkBlue, mainContainer, twoSpanCol } from "@/components/customStyles";
import Link from "next/link";

export const metadata = {
  title: "Freelance React Developer",
  description:
    "I am a freelance React developer. If you need a high performance website bespoke to you. Get in touch.",
  openGraph: {
    title: "Freelance React Developer",
    description:
      "I am a freelance React developer. If you need a high performance website bespoke to you. Get in touch.",
    url: "https://ojsweb.co.uk/react-websites",
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
        alt: "Freelance React Developer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/react-websites",
  },
};

export default function ReactWebsites() {
  const costDescription =
    "The cost of your React site depends on your needs. How many pages, what level of customisation and many other factors. A site like this for example would cost in the region of £1,000.";
  const codeString = `useEffect(() => {
    if (user && selectedCommunity) {
      const fetchData = async() => {
        try {
          const data = await getUsersCommunityPosts(+user.user_id, selectedCommunity.community_id, filter)
          setUserPosts(data.posts)

        } catch(error:any) {
          console.log(error)
        }
      }
      fetchData()
    }
  },[user, selectedCommunity, filter])`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "React Web Development",
    description:
      "React front-end development to create bespoke websites and apps.",
    provider: {
      "@type": "ProfessionalService",
      name: "OJSWEB - Oliver Smith Freelance Marketing and Web Design",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK"],
    serviceType: "React Frontend Developer",
    url: "https://ojsweb.co.uk/react-websites",
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
          <div className={`${gridFiveCol} mb-8`}>
            <div className={twoSpanCol}>
              <h1 className={h1}>
                  Lightning Quick React Websites To Showcase Your Business
              </h1>
              <p className={heroP}>
                Beautiful and highly performant websites and blogs crafted to
                your spec.
              </p>
              <LinkStyled src="/contact" linkText="Arrange a chat" />
            </div>
            <Image
              src="/tech-startup/scidonia-website.png"
              alt="Screenshot of an app I built"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl md:col-span-3"
              priority
              quality={80}
            />
          </div>
          <TechLogos />
        </section>
        <Testimonials />
        <ColumnsTwoFullH>
          <div className="flex flex-col gap-4">
            <h2 className={h2}>
              A website for{" "}
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                the best of you
              </span>
            </h2>
            <p>
              With a background spanning tech start-ups and multi-nationals, I
              understand the need to tailor your website around your specifics.
            </p>
            <p>
              React frameworks enable tailor-made functionality. Whether that is
              interactive tools or custom layouts that template sites cannot
              handle, I can craft a website to showcase exactly what your
              customers need to see.
            </p>
            <Link href="/contact" className={linkBlue} >Let&apos;s chat about your project</Link>
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
        <section className="bg-gradient-to-br from-teal-100 to-indigo-200 md:min-h-screen flex flex-col gap-20 mx-auto w-full justify-center items-center py-20 px-4">
          <h2 className={h2}>{`Here's some of my work...`}</h2>
          <Portfolio images={images} />
        </section>
        <Costs description={costDescription} cost="£1,000" />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
