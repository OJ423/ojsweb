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
      <main className="flex min-h-min flex-col mx-auto w-full text-white font-medium text-lg">
        <section
          className={`flex flex-col gap-20 mx-auto justify-center items-center bg-[url("/full-bloom.webp")] py-40 px-8 xl:px-0 w-full`}
        >
          <div className="grid grid-cols-1 mx-auto gap-8 justify-center items-center max-w-screen-sm sm:w-4/5 md:w-full">
            <Image
              src="/hey-oliver-marketing-consultant-in-cheshire.webp"
              alt="A graphic design saying hey - basically a placeholder so I can write marketing consultant in Cheshire. I added this image for SEO reasons rather than anything meaningful to the content."
              width={300}
              height={300}
              className="mx-auto"
            />
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                About me:
              </span>{" "}
              Oliver, Freelance Marketing & Web Design Expert in Cheshire
            </h1>
          </div>
        </section>
        <section className="bg-gradient-to-br from-teal-500 to-indigo-600 w-full px-8 py-40">
          <div className="flex flex-col gap-4 max-w-screen-sm mx-auto leading-8">
            <p className="text-lg">
              Hi, I’m Oliver, a marketing freelancer based in Cheshire,
              specialising in local marketing and web design for businesses in
              Cheshire and Manchester, including Wilmslow and Knutsford. With
              years of experience in{" "}
              <Link href="/marketing-services/content-marketing">
                content marketing
              </Link>
              , <Link href="/marketing-services/organic-seo">SEO</Link>,{" "}
              <Link href="/marketing-services/design-services">
                graphic design
              </Link>
              , and web development (using JavaScript, TypeScript,{" "}
              <Link href="/wordpress-websites">WordPress</Link>, HTML & CSS), I
              want to help businesses grow through effective and tailored
              digital strategies.
            </p>
            <p className="text-lg">
              {`As a freelance web designer in Cheshire, I work with small to medium-sized businesses, delivering user-friendly, visually appealing websites that not only look great but also perform well on search engines. Whether you're a new business or looking to refresh your online presence, I can help you achieve your goals.`}
            </p>
            <p className="text-lg">
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
            <p className="text-lg">
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
            <p className="text-lg">
              {`Let’s work together to elevate your business with impactful marketing and web design. If you’re based in Cheshire, Manchester or anywhere else (if you're happy for me to work remotely) and need a dedicated freelancer, please do get in touch.`}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
