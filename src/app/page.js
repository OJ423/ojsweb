import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min mt-28 mb-20 flex-col xl:flex-row xl:px-20 xl:mx-auto gap-8 w-full items-center justify-center">
          <div className="flex flex-col gap-8 mx-auto w-3/4 lg:w-2/4 xl:w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Web Design & Marketing Services
              </span>{" "}
              Tailored to Your Needs and Budget
            </h1>
            <p className="text-lg font-light">
              Hi, I&apos;m Oliver and I have over 20 years&apos; experience in
              marketing, web design and development.
            </p>
            <p className="text-lg font-light">
              If you need an honest, hardworking and diligent professional to
              handle your web design and development and marketing needs, then{" "}
              <Link
                href="/contact"
                className="text-teal-500 font-bold hover:text-teal-900 transition-all duration-500"
              >
                get in touch
              </Link>
              .
            </p>
          </div>
          <Image
            src="/comm-you-nity-screenshot.webp"
            alt="Screenshot of a community social media app I built"
            quality={100}
            width={800}
            height={400}
            priority
            className="w-3/4 lg:w-2/4 h-auto rounded-xl"
          />
        </main>
      </div>
    </>
  );
}
