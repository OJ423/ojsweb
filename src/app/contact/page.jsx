import ContactForm from "@/components/ContactForm";
import { h1, herContainerAlt, mainContainer, twoColGridLightBkg } from "@/components/customStyles";
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
        <main className={mainContainer}> 
          <section className={herContainerAlt}>
            <article className="max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8">
                <h1 className={h1}>
                    Get in touch to let me help you
                </h1>
                <p>
                  {`Fill out the form if you've got questions or would like to have a chat about your web or marketing needs.`}
                </p>
                <p>Alternatively, email me at <Link className="underline hover:text-teal-500 transition-all duration-500" href="mailto:oliver@ojsweb.co.uk">oliver@ojsweb.co.uk</Link></p>
              </div>
            <ContactForm />
            </article>
          </section>
        </main>
        <Footer />
    </>
  );
}