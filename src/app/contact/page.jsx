import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Find a Marketing Freelancer",
  description: "Contact me to talk about your freelance marketing or web design needs.",
  openGraph: {
    title: "Find a Marketing Freelancer",
    description: "Contact me to talk about your freelance marketing or web design needs.",
    url: 'https://ojsweb.co.uk/contact/',
    siteName: 'Next.js',
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
  canonical: 'https://ojsweb.co.uk/contact/'
};

export default function Contact() {
  return (
    <>
      <div className={`flex min-h-screen items-center bg-[url("/full-bloom.webp")]`}>
        <Navigation />
        <main className="flex min-h-min flex-col mx-auto mt-28 mb-20 md:my-20 gap-8 w-full items-center justify-center max-w-[500px] px-4">
          <div className="flex flex-col gap-8 mx-auto w-4/5 lg:w-2/4 xl:w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Contact me
              </span>{" "}
              to arrange a chat
            </h1>
            <p className="text-lg">
              {`Fill out the form if you've got questions or would like to have a chat about your web or marketing needs.`}
            </p>
          </div>
          <ContactForm />
        </main>
      </div>
    </>
  );
}