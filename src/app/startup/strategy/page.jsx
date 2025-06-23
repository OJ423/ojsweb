import { darkContainer, flexRowDarkBkg, h1, h2, heroContainer, heroP, lightContainer, textGradient, twoColGridLightBkg } from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { BsIncognito } from "react-icons/bs";
import { testimonials } from "@/components/constants";
import PageSectionNav from "@/components/pageSectionNav";
import ContactCta from "@/components/ContactCta";

export const metadata = {
  title: "Tech Startup Marketing Strategy & Leadership Services",
  description:
    "Strategic marketing leadership for tech startups. Specialising in audience development, competitor analysis, and strong messaging & positioning to drive your success.",
  openGraph: {
    title: "Tech Startup Marketing Strategy & Leadership Services",
    description:
      "Strategic marketing leadership for tech startups. Specialising in audience development, competitor analysis, and strong messaging & positioning to drive your success.",
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
        alt: "Tech Startup Marketing Strategy & Leadership Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/startup/strategy",
  },
};


export default function MarketingStrategy() {
  const gavinQuote = testimonials[0]
  const sections = [
    "audience", "competitor", "messaging", "market", "cmo"
  ]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tech Startup Marketing Strategy & Leadership Services",
    description:
      "Strategic marketing leadership for tech startups. Specialising in audience development, competitor analysis, and strong messaging & positioning to drive your success.",
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
    serviceType: "Tech Startup Marketing Strategy & Leadership Services",
    url: "https://ojsweb.co.uk/startup/strategy",
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
        <section className={heroContainer}>
          <article className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-end justify-between mx-auto gap-8 text-white">
            <div className="flex flex-col gap-8 m-auto item lg:col-span-2 pb-20">
              <h1 className={h1}>
                Let Me Help You Create Your Tech Startup Marketing Strategy
              </h1>
              <p className={heroP}>
                Defining your tech startup marketing strategy can be difficult when you&apos;re spinning a hundred plates, ironing out bugs, and dealing with customer onboarding. I&apos;m you&apos;re flexible resource to use to get your marketing machine rolling.
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                <LinkStyled src="/contact" linkText="Let's talk" />
              </div>
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
        <section id="audience" className={lightContainer}>
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className={`${textGradient} ${h2}`}>Audience Development</h2>
              </div>
              <p>
                When you develop a product or service, you have an audience in
                mind. It is probable that you tech startup solution can solve
                problems for many people from different backgrounds and
                industries. Success is hard when you try to reach too many
                people as your resources and messaging gets stretched and
                confusing.
              </p>
              <p>
                I do the things that you want to do, but dont have’t time. I
                make your life easier and chances of success far greater by
                defining your niches and understanding their problems. My
                approach encompasses.
              </p>
              <ul className="list-disc pl-8">
                <li>
                  Secondary research
                </li>
                <li>
                  Talking to potential customers
                </li>
                <li>
                  User story generation
                </li>
                <li>
                  Buyer personas creation
                </li>
              </ul>
              <p>
                The goal, to identify pain points, audience language and socio-economic information to use across your tech startup marketing strategy.
              </p>
            </div>
            <div className="flex flex-col gap-8 relative group">
              <Image
                src="/tech-startup/buyer-persona.png"
                alt="Helping business growth"
                width={600}
                height={600}
                className="w-full h-auto aspect-square rounded-xl"
                priority
                quality={100}
              />
            </div>
          </article>
        </section>
        <section id="competitor" className={darkContainer}>
          <article className={flexRowDarkBkg}>
            <div className="flex flex-col gap-8 md:py-20">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Competitor Analysis
              </h2>
              <p>
                Whether you want me to trial competitor products and report on functionality or UX or to assess their marketing strategies and performance, I am adept at snooping and researching.
              </p>
              <p>
                Learning from competitors enables you to avoid pitfalls, understand what resonates with customers, provide you with an idea of gaps in your product roadmap, and where you excel over them.
              </p>
            </div>
            <div>
              <BsIncognito size={196} />
            </div>

          </article>
        </section>
        <section id="messaging" className={lightContainer} >
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-8 md:py-20">
              <h2 className={`${h2} ${textGradient}`}>
                Messaging & positioning
              </h2>
              <p>How you talk about your product is important. I&apos;ll help you define a compelling and consistent message that communicates your value proposition to your target audience. I&apos;ll refine your unique selling points, establish your brand voice, and strategically position your tech startup in the market to stand out from the competition and resonate deeply with potential customers.</p>
            </div>
            <Image 
              src="/portfolio/terminusdb-wordpress-website.webp"
              alt="TerminusDB WordPress website with content"
              width={800}
              height={600}
              className="w-full h-auto aspect-video rounded-xl mt-8"
              quality={80}
            />
          </article>
        </section>
        <section id="market" className={darkContainer}>
          <article className={flexRowDarkBkg}>
            <div className="flex flex-col gap-8 text-white">
              <h2 className={h2}>Go-to-market strategy</h2>
              <p>Ready to launch? I&apos;ll craft a comprehensive go-to-market strategy that ensures your tech startup makes a powerful entry into the market. This includes everything from defining your unique value proposition to selecting the most effective channels for reaching your target audience. We&apos;ll outline the steps needed to generate early traction and build a strong foundation for sustainable growth.</p>
            </div>
            <Image 
              src="/tech-startup/go-to-market.jpg"
              alt="teaser image of a product launch"
              width={600}
              height={600}
              quality={80}
              className="w-full max-w-[500px] h-auto aspect-square rounded-xl transition-all duration-500 hover:scale-110 hover:rotate-3"            
            />
          </article>
        </section>
        <section id="cmo" className={lightContainer}>
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-4">
              <h2 className={`${h2} ${textGradient}`}>Fractional CMO support</h2>
              <p>Need high-level marketing expertise without the full-time commitment? My fractional CMO support offers strategic guidance and hands-on execution to drive your marketing initiatives forward. From overseeing campaigns to optimising your marketing funnels, I act as an extension of your team, providing the leadership and experience necessary to scale your marketing efforts efficiently and effectively.</p>
            </div>
            <div className="flex flex-col group p-8 rounded-xl gap-8 bg-gradient-to-br from-teal-500 to-indigo-600 text-white">
              <p className="text-xl font-light">{gavinQuote.quote}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={gavinQuote.img}
                  alt={gavinQuote.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-bold">{gavinQuote.name}</span>
                  <span className="text-sm">{gavinQuote.title}</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <ContactCta />
        <PageSectionNav sections={sections} />
      </main>
      <Footer />
    </>
  );
}
