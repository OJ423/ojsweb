import ContactCta from "@/components/ContactCta";
import {
  darkContainer,
  flexRowDarkBkg,
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
} from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import PageSectionNav from "@/components/pageSectionNav";
import Image from "next/image";

export const metadata = {
  title: "Execution & Delivery - Tech Startup Marketing Services",
  description:
    "Tech startup marketing execution. Get expert help with campaign planning, content, email, social media, paid ads, and brand rollout for impactful, results-driven delivery.",
  openGraph: {
    title: "Full-stack contractor or hire.",
    description:
      "Tech startup marketing execution. Get expert help with campaign planning, content, email, social media, paid ads, and brand rollout for impactful, results-driven delivery.",
    url: "https://ojsweb.co.uk/web-apps",
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
        alt: "Execution & Delivery - Tech Startup Marketing Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/startup/execution",
  },
};


export default function ExecutionPage() {
  const sections = ["planning", "content", "email", "social", "brand"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tech Startup Marketing Execution & Delivery",
    description:
      "Tech startup marketing execution. Get expert help with campaign planning, content, email, social media, paid ads, and brand rollout for impactful, results-driven delivery.",
    provider: {
      "@type": "ProfessionalService",
      name: "Tech Startup Marketing Services",
      url: "https://ojsweb.co.uk",
    },
    areaServed: ["Cheshire", "Manchester", "UK", "Worldwide", "Remote", "USA", "Europe"],
    serviceType: "Tech Startup Marketing Execution & Delivery",
    url: "https://ojsweb.co.uk/startup/execution",
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
                Let&apos;s get your marketing machine firing
              </h1>
              <p className={heroP}>
                You&apos;ve defined your audience and crafted your messaging.
                Now, it&apos;s time for action. My execution and delivery
                services are designed to transform your marketing strategy into
                tangible results.
              </p>
              <LinkStyled src="/contact" linkText="Let's talk" />
            </div>
            <Image
              src="/tech-startup/execution-and-delivery-service.png"
              alt="Graphic design of marketing related screens, charts and icons depicting execution and delivery services"
              quality={80}
              width={800}
              height={800}
              priority
              className="w-full h-auto md:col-span-3 hover:scale-110 hover:-rotate-3 transition-all duration-500 ease-in-out"
            />
          </article>
        </section>
        <section className={lightContainer} id="planning">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h2 className={`${h2} ${textGradient}`}>Campaign Planning</h2>
              <p>
                A great idea needs a great launch. I&apos;ll develop detailed
                campaign plans that outline objectives, target audiences, key
                messages, channel strategies, and measurable KPIs. From product
                launches to feature announcements, we&apos;ll create a roadmap
                for success that minimises risk and maximises impact.
              </p>
            </div>
            <Image
              src="/tech-startup/campaign-planning.png"
              alt="Tech start up marketing service includes campaign planning. Picture of a mocked up Gantt chart"
              width={600}
              height={600}
              quality={80}
              className="w-full h-auto"
            />
          </article>
        </section>
        <section className={darkContainer} id="content">
          <article className={flexRowDarkBkg}>
            <div className="flex flex-col gap-8">
              <h2 className={`${h2}`}>Content Marketing</h2>
              <p>
                Your expertise deserves to be shared. I&apos;ll create a robust
                content marketing strategy that positions your tech startup as a
                thought leader. This includes everything from engaging blog
                posts and insightful whitepapers to compelling case studies and
                vibrant video scripts, all designed to attract, educate, and
                convert your ideal customers.
              </p>
            </div>
            <Image
              src="/marketing/content-marketing-services.webp"
              alt="A screenshot of an article talking about data mesh"
              width={600}
              height={600}
              className="w-full h-auto rounded-xl"
              quality={80}
            />
          </article>
        </section>
        <section className={lightContainer} id="email">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h2 className={`${h2} ${textGradient}`}>Email & Automation</h2>
              <p>
                Nurture leads and build lasting relationships with powerful
                email marketing. I&apos;ll design and implement automated email
                sequences that guide your audience through the customer journey,
                from initial interest to loyal advocacy. This means less manual
                work for you and more consistent engagement with your users.
              </p>
            </div>
            <Image 
              src="/tech-startup/email-and-automation.png"
              alt="Email marketing and automation services for tech startups, a picture of an email campaign"
              width={600}
              height={600}
              quality={80}
              className="w-full h-auto"
            />
          </article>
        </section>
        <section className={darkContainer} id="social">
          <article className={`${flexRowDarkBkg} md:py-20`}>
            <div className="flex flex-col gap-8">
              <h2 className={h2}>Social & Paid Media</h2>
              <p>
                Reach your audience where they are. I&apos;ll manage your social
                media presence to build community and drive organic engagement.
                Complementing this, I&apos;ll strategise and execute targeted
                paid media campaigns across relevant platforms to rapidly
                increase visibility, generate qualified leads, and accelerate
                your growth.
              </p>
            </div>
            <Image
              src="/marketing/online-amplification.webp"
              alt="Post on LinkedIn group gaining attention"
              width={600}
              height={600}
              quality={80}
              className="rounded-xl w-full h-auto"
            />
          </article>
        </section>
        <section className={lightContainer} id="brand">
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8">
              <h2 className={`${h2} ${textGradient}`}>
                Brand + Visual Rollout
              </h2>
              <p>
                Consistency is key to a strong brand. I&apos;ll ensure your
                brand identity comes to life across all marketing materials and
                channels. From website imagery and ad creatives to social media
                graphics, I&apos;ll manage the visual rollout to ensure every
                touchpoint reinforces your brand&apos;s unique personality and
                professionalism.
              </p>
            </div>
            <Image 
              src="/tech-startup/brand-vision.jpg"
              alt="Brand vision for a tech startup, a picture of VectorLink's logo"
              width={600}
              height={600}
              quality={80}
              className={"w-full h-auto rounded-xl"}
            />
          </article>
        </section>
        <ContactCta />
        <PageSectionNav sections={sections} />
      </main>
      <Footer />
    </>
  );
}
