"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsWordpress } from "react-icons/bs";
import { FaBlog, FaShopify } from "react-icons/fa";
import {
  FcAddImage,
  FcFile,
  FcFlashOn,
  FcPhoneAndroid,
  FcSearch,
} from "react-icons/fc";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-br from-teal-500 to-indigo-600 w-full">
      <footer className="gap-8 py-20 text-white px-8 xl:px-0 grid sm:grid-cols-2 lg:grid-cols-4 justify-start max-w-screen-lg w-full mx-auto">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2 mx-auto">
          <h2 className="font-bold text-3xl">Hey, I&apos;m Oliver.</h2>
          <p className="text-sm">
            {" "}
            I am a web design and marketing freelancer based in Cheshire. I
            specialise in marketing and web design. So if you need help with{" "}
            <Link href="/marketing-services/organic-seo">SEO</Link>,{" "}
            <Link href="/marketing-services/content-marketing">
              content marketing
            </Link>
            ,{" "}
            <Link href="/marketing-services/design-services">
              graphic design
            </Link>
            , <Link href="/react-websites">React-based websites</Link>,{" "}
            <Link href="/wordpress-websites">wordpress development</Link> or{" "}
            <Link href="/web-apps">web apps</Link>, then please do get in touch.
            I am a web design and marketing freelancer in Cheshire meaning I can
            work at your location in and around Cheshire and Manchester, but I
            am comfortable working for anyone remotely.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link
              href="/about"
              className="font-bold py-2 px-4 border-2 border-white rounded-lg hover:bg-white hover:text-teal-500 transition-all duration-500"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="font-bold py-2 px-4 border-2 border-white rounded-lg hover:bg-white hover:text-teal-500 transition-all duration-500"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase mb-4">Marketing Services</p>
          <ul>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/marketing-services/content-marketing"
                className={`${
                  pathname.includes("content") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcFile size={24} title="Content Marketing" />
                Content Marketing
              </Link>
            </li>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/marketing-services/organic-seo"
                className={`${
                  pathname.includes("organic-seo") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcSearch size={24} title="Organic SEO" />
                Organic SEO
              </Link>
            </li>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/marketing-services/design-services"
                className={`${
                  pathname.includes("design-services")
                    ? "font-bold"
                    : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcAddImage size={24} title="Design Services" />
                Design Services
              </Link>
            </li>
          </ul>
          <p className="text-xs uppercase mb-4 mt-8">Advice & Opinion</p>
          <ul>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/blog"
                className={`${
                  pathname.includes("content") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FaBlog
                  size={24}
                  title="Link to my marketing and web design blog"
                />
                Read my blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase mb-4">Web Development</p>
          <ul>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/react-websites"
                className={`${
                  pathname.includes("react-websites")
                    ? "font-bold"
                    : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcFlashOn size={24} title="React framework websites" />
                Fast React Websites
              </Link>
            </li>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/web-apps"
                className={`${
                  pathname.includes("web-apps") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcPhoneAndroid size={24} title="Web Apps" />
                Web Apps
              </Link>
            </li>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/wordpress-websites"
                className={`${
                  pathname.includes("wordpress") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <BsWordpress size={24} title="Wordpress Development" />
                WordPress Development
              </Link>
            </li>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/shopify-sites"
                className={`${
                  pathname.includes("shopify") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FaShopify size={24} title="Shopify Sites" />
                Shopify Sites
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4 pt-8 border-t-2">
          <Link href="/">
            <Image
              src="/ojsweb-logo-white.svg"
              alt="Cartoon pic of me, Oliver"
              width={100}
              height={100}
              className="rounded-full w-16 h-16"
            />
          </Link>
          <p>
            Email me at{" "}
            <Link
              className="text-white underline hover:text-teal-200 transition-all duration-500"
              href="mailto:oliver@ojsweb.co.uk"
            >
              oliver@ojsweb.co.uk
            </Link>
          </p>
          <p>
            Freelance marketing services available on premise in <strong>Manchester, 
            Knutsford, Wilmslow, Alderley Edge, Macclesfield, Northwich</strong> and
            surrounding areas.
          </p>
          <p>
            I work remotely as a marketing contractor for UK, US, Irish and
            Australian markets.
          </p>
        </div>
      </footer>
    </div>
  );
}
