"use client";

import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaReact, FaShopify, FaWordpress } from "react-icons/fa";
import { MdDraw, MdOutlineWeb } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

export default function Home() {
  return (
    <>
      <DesktopNav />
      <Navigation />
      <main className="flex min-h-min flex-col w-full items-center justify-center">
        <section
          className={`py-40 md:py-20 mx-auto w-full px-8 xl:px-0 bg-[url("/full-bloom.webp")]`}
        >
          <div className="max-w-screen-lg w-full flex sm:py-20 md:py-0 items-center justify-between mx-auto gap-8">
            <div className="flex flex-col gap-8 m-auto item text-gray-800 ">
              <h1 className="text-3xl xl:text-4xl font-bold leading-[2.5rem]">
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  I am a Marketing Consultant
                </span>{" "}
                Available in Cheshire, Manchester and Beyond
              </h1>
              <p className="text-xl font-semibold">
                Helping marketing teams and growing businesses build strategic,
                data-driven marketing functions for measurable success.
              </p>
              <p className="text-lg font-medium">
                Additionally, I provide project based freelance marketing and
                web design services to businesses in Manchester, Cheshire and
                beyond.
              </p>
              <LinkStyled src="/contact" linkText="Let's chat" />
            </div>
            <Image
              src="/marketing-freelancer-cheshire.webp"
              alt="Manchester and Cheshire Marketing freelancer and web designer"
              quality={100}
              width={800}
              height={500}
              priority
              className="w-1/3 ms-auto h-auto rounded-xl hidden sm:block"
            />
          </div>
          <Image
            src="/comm-you-nity-screenshot.webp"
            alt="Manchester and Cheshire Marketing freelancer and web designer"
            quality={100}
            width={800}
            height={400}
            priority
            className="w-full mx-auto h-auto rounded-xl my-8 sm:hidden"
          />
        </section>
        <section className="relative w-full bg-gradient-to-br from-teal-100 to-indigo-200 rounded-xl p-8 py-40 text-gray-800">
          <article className="max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-4">
              <div>
                <p className="uppercase text-xs font-semibold text-gray-500">Marketing Consultancy Services</p>
                <h2 className="text-3xl font-bold w-full bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Empowering Marketing Teams & Growing Businesses
                </h2>

              </div>
              <p className="text-lg font-medium leading-7">
                As a marketing consultant, I specialise in helping small
                marketing teams and growing businesses establish a structured
                and effective marketing function. Whether you’re scaling up,
                launching new initiatives, or refining your strategy, I provide
                the expertise and direction needed to build a results-driven
                marketing operation.
              </p>
              <LinkStyled src="/marketing-consultant" linkText="Marketing Consultant Services" />
            </div>
            <div className="flex flex-col gap-8">
              <Image
                src="/consultant/helping-business-growth.webp"
                alt="Helping business growth"
                width={600}
                height={600}
                className="w-full h-auto rounded-xl"
                priority
                quality={100}
              />
            </div>
          </article>
          </section>
        <section
          className={`py-40 lg:py-40 px-4 xl:px-0 flex flex-col gap-8 bg-gradient-to-br from-teal-500 to-indigo-600 w-full relative`}
        >
          <div className="flex flex-col gap-8 w-full mb-8 text-white max-w-screen-md mx-auto z-30">
            <div>
              <p className="uppercase text-xs font-semibold text-white">Freelance Services</p>
              <h2 className="font-bold text-2xl lg:text-4xl">
                Based in Cheshire & Manchester, but servicing the world
              </h2>

            </div>
            <p className="text-lg font-medium">
              If you need me to be at your location, my freelance marketing and
              web design services are restricted to Manchester and Cheshire, but
              I am well versed in the world of remote work and have experience
              working with businesses in the US, Europe and across the UK.
            </p>
            <p className="text-lg font-medium">
              My freelance services include...
            </p>
          </div>

          <div className="flex flex-col gap-8 p-8 lg:p-10 rounded-xl bg-gradient-to-br from-teal-100 to-indigo-200 max-w-screen-lg w-full mx-auto z-30">
            <h3 className="font-bold text-2xl bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
              Marketing Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-center">
              <Link href="/marketing-services/content-marketing">
                <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                  <TfiWrite size={42} className="text-teal-500" />
                  <h4 className="font-bold text-xl">Content Marketing</h4>
                  <p>
                    Unlock the power of content marketing - Engaging,
                    informative, and audience-centric content strategies.
                  </p>
                  <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-indigo-200 w-fit border-b-4 border-gray-500 hover:border-indigo-500 transition-all duration-500 rounded-xl">
                    Content Marketing
                  </button>
                </div>
              </Link>
              <Link href="/marketing-services/organic-seo">
                <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                  <FaGoogle size={42} className="text-teal-500" />
                  <h4 className="font-bold text-xl">Organic SEO</h4>
                  <p>
                    Elevate your online presence with customised strategies that
                    enhance visibility, attract targeted traffic, and drive
                    sustainable growth for your business.
                  </p>
                  <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-indigo-200 w-fit border-b-4 border-gray-500 hover:border-indigo-500 transition-all duration-500 rounded-xl">
                    Organic SEO
                  </button>
                </div>
              </Link>
              <Link href="/marketing-services/design-services">
                <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                  <MdDraw size={42} className="text-teal-500" />
                  <h4 className="font-bold text-xl">Design Services</h4>
                  <p>
                    Whether its sales brochures, imagery, product videos or any
                    other type of graphic design, I can create on-brand,
                    beautiful and effective marketing collateral.
                  </p>
                  <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-indigo-200 w-fit border-b-4 border-gray-500 hover:border-indigo-500 transition-all duration-500 rounded-xl">
                    Design Services
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 p-8 lg:p-10 rounded-xl bg-gradient-to-br from-indigo-200 to-teal-100 max-w-screen-lg w-full mx-auto z-30">
            <h3 className="font-bold text-2xl bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
              Web Services
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 gap-8 lg:gap-10 justify-center">
              <Link href="/react-websites">
                <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                  <FaReact size={42} className="text-teal-500" />
                  <h4 className="font-bold text-xl">React Websites</h4>
                  <p>
                    Lightning fast and unique websites build with React
                    frameworks like Next.js and Gatsby
                  </p>
                  <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-indigo-200 w-fit border-b-4 border-gray-500 hover:border-indigo-500 transition-all duration-500 rounded-xl">
                    React Development
                  </button>
                </div>
              </Link>
              <Link href="/shopify-sites">
                <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                  <FaShopify size={42} className="text-teal-500" />
                  <h4 className="font-bold text-xl">Shopify Stores</h4>
                  <p>
                    Beautiful and fully functional Shopify stores designed to
                    elevate your brand.
                  </p>
                  <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-indigo-200 w-fit border-b-4 border-gray-500 hover:border-indigo-500 transition-all duration-500 rounded-xl">
                    Shopify Stores
                  </button>
                </div>
              </Link>
              <Link href="/web-apps">
                <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                  <MdOutlineWeb size={42} className="text-teal-500" />
                  <h4 className="font-bold text-xl">Web Apps</h4>
                  <p>
                    Share, create, and use data and content with beautiful and
                    intuitive web and mobile apps.
                  </p>
                  <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-indigo-200 w-fit border-b-4 border-gray-500 hover:border-indigo-500 transition-all duration-500 rounded-xl">
                    Web Apps
                  </button>
                </div>
              </Link>
              <Link href="/wordpress-websites">
                <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                  <FaWordpress size={42} className="text-teal-500" />
                  <h4 className="font-bold text-xl">WordPress Design</h4>
                  <p>
                    WordPress web design using the most popular CMS in the
                    world. Get your site built in days.
                  </p>
                  <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-indigo-200 w-fit border-b-4 border-gray-500 hover:border-indigo-500 transition-all duration-500 rounded-xl">
                    WordPress Websites
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <Image
            src="/web-design-and-marketing-freelancer.svg"
            alt="graphic design of phone with marketing and web design symbols popping out"
            width={800}
            height={800}
            className="absolute top-4 left-0 opacity-20 z-20 w-80 h-auto md:w-[500px] lg:w-[800px]"
          />
          <Image
            src="/services-background.svg"
            alt="graphic design of screen with charts popping out"
            width={800}
            height={800}
            className="absolute bottom-0 right-0 opacity-20 z-20 w-80 h-auto md:w-[500px] lg:w-[800px]"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
