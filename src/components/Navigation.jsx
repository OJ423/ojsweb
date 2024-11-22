"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FcFlashOn,
  FcPhoneAndroid,
  FcFile,
  FcSearch,
  FcAddImage,
  FcPositiveDynamic,
  FcBusinessman,
} from "react-icons/fc";
import { BsWordpress } from "react-icons/bs";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { FaBlog, FaShopify } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="absolute top-0 left-0 w-full flex gap-4 justify-between p-2 items-center md:hidden text-gray-500 font-bold">
        <Link
          className="flex items-center justify-center gap-2 hover:opacity-50 transition-all duration-500 absolute top-4 left-4 z-40"
          href="/"
        >
          <Image
            src="/ojsweb-logo.svg"
            alt="Cartoon pic of me, Oliver"
            width={100}
            height={100}
            className="rounded-full w-16 h-16"
          />
        </Link>

        {!menuOpen ? (
          <FiAlignRight
            onClick={handleOpenMenu}
            size={42}
            className="z-50 fixed top-6 right-4 p-1 bg-teal-100 rounded-lg shadow-xl"
          />
        ) : (
          <IoClose
            onClick={handleOpenMenu}
            size={42}
            className="z-50 fixed top-6 right-4 p-1 bg-teal-100 rounded-lg shadow-xl"
          />
        )}
      </section>
      <header
        className={`${
          !menuOpen ? "translate-x-[-100%] md:translate-x-0" : "translate-x-0"
        } transition-all duration-500 bg-white w-full bottom-0 left-0 fixed md:hidden min-h-screen md:sticky md:top-0 flex flex-col gap-0 justify-center items-center px-8 my-auto py-8 shadow-reverse font-bold text-gray-600 z-40`}
      >
        <div className="flex items-center gap-8 justify-center me-auto">
          <Link
            className="flex flex top-auto items-center justify-center gap-2 hover:opacity-50 transition-all duration-500 me-auto"
            href="/"
          >
            <Image
              src="/ojsweb-logo.svg"
              alt="Cartoon pic of me, Oliver"
              width={100}
              height={100}
              className="rounded-full w-16 h-16"
            />
          </Link>
          <div className="flex gap-4 items-center">
            <Link
              href="/blog"
              replace
              target="_blank"
              className="hover:text-teal-500 transition-all duration-500"
            >
              <FaBlog aria-label="A link to Oliver's Blog" size={24} />
            </Link>
            <Link
              href="https://github.com/OJ423"
              target="_blank"
              className="hover:text-teal-500 transition-all duration-500"
            >
              <TbBrandGithub
                aria-label="A link to Oliver's GitHub Profile"
                size={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/oliver-smith-software/"
              target="_blank"
              className="hover:text-teal-500 transition-all duration-500"
            >
              <TbBrandLinkedin
                aria-label="A link to Oliver's LinkedIn Profile"
                size={24}
              />
            </Link>
            <Link
              href="/contact"
              className="hover:text-teal-500 transition-all duration-500"
            >
              <TbMail
                aria-label="A link to a contact form to get in touch with Oliver"
                size={24}
              />
            </Link>
          </div>
        </div>
        <nav className="flex flex-col gap-0 items-start w-full">
          <p className="text-xs uppercase mt-4 mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
            Marketing
          </p>
          <ul>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/marketing-services"
                className={`${
                  pathname.includes("marketing") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcPositiveDynamic size={24} title="Marketing Services" />
                Marketing Services
              </Link>
            </li>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/marketing-services/content-marketing"
                className={`${
                  pathname.includes("content") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50 ps-8`}
              >
                <FcFile size={24} title="Content Marketing" />
                Content Marketing
              </Link>
            </li>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
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
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
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
          </ul>
          <p className="text-xs uppercase mt-4 mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
            Web Development
          </p>
          <ul>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
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
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/web-apps"
                className={`${
                  pathname.includes("web-apps") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcPhoneAndroid size={24} title="Web Apps" />
                Web Apps
              </Link>
            </li>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/wordpress-websites"
                className={`${
                  pathname.includes("wordpress") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <BsWordpress size={24} title="Wordpress Development" />
                WordPress Development
              </Link>
            </li>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/shopify-sites"
                className={`${
                  pathname.includes("shopify") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FaShopify size={24} title="Shopify Sites" />
                Shopify Sites
              </Link>
            </li>
          </ul>
          <p className="text-xs uppercase mt-4 mb-4 bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
            More
          </p>
          <ul>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/about"
                className={`${
                  pathname.includes("/about") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FcBusinessman
                  size={24}
                  title="About Oliver Smith Web and Marketing Freelancer"
                />
                About me
              </Link>
            </li>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/contact"
                className={`${
                  pathname.includes("/contact") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <TbMail
                  size={24}
                  title="Contact Oliver Smith Web and Marketing Freelancer"
                />
                Contact me
              </Link>
            </li>
            <li className={`list-none py-1.5 text-sm cursor-pointer`}>
              <Link
                href="/blog"
                className={`${
                  pathname.includes("/blog") ? "text-teal-500" : "text-auto"
                } flex flex-row text-center md:text-left text-xs md:text-base items-center gap-2 transition-all duration-500 hover:opacity-50`}
              >
                <FaBlog
                  size={24}
                  title="Free web design and marketing advice blog"
                />
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
