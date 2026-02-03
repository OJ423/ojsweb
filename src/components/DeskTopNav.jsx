"use client";

import Link from "next/link";
import { FaBlog, FaReact, FaShopify } from "react-icons/fa";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FcAddImage,
  FcBusinessman,
  FcFile,
  FcFlashOn,
  FcFlowChart,
  FcPhoneAndroid,
  FcPodiumWithAudience,
  FcPositiveDynamic,
  FcReadingEbook,
  FcSearch,
  FcSmartphoneTablet,
} from "react-icons/fc";
import { BsWordpress } from "react-icons/bs";
import { linkBlue } from "./customStyles";

export default function DesktopNav() {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => setVisible(!visible);
  const pathname = usePathname();

  return (
    <>
      <header id="top" className="hidden md:block w-full bg-white text-gray-600 z-40 relative">
        <div className="w-full flex flex-col items-center justify-center h-20 bg-slate-100 z-50 relative shadow-xl">
          <div className="w-full max-w-screen-lg mx-auto px-4 xl:px-0 flex justify-between items-center">
            <Link href="/">
              <Image
                src="/ojsweb-logo.svg"
                alt="OJSWEB logo - Web Design and Marketing Services, Cheshire and Manchester"
                width={100}
                height={100}
                className="rounded-full w-16 h-16"
              />
            </Link>
            <nav>
              <ul className="flex items-center gap-8 font-bold">
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <button
                    onClick={handleVisible}
                    className={`${
                      [
                        "marketing-services",
                        "web-apps",
                        "react-websites",
                        "wordpress-websites",
                        "shopify-sites",
                        "content-marketing",
                        "organic-seo",
                        "design-services",
                        "startup",
                        "web-design",
                        "web-widgets"
                      ].some((route) => pathname.includes(route))
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FcSmartphoneTablet size={24} title="Marketing & Web Design Services" />
                    Services
                  </button>
                </li>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/about"
                    className={`${
                      pathname.includes("/about")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FcBusinessman size={24} title="About me" />
                    About
                  </Link>
                </li>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/contact"
                    className={`${
                      pathname.includes("/contact")
                        ? "text-teal-500"
                        : "text-auto"
                    } ${linkBlue}`}
                  >
                    Hire Me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-full mx-auto px-4 xl:px-0 z-40 absolute">
          <div className="flex items-center max-w-screen-lg mx-auto justify-end w-full gap-8">
            <div className="flex gap-4 items-end justify-end bg-white p-4 rounded-b-lg">
              <Link
                href="/blog"
                replace
                target="_blank"
                className="hover:text-teal-500 transition-all duration-500"
              >
                <FaBlog aria-label="A link to Oliver's Blog" size={20} />
              </Link>
              <Link
                href="https://github.com/OJ423"
                target="_blank"
                className="hover:text-teal-500 transition-all duration-500"
              >
                <TbBrandGithub
                  aria-label="A link to Oliver's GitHub Profile"
                  size={20}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/oliver-smith-software/"
                target="_blank"
                className="hover:text-teal-500 transition-all duration-500"
              >
                <TbBrandLinkedin
                  aria-label="A link to Oliver's LinkedIn Profile"
                  size={20}
                />
              </Link>
              <Link
                href="/contact"
                className="hover:text-teal-500 transition-all duration-500"
              >
                <TbMail
                  aria-label="A link to a contact form to get in touch with Oliver"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            !visible ? "translate-y-[-150%]" : "translate-y-[0%]"
          } transition-all duration-500 absolute top-20 z-20 w-full bg-slate-100 shadow-xl z-49 py-16 font-bold`}
        >
          <div className="grid grid-cols-3 gap-20 mx-auto w-full max-w-screen-lg mx-auto px-4 xl:px-0 justify-center">
          <nav>
              <p className="text-xs uppercase mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Web Design & Development
              </p>
              <p className="text-xs font-light mb-8">CMS Platforms, HTML/CSS/JS Builds, React Frameworks, E-Commerce, Web Widgets, Tools & Apps</p>
              <ul>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/web-design"
                    className={`${
                      pathname.includes("web-design")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FcSmartphoneTablet size={24} title="Web Design Services" />
                    Web Design
                  </Link>
                </li>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/web-widgets"
                    className={`${
                      pathname.includes("web-widgets")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FaReact size={24} title="React framework websites" />
                    Web Widgets, Tools & Apps
                  </Link>
                </li>
              </ul>
            </nav>
            
            <nav>
              <p className="text-xs uppercase mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Marketing Services
              </p>
              <p className="text-xs font-light mb-8">Content Marketing, SEO, Graphic Design, Video Production, Marketing Analytics</p>
              <ul>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/marketing-services"
                    className={`${
                      pathname.includes("marketing")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FcPositiveDynamic size={24} title="Marketing Services" />
                    Marketing Services
                  </Link>
                </li>
              </ul>
            </nav>

            <nav>
              <p className="text-xs uppercase mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Tech Startup Support Services
              </p>
              <p className="text-xs font-light mb-8">Strategy & Leadership, Web & Digital Marketing, ROI Measurement, Execution & Delivery</p>
              <ul>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/startup"
                    className={`${
                      pathname.includes("startup")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FcFlowChart size={24} title="Startup Marketing Strategy" />
                    Startup Marketing Support
                  </Link>
                </li>
              </ul>
            </nav>
            
          </div>
        </div>
      </header>
      <div
        onClick={handleVisible}
        className={`${
          visible ? "opacity-80 visible" : "opacity-0 invisible"
        } transition-all duration-500 w-full min-h-full absolute top-0 left-0 bg-slate-500 opacity-80 z-20 `}
      ></div>
    </>
  );
}
