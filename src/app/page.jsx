"use client";

import ContactCta from "@/components/ContactCta";
import ContactForm from "@/components/ContactForm";
import {
  darkContainer,
  gridFiveCol,
  h1,
  h2,
  herContainerAlt,
  heroContainer,
  ilIconList,
  lightContainer,
  linkBtnStyle,
  listColLight,
  mainContainer,
  textGradient,
  twoColGridLightBkg,
  ulIconList,
} from "@/components/customStyles";
import DesktopNav from "@/components/DeskTopNav";
import Footer from "@/components/Footer";
import LinkStyled from "@/components/LinkStyled";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/testimonials.js/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCalculator, FaCheck, FaRocket, FaTelegramPlane } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineScreenshot, MdWeb } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";

export default function Home() {

  return (
    <>
      <DesktopNav />
      <Navigation />
      <main className={mainContainer}>
      <section className={heroContainer}>
          <article className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-end justify-between mx-auto gap-8 text-white">
            <div className="flex flex-col gap-8 m-auto item lg:col-span-2 pb-20">
            <h1 className={h1}>
                Cheshire Based Web Designer and Marketing Consultant
              </h1>
              <p className="text-xl font-semibold">
              Strategy built for execution. I&apos;m a full-stack marketing consultant who speaks developer. From brand positioning to web builds, I handle the entire pipeline to turn your ideas into clear, converting results.
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                <LinkStyled src="/contact" linkText="Let's chat" />
                <Link
                  className="text-sm font-bold mt-4 py-2 border-white border-b-2 w-fit border-b-4 hover:scale-110 transition-all duration-500"
                  href="#services"
                >
                  {`> Services`}
                </Link>
              </div>
            </div>
            <Image
              src="/fractional-cmo-services.png"
              alt="Oliver Smith, Fractional CMO services"
              quality={100}
              width={800}
              height={800}
              priority
              className="w-full ms-auto h-auto lg:col-span-3 md:mt-40 lg:mt-0"
            />
          </article>
        </section>

        <section className={lightContainer}>
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-4">
              <div>
                <p className="uppercase text-xs font-semibold">
                  Full-Stack Marketing Consultant
                </p>
                <h2 className={`${h2} ${textGradient}`}>
                Strategic Marketing & Technical Execution
                </h2>
              </div>
              <p>
                I bridge the gap between high-level marketing and custom web development. From SEO-driven content and brand design to building interactive tools, calculators, and high-performance websites, I provide the end-to-end expertise needed to grow your digital presence. Whether you’re an established business or a tech startup, I turn complex goals into clear, converting campaigns.
              </p>
            </div>
            <div className="flex flex-col gap-8 relative group">
              <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full  bg-gradient-to-br from-teal-500 to-indigo-600 opacity-20 rounded-xl transition-all duration-400"></div>
              <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:opacity-0 border-white border-2 rounded-xl transition-all duration-700"></div>
              <Image
                src="/consultant/helping-business-growth.webp"
                alt="Helping business growth"
                width={600}
                height={600}
                className="w-full h-auto aspect-square rounded-xl"
                priority
                quality={100}
              />
            </div>
          </article>
        </section>
        <section id="services" className={lightContainer}>
          <article className="flex flex-col gap-8 w-full mb-8 max-w-[800px] mx-auto z-30">
            <div className="max-w-screen-md me-auto flex flex-col gap-8">
              <h2 className={h2}>
                My Services
              </h2>
              <p className="text-lg font-medium">
                Whether you&apos;re a startup looking to launch your first product or an established business looking to grow your online presence, I can help you achieve your goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 justify-center">
              <div className={listColLight}>
                <div className="flex items-center justify-between gap-4 border-b-2 pb-4 mb-4">
                  <MdOutlineScreenshot size={42} className="text-teal-400" />
                  <h4 className="font-bold upper">Web Design</h4>
                </div>
                <div className={ulIconList}>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>CMS Platforms</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>HTML/CSS/JS Builds</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>React Frameworks</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>E-Commerce</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Performance Optimisation</p>
                  </div>
                  <Link href="/web-design" className={`${linkBtnStyle} mx-auto`}>
                    Web Design Services
                  </Link>
                </div>
              </div>
              <div className={listColLight}>
                <div className="flex items-center justify-between gap-4 border-b-2 pb-4 mb-4">
                  <FaCalculator size={42} className="text-teal-400" />
                  <h4 className="font-bold upper">Web Widgets & Apps</h4>
                </div>
                <div className={ulIconList}>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Interactive Tools</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>ROI / Price Calculators</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Games</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Quizzes</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Increased Engagement</p>
                  </div>
                  <Link
                    href="/web-widgets"
                    className={`${linkBtnStyle}`}
                  >
                    Web Widgets & Apps
                  </Link>
                </div>
              </div>
              <div className={listColLight}>
                <div className="flex items-center justify-between gap-4 border-b-2 pb-4 mb-4">
                  <GiArcheryTarget size={42} className="text-teal-400" />
                  <h4 className="font-bold upper">Marketing Services</h4>
                </div>
                <div className={ulIconList}>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Content Marketing</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Search Engine Optimisation</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Graphic Design</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Video Production</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Marketing Analytics</p>
                  </div>
                  <Link
                    href="/marketing-services"
                    className={`${linkBtnStyle} mx-auto`}
                  >
                    Marketing Services
                  </Link>
                </div>
              </div>
              <div className={listColLight}>
                <div className="flex items-center justify-between gap-4 border-b-2 pb-4 mb-4">
                  <FaRocket size={42} className="text-teal-400" />
                  <h4 className="font-bold upper">Tech Startup Support</h4>
                </div>
                <div className={ulIconList}>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Strategy & Leadership</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Search Engine Optimisation</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Web & Digital Marketing</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>ROI Measurement</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Execution & Delivery</p>
                  </div>
                  <Link
                    href="/startup"
                    className={`${linkBtnStyle} mx-auto`}
                  >
                    Startup Support
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
