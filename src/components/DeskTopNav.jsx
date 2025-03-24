"use client";

import Link from "next/link";
import { FaBlog, FaShopify } from "react-icons/fa";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FcAddImage,
  FcBusinessman,
  FcFile,
  FcFlashOn,
  FcPhoneAndroid,
  FcPositiveDynamic,
  FcReadingEbook,
  FcSearch,
  FcSmartphoneTablet,
} from "react-icons/fc";
import { BsWordpress } from "react-icons/bs";

export default function DesktopNav() {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => setVisible(!visible);
  const pathname = usePathname();

  return (
    <>
      <header className="hidden md:block w-full bg-white text-gray-600 z-40 relative">
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
                  <Link
                    href="/marketing-consultant"
                    className={`${
                      pathname.includes("consultant")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FcReadingEbook size={24} title="Marketing Consultancy" />
                    Consultant
                  </Link>
                </li>
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
                      ].some((route) => pathname.includes(route))
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FcSmartphoneTablet size={24} title="Freelance Services" />
                    Freelance
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
                    href="/blog"
                    className={`${
                      pathname.includes("/blog") ? "text-teal-500" : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FaBlog size={24} title="Blog" />
                    Blog
                  </Link>
                </li>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/contact"
                    className={`${
                      pathname.includes("/contact")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <TbMail size={24} title="Contact" />
                    Contact
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
          <div className="flex gap-20 mx-auto w-full max-w-screen-lg mx-auto px-4 xl:px-0 justify-center">
            <nav>
              <p className="text-xs uppercase mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Marketing
              </p>
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
                <>
                  <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                    <Link
                      href="/marketing-services/content-marketing"
                      className={`${
                        pathname.includes("content")
                          ? "text-teal-500"
                          : "text-auto"
                      } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50 ps-8`}
                    >
                      <FcFile size={24} title="Content Marketing" />
                      Content Marketing
                    </Link>
                  </li>
                  <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                    <Link
                      href="/marketing-services/organic-seo"
                      className={`${
                        pathname.includes("organic-seo")
                          ? "text-teal-500"
                          : "text-auto"
                      } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50 ps-8`}
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
                          ? "text-teal-500"
                          : "text-auto"
                      } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50 ps-8`}
                    >
                      <FcAddImage size={24} title="Design Services" />
                      Design Services
                    </Link>
                  </li>
                </>
              </ul>
            </nav>
            <nav>
              <p className="text-xs uppercase mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Web Development
              </p>
              <ul>
                <li className={`list-none py-2.5 text-sm cursor-pointer`}>
                  <Link
                    href="/react-websites"
                    className={`${
                      pathname.includes("react-websites")
                        ? "text-teal-500"
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
                      pathname.includes("web-apps")
                        ? "text-teal-500"
                        : "text-auto"
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
                      pathname.includes("wordpress")
                        ? "text-teal-500"
                        : "text-auto"
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
                      pathname.includes("shopify")
                        ? "text-teal-500"
                        : "text-auto"
                    } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
                  >
                    <FaShopify size={24} title="Shopify Sites" />
                    Shopify Sites
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
