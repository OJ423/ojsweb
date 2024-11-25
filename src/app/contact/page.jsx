import ContactForm from "@/components/ContactForm";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export const metadata = {
  title: "Find a Marketing Freelancer",
  description: "Contact me to talk about your freelance marketing or web design needs.",
  openGraph: {
    title: "Find a Marketing Freelancer",
    description: "Contact me to talk about your freelance marketing or web design needs.",
    url: 'https://ojsweb.co.uk/contact/',
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
    canonical: '/contact'
  }
};

export default function Contact() {
  return (
    <>
        <DesktopNav />
        <Navigation />
        <main className={`flex flex-col mx-auto w-full items-center justify-center px-8 bg-[url("/full-bloom.webp")]`}> 
          <section className="flex flex-col md:flex-row gap-8 md:gap-20 mx-auto py-28 md:py-40 max-w-screen-lg">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Get in touch
                </span>{" "}
                to let me help you
              </h1>
              <p className="text-lg">
                {`Fill out the form if you've got questions or would like to have a chat about your web or marketing needs.`}
              </p>
              <p className="text-lg">Alternatively, email me at <Link className="text-indigo-500 hover:text-teal-500 transition-all duration-500" href="mailto:oliver@ukmarketingfreelancer.co.uk">oliver@ukmarketingfreelancer.co.uk</Link></p>
            </div>
          <ContactForm />
          </section>
        </main>
        <Footer />
    </>
  );
}