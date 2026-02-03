"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsWordpress } from "react-icons/bs";
import { FaBlog, FaReact, FaShopify } from "react-icons/fa";
import {
  FcAddImage,
  FcFile,
  FcFlashOn,
  FcFlowChart,
  FcPhoneAndroid,
  FcReadingEbook,
  FcSearch,
  FcSmartphoneTablet,
} from "react-icons/fc";
import { HiChevronDoubleUp } from "react-icons/hi";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-br from-teal-500 to-indigo-600 w-full relative">
      <footer className="gap-16 py-20 text-white px-8 xl:px-0 grid sm:grid-cols-2 justify-start max-w-screen-lg w-full mx-auto">
        <div className="flex flex-col gap-4 mx-auto">
          <h2 className="font-bold text-3xl">Hey, I&apos;m Oliver.</h2>
          <p className="text-sm">
            I am a Marketing Consultant who also provides project based web design and marketing freelancer services. I am based in Cheshire
            and specialise in {" "}
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
            <Link href="/web-apps">web apps</Link>.
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
        <p className="text-xs uppercase mb-4">Web Design &Development</p>
          <ul>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/web-design"
                className={`${
                  pathname.includes("web-design")
                    ? "font-bold"
                    : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcSmartphoneTablet size={24} title="Web Design" />
                Web Design
              </Link>
            </li>
            <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/web-widgets"
                className={`${
                  pathname.includes("web-widgets")
                    ? "font-bold"
                    : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FaReact size={24} title="Web Widgets, Tools & Apps" />
                Web Widgets, Tools & Apps
              </Link>
            </li>
          </ul>
          <p className="text-xs uppercase mb-4 mt-8">Marketing Services</p>
          <ul>
             <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/marketing-services"
                className={`${
                  pathname.includes("marketing-services") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcReadingEbook size={24} title="Marketing Services" />
                Marketing Services
              </Link>
            </li>
          </ul>
          <p className="text-xs uppercase mb-4 mt-8">Startups</p>
          <ul>
             <li className={`list-none py-2.5 text-sm cursor-pointer`}>
              <Link
                href="/startup"
                className={`${
                  pathname.includes("startup") ? "font-bold" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcFlowChart size={24} title="Startup Marketing Support" />
                Startup Marketing Support
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
          <p className="text-sm">
            Marketing consultancy and freelance marketing services available on premise in{" "}
            <strong>
              Manchester, Knutsford, Wilmslow, Alderley Edge, Macclesfield,
              Northwich
            </strong>{" "}
            and surrounding areas.
          </p>
          <p className="text-sm">
            I work remotely as a marketing contractor for UK, US, Irish and
            Australian markets.
          </p>
        </div>
        <Link href="#top">
          <div className="absolute top-2 right-2 bg-white p2 rounded-lg cursor-pointer text-blue-600 hover:text-blue-400 hover:bg-blue-100 transition-all duration-500">
            <HiChevronDoubleUp size={42}/>
          </div>
        </Link>
      </footer>
    </div>
  );
}
