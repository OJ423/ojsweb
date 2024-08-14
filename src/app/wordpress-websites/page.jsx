import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/PeterWilliams";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import Portfolio from "@/components/Portfolio";
import { wordpressImgs } from "@/components/constants";
import CallToAction from "@/components/CallToAction";
import LinkStyled from "@/components/LinkStyled";
import Costs from "@/components/Costs";

export default function WordPressWebsites() {
  const costDescription =
    "WordPress does a lot of the heavy lifting so developing and deploying a WordPress website can be cost effective. Ideal for small online shops or news/blog sites. A basic website will cost as little as £250.";
  
  return (
    <>
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min md:my-0 flex-col w-full items-center justify-center">
          <section className="min-h-screen flex flex-col gap-20 mx-auto w-5/6 justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                  Master Your Web Presence with {" "}
                  <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Expert WordPress Design
                  </span>
                </h1>
                <p className="text-lg font-medium">
                  {`The world's most popular CMS, perfect for those who want to take charge of their web presence.`}
                </p>
                <LinkStyled src="/contact" linkText="Arrange a chat" />
              </div>
              <Image
                src="/portfolio/terminusdb-wordpress-website.webp"
                alt="Screenshot of an app I built"
                width={600}
                height={300}
                className="w-full h-auto rounded-xl"
                priority
                quality={100}
              />
            </div>
          </section>
          <PeterWilliams />
          <ColumnsTwoFullH>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold w-full text-gray-800">
                Tried and tested{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  by millions
                </span>
              </h2>
              <p className="text-lg leading-7">
                WordPress is used by some of the biggest companies in the world, and countless SMEs. It offers a tried and tested platform for websites, e-commerce sites, blogs and more.
              </p>
              <p className="text-lg leading-7 font-medium">
                I have extensive experience building quality and reliable WordPress sites. Whatever your needs, I can deliver a site that is fast, beautiful and perfectly functional.
              </p>
              <LinkStyled src="/contact" linkText="Talk your needs" />
            </div>
            <div>
              <Image
                src="/wordpress-265132_640.jpg"
                alt="Example WordPress interface"
                width={600}
                height={300}
                className="w-full h-auto rounded-xl"
                priority
                quality={100}
              />
            </div>
          </ColumnsTwoFullH>
          <section className="bg-gradient-to-br from-teal-100 to-cyan-200 md:min-h-screen flex flex-col gap-20 mx-auto w-full justify-center items-center py-20 px-4">
            <h2 className="text-2xl md:text-3xl font-bold">{`Here's some of my work...`}</h2>
            <Portfolio images={wordpressImgs} />
          </section>
          <Costs description={costDescription} cost="£250" />
          <CallToAction />
        </main>
      </div>
    </>
  );
}
