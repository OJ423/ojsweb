import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Marketing and Web Design Services in Cheshire and Manchester",
  description: "I'm Oliver and I am a freelance web developer and marketing professional based in Cheshire and Manchester and am available for hire.",
  openGraph: {
    title: "Marketing and Web Design Services in Cheshire and Manchester",
    description: "I'm Oliver and I am a freelance web developer and marketing professional based in Cheshire and Manchester and am available for hire.",
    url: 'https://ojsweb.co.uk/about/',
    siteName: 'ojsweb - Marketing and Web Design Excellence',
    images: [
      {
        url: 'https://ojsweb.co.uk/ojsweb-og-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://ojsweb..co.uk/ojsweb-og-image-lg.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'OJSWEB web design and marketing services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  metadataBase: new URL('https://ojsweb.co.uk'),
  alternates: {
    canonical: '/about'
  }
};

export default function About() {
  return (
    <>
      <div className={`flex min-h-screen items-center bg-[url("/full-bloom.webp")]`}>
        <Navigation />
        <main className="flex min-h-min flex-col mx-auto gap-8 w-full items-center justify-center px-4 md:px-8 lg:px-20 xl:px-[15%] pb-20">
          <div className="min-h-screen flex items-center p-0">
            <Image 
              src="/hey-oliver-marketing-consultant-in-cheshire.png"
              alt="A graphic design saying hey - basically a placeholder so I can write marketing consultant in Cheshire. I added this image for SEO reasons rather than anything meaningful to the content."
              width={1000}
              height={500}
            />
          </div>
          <div>
            
          </div>
            <h1 className="text-3xl font-bold text-gray-800">
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                About me:
              </span>{" "}
              Oliver, Freelance Marketing & Web Design Expert in Cheshire
            </h1>
            
            <p className="text-lg">
            Hi, I’m Oliver, a marketing freelancer based in Cheshire, specialising in local marketing and web design for businesses in Cheshire and Manchester, including Wilmslow and Knutsford. With years of experience in <Link href="/marketing-services/content-marketing">content marketing</Link>, <Link href="/marketing-services/organic-seo">SEO</Link>, <Link href="/marketing-services/design-services">graphic design</Link>, and web development (using JavaScript, TypeScript, <Link href="/wordpress-websites">WordPress</Link>, HTML & CSS), I want to help businesses grow through effective and tailored digital strategies.
            </p>
            <p className="text-lg">
            {`As a freelance web designer in Cheshire, I work with small to medium-sized businesses, delivering user-friendly, visually appealing websites that not only look great but also perform well on search engines. Whether you're a new business or looking to refresh your online presence, I can help you achieve your goals.`}
            </p>
            <p className="text-lg">
            {`I pride myself on my personal approach, working closely with clients in Knutsford, Wilmslow, and the surrounding areas to understand their unique needs and deliver results. If you're looking for a Manchester marketing freelancer who can provide creative and strategic services to boost your online presence, you're in the right place.`}
            </p>
            <div className="w-full grid grid-cols-2 gap-4 items-center">
              <Image
                alt="From Despair to Where book cover featuring a silhouette of a hand with zombies lurking in the background"
                src="/graphic-design/from-despair-to-where.webp"
                width={600}
                height={600}
                className="w-2/4 h-auto mx-auto"
              />
              <Image
                alt="From Despair to Where book cover featuring a silhouette of a hand with zombies lurking in the background"
                src="/graphic-design/childrens-book-illustration.webp"
                width={600}
                height={600}
                className="w-full h-auto rounded-xl"
              />

            </div>
            <p className="text-lg">
            Aside from my work, I&apos;ve written two books - a zombie thriller titled From <Link className="transition-all duration-500 font-bold text-teal-500 hover:text-indigo-500" href='https://www.amazon.co.uk/Despair-Where-Oliver-Smith/dp/1527262065'>Despair to Where</Link> and a children’s book called <Link className="transition-all duration-500 font-bold text-teal-500 hover:text-indigo-500" href='https://the-tiniest-of-trolls.onrender.com/'>The Tiniest of Trolls</Link>, which I also illustrated. I live near Knutsford with my two children and enjoy cooking, reading, and traveling when I’m not busy creating digital solutions for my clients.
            </p>
            <p className="text-lg">
              {`Let’s work together to elevate your business with impactful marketing and web design. If you’re based in Cheshire, Manchester or anywhere else (if you're happy for me to work remotely) and need a dedicated freelancer, please do get in touch.`}
            </p>
        </main>
      </div>
    </>
  );
}