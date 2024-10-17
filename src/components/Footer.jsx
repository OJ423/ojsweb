"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsWordpress } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import {
  FcAddImage,
  FcFile,
  FcFlashOn,
  FcPhoneAndroid,
  FcSearch,
} from "react-icons/fc";

export default function Footer() {
  const pathname = usePathname()

  return (
    <section className="bg-gradient-to-br from-teal-500 to-indigo-600 gap-16 py-20 text-white px-8 md:px-20 grid md:grid-cols-2 xl:grid-cols-3 justify-start">
      <div className="flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h2 className="font-bold text-3xl">Hey, I&apos;m Oliver.</h2>
        <p className="text-sm">
          {" "}
          I specialise in marketing and web design. So if you need help with{" "}
          <Link href="/marketing-services/organic-seo">SEO</Link>,{" "}
          <Link href="/marketing-services/content-marketing">
            content Marketing
          </Link>
          ,{" "}
          <Link href="/marketing-services/design-services">graphic design</Link>
          , <Link href="/react-websites">React-based websites</Link>,{" "}
          <Link href="/wordpress-websites">wordpress development</Link> or{" "}
          <Link href="/web-apps">web apps</Link>, then please do get in touch.
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
        <p className="text-xs uppercase mb-4">
          Marketing Services
        </p>
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
      </div>
      <div>
      <p className="text-xs uppercase mb-4">
            Web Development
          </p>
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
    </section>
  );
}
