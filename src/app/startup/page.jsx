import ContactCta from "@/components/ContactCta";
import {
  darkContainer,
  gridFiveCol,
  h1,
  h2,
  herContainerAlt,
  heroP,
  lightContainer,
  mainContainer,
  textGradient,
  twoColGridLightBkg,
  twoSpanCol,
  linkBlue,
  internalLinkLight,
  internalLink,
} from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Startup Marketing Services | Strategy, Web, Execution",
  description:
    "Fast, full-stack startup marketing support covering strategy, web & digital, and execution to help you reach your market with speed and scale.",
  openGraph: {
    title: "Startup Marketing Services | Strategy, Web, Execution",
    description:
      "Fast, full-stack startup marketing support covering strategy, web & digital, and execution to help you reach your market with speed and scale.",
    url: "https://ojsweb.co.uk/startup",
    siteName: "Tech Startup Marketing Services",
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
        alt: "Startup marketing services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/startup",
  },
};

export default function StartupPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Startup Marketing Services",
    description:
      "Fast, full-stack startup marketing support covering strategy, web & digital, and execution to help you reach your market with speed and scale.",
    provider: {
      "@type": "ProfessionalService",
      name: "Tech Startup Marketing Services",
      url: "https://ojsweb.co.uk",
    },
    areaServed: [
      "Cheshire",
      "Manchester",
      "UK",
      "Worldwide",
      "Remote",
      "USA",
      "Europe",
    ],
    serviceType: "Startup Marketing Strategy, Web & Digital, and Execution",
    url: "https://ojsweb.co.uk/startup",
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
              <h1 className={h1}>Startup Marketing, Delivered Fast</h1>
              <p className={heroP}>
                I help tech startups move quickly with end-to-end marketing
                support. From strategy to web & digital to execution, you get one
                partner who can own the whole journey, reduce handoffs, and get
                you to market with speed and scale.
              </p>
              <LinkStyled src="/contact" linkText="Let's talk" />
            </div>
            <Image
              src="/tech-startup/scidonia-website.png"
              alt="Tech startup website example"
              quality={80}
              width={600}
              height={400}
              priority
              className="max-w-[500px] w-full ml-auto md:col-span-3 rounded-xl"
            />
          </article>
        </section>

        <section className={lightContainer} id="strategy">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-6">
              <h2 className={`${h2} ${textGradient}`}>Strategy & Leadership</h2>
              <p>
                Clear positioning, audience focus, and go-to-market planning so
                every action has a purpose. I help you define the narrative,
                identify your best channels, and create a strategy that your team
                can execute quickly.
              </p>
              <Link href="/startup/strategy" className={linkBlue}>
                Explore strategy services
              </Link>
            </div>
            <Image
              src="/tech-startup/buyer-persona.png"
              alt="Audience and buyer persona research"
              width={600}
              height={600}
              quality={80}
              className="w-full h-auto rounded-xl"
            />
          </article>
        </section>

        <section className={darkContainer} id="web-and-digital">
          <article className={`${gridFiveCol} md:gap-16`}>
            <div className={twoSpanCol}>
              <h2 className={h2}>Web & Digital</h2>
              <p>
                <Link href="/web-design" className={internalLinkLight}>High-performance websites</Link>, UX improvements, SEO foundations, and
                conversion-focused landing pages that make your marketing
                scalable. I build and optimise the digital foundation that
                supports growth.
              </p>
              <Link href="/startup/web-and-digital" className={linkBlue}>
                Explore web & digital
              </Link>
            </div>
            <Image
              src="/portfolio/bookwyrm-home.webp"
              alt="Web and digital consulting example"
              width={800}
              height={600}
              quality={80}
              className="w-full h-auto rounded-xl md:col-span-3"
            />
          </article>
        </section>

        <section className={lightContainer} id="execution">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-6">
              <h2 className={`${h2} ${textGradient}`}>Execution & Delivery</h2>
              <p>
                Campaign planning, <Link href="/marketing-services/content-marketing" className={internalLink}>content</Link>, email, social, and brand rollout.
                I&apos;ll deliver the work at pace, so you can launch, learn, and
                iterate without slowing down.
              </p>
              <Link href="/startup/execution" className={linkBlue}>
                Explore execution services
              </Link>
            </div>
            <Image
              src="/tech-startup/campaign-planning.png"
              alt="Campaign planning and execution"
              width={600}
              height={600}
              quality={80}
              className="w-full h-auto rounded-xl"
            />
          </article>
        </section>

        <section className={darkContainer} id="speed">
          <article className="max-w-screen-md w-full mx-auto flex flex-col gap-6 text-left py-16">
            <h2 className={h2}>Move Faster, Scale Smarter</h2>
            <p>
              Startups win when they move quickly. I work across strategy,
              channels, content, and delivery so you don&apos;t lose momentum to
              handoffs or siloed teams. That means faster launches, tighter
              feedback loops, and marketing that keeps pace with your product.
            </p>
            <p>
              If you need one person who can take ownership and deliver across
              the stack, I&apos;ll help you ship the right message, to the right
              audience, at the right time.
            </p>
          </article>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
