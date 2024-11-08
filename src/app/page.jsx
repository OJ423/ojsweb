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
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min flex-col w-full items-center justify-center">
          <section
            className={`flex min-h-screen py-20 flex-col xl:flex-row xl:px-16 xl:gap-20 xl:mx-auto gap-8 w-full items-center justify-center bg-[url("/full-bloom.webp")]`}
          >
            <div className="flex flex-col gap-8 m-auto w-4/5 lg:w-2/4 item">
              <h1 className="text-3xl xl:text-4xl font-bold text-gray-800">
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Web Design & Marketing Freelance Services
                </span>{" "}
                in Cheshire, Manchester and Beyond
              </h1>
              <p className="text-lg font-medium">
                Hi, I&apos;m Oliver and I am a web design and marketing
                freelancer in Cheshire. I have over 20 years&apos; experience in
                marketing, web design and development.
              </p>
              <p className="text-lg font-medium">
                I am honest, hardworking and diligent.
              </p>
              <p className="text-lg font-medium">
                My focus is to help businesses get the foundations of their
                digital channels and marketing right. I believe in using
                high-quality content to build organic interest in my
                client&apos;s businesses. I&apos;m here for your long-term.
              </p>
              <LinkStyled src="/contact" linkText="Arrange a chat" />
            </div>
            <Image
              src="/comm-you-nity-screenshot.webp"
              alt="Screenshot of a community social media app I built"
              quality={100}
              width={800}
              height={400}
              priority
              className="w-3/4 lg:w-2/4 h-auto rounded-xl hidden xl:block"
            />
          </section>

          <section className="py-20 lg:py-40 px-4 lg:px-20 flex flex-col gap-8">
            <div className="flex flex-col gap-8 lg:w-2/3 mb-8">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Based in Cheshire & Manchester, but servicing the world
              </h2>
              <p>
                If you need me to be at your location, my freelance marketing
                and web design services are restricted to Manchester and
                Cheshire, but I am well versed in the world of remote work and
                have experience working with businesses in the US, Europe and
                across the UK.
              </p>
              <p>My freelance services include...</p>
            </div>

            <section className="flex flex-col gap-8 p-8 lg:p-10 rounded-xl bg-teal-100">
              <h2 className="font-bold text-2xl bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Marketing Services
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-10 justify-center">
                <Link href="/marketing-services/content-marketing">
                  <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                    <TfiWrite size={42} className="text-teal-500" />
                    <h3 className="font-bold text-xl">Content Marketing</h3>
                    <p>
                      Unlock the power of content marketing - Engaging,
                      informative, and audience-centric content strategies.
                    </p>
                    <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl">
                      Content Marketing
                    </button>
                  </div>
                </Link>
                <Link href="/marketing-services/organic-seo">
                  <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                    <FaGoogle size={42} className="text-teal-500" />
                    <h3 className="font-bold text-xl">Organic SEO</h3>
                    <p>
                      Elevate your online presence with customised strategies
                      that enhance visibility, attract targeted traffic, and
                      drive sustainable growth for your business.
                    </p>
                    <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl">
                      Organic SEO
                    </button>
                  </div>
                </Link>
                <Link href="/marketing-services/design-services">
                  <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                    <MdDraw size={42} className="text-teal-500" />
                    <h3 className="font-bold text-xl">Design Services</h3>
                    <p>
                      Whether its sales brochures, imagery, product videos or
                      any other type of graphic design, I can create on-brand,
                      beautiful and effective marketing collateral.
                    </p>
                    <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl">
                      Design Services
                    </button>
                  </div>
                </Link>
              </div>
            </section>

            <section className="flex flex-col gap-8 p-8 lg:p-10 rounded-xl bg-teal-100">
              <h2 className="font-bold text-2xl bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Web Services
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 justify-center">
                <Link href="/react-websites">
                  <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                    <FaReact size={42} className="text-teal-500" />
                    <h3 className="font-bold text-xl">React Websites</h3>
                    <p>
                      Lightning fast and unique websites build with React
                      frameworks like Next.js and Gatsby
                    </p>
                    <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl">
                      React Development
                    </button>
                  </div>
                </Link>
                <Link href="/shopify-sites">
                  <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                    <FaShopify size={42} className="text-teal-500" />
                    <h3 className="font-bold text-xl">Shopify Stores</h3>
                    <p>
                      Beautiful and fully functional Shopify stores designed to
                      elevate your brand.
                    </p>
                    <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl">
                      Shopify Stores
                    </button>
                  </div>
                </Link>
                <Link href="/web-apps">
                  <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                    <MdOutlineWeb size={42} className="text-teal-500" />
                    <h3 className="font-bold text-xl">Web Apps</h3>
                    <p>
                      Share, create, and use data and content with beautiful and
                      intuitive web and mobile apps.
                    </p>
                    <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl">
                      Web Apps
                    </button>
                  </div>
                </Link>
                <Link href="/wordpress-websites">
                  <div className="flex flex-col gap-4 p-4 border-2 border-teal-200 rounded-xl h-full justify-between transition-all duration-500 hover:bg-teal-200">
                    <FaWordpress size={42} className="text-teal-500" />
                    <h3 className="font-bold text-xl">WordPress Design</h3>
                    <p>
                      WordPress web design using the most popular CMS in the
                      world. Get you site built in days.
                    </p>
                    <button className="text-sm font-bold p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl">
                      WordPress Websites
                    </button>
                  </div>
                </Link>
              </div>
            </section>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
