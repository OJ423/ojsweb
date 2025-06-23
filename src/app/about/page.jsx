import { h1, herContainerAlt, mainContainer, twoColGridLightBkg } from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Marketing and Web Design Services in Cheshire and Manchester",
  description:
    "I'm Oliver and I am a freelance web developer and marketing professional based in Cheshire and Manchester and am available for hire.",
  openGraph: {
    title: "Marketing and Web Design Services in Cheshire and Manchester",
    description:
      "I'm Oliver and I am a freelance web developer and marketing professional based in Cheshire and Manchester and am available for hire.",
    url: "https://ojsweb.co.uk/about/",
    siteName: "ojsweb - Marketing and Web Design Excellence",
    images: [
      {
        url: "https://ojsweb.co.uk/ojsweb-og-image.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://ojsweb..co.uk/ojsweb-og-image-lg.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "OJSWEB web design and marketing services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://ojsweb.co.uk"),
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <>
      <DesktopNav />
      <Navigation />
      <main className={mainContainer}>
        <section
          className={herContainerAlt}
        >
          <div className={twoColGridLightBkg}>
            <Image
              src="/hey-oliver-marketing-consultant-in-cheshire.webp"
              alt="A graphic design saying hey - basically a placeholder so I can write marketing consultant in Cheshire. I added this image for SEO reasons rather than anything meaningful to the content."
              width={300}
              height={300}
              className="mx-auto"
            />
            <div>
              <h1 className={h1}>
                Hello, I&apos;m Oliver, a Marketing & Web Design Consultant in Cheshire, UK
              </h1>

            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-teal-500 to-indigo-600 w-full px-8 py-40 text-white">
          <div className="flex flex-col gap-4 max-w-screen-sm mx-auto leading-8">
            <p>
              Hi, I&apos;m Oliver, a marketing and web consultant based right here in Cheshire. I work with tech startups across the globe, helping them navigate the unique challenges of a fast-paced industry. Closer to home, I also partner with general businesses throughout Cheshire and Manchester, including areas like Wilmslow and Knutsford, providing the same high-caliber marketing and web expertise.
            </p>
            <p>
              With years of hands-on experience in areas like <Link className="underline" href={"/marketing-services/content-marketing"}>content marketing</Link>, <Link className="underline" href={"/marketing-services/organic-seo"}>SEO</Link>, <Link className="underline" href={"/marketing-services/design-services"}>graphic design</Link>, and web development (leveraging JavaScript, TypeScript, WordPress, HTML & CSS), my mission is simple: to help businesses like yours achieve significant growth through effective and tailored digital strategies.
            </p>
            <p>
              {`I pride myself on my personal approach, working closely with clients in Knutsford, Wilmslow, and the surrounding areas to understand their unique needs and deliver results. If you're looking for a Manchester marketing freelancer who can provide creative and strategic services to boost your online presence, you're in the right place.`}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-16 items-center max-w-screen-md mx-auto py-16">
            <Image
              alt="From Despair to Where book cover featuring a silhouette of a hand with zombies lurking in the background"
              src="/graphic-design/from-despair-to-where.webp"
              width={300}
              height={300}
              className="h-auto mx-auto"
            />
            <Image
              alt="From Despair to Where book cover featuring a silhouette of a hand with zombies lurking in the background"
              src="/graphic-design/childrens-book-illustration.webp"
              width={400}
              height={400}
              className="h-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4 max-w-screen-sm mx-auto leading-8">
            <p>
              Aside from my work, I&apos;ve written two books - a zombie
              thriller titled From{" "}
              <Link
                className="transition-all duration-500 font-bold text-teal-500 hover:text-gray-300"
                href="https://www.amazon.co.uk/Despair-Where-Oliver-Smith/dp/1527262065"
              >
                Despair to Where
              </Link>{" "}
              and a children’s book called{" "}
              <Link
                className="transition-all duration-500 font-bold text-teal-500 hover:text-gray-300"
                href="https://the-tiniest-of-trolls.onrender.com/"
              >
                The Tiniest of Trolls
              </Link>
              , which I also illustrated. I live near Knutsford with my two
              children and enjoy cooking, reading, and traveling when I’m not
              busy creating digital solutions for my clients.
            </p>
            <p>
              {`Let’s work together to elevate your business with impactful marketing and web design. If you’re based in Cheshire, Manchester or anywhere else (if you're happy for me to work remotely) and need a dedicated contractor, please do get in touch.`}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
