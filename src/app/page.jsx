"use client";

import ContactForm from "@/components/ContactForm";
import {
  darkContainer,
  gridFiveCol,
  h1,
  h2,
  herContainerAlt,
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
import { FaCheck, FaTelegramPlane } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small timeout to ensure the component is mounted
    // before triggering the animation. This can sometimes help
    // with initial render glitches.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // You can adjust this delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <DesktopNav />
      <Navigation />
      <main className={mainContainer}>
        <section
          className={herContainerAlt}
        >
          <div className={gridFiveCol}>
            <div className="flex flex-col gap-8 m-auto item md:col-span-2">
              <h1 className={h1}>
                Marketing for Tech Startups That Need to Move Fast
              </h1>
              <p className="text-xl font-semibold">
                Fractional CMO support and hands-on execution to help you go to
                market, get traction, and grow with purpose.
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
              src="/startup-marketing-strategy.png"
              alt="Marketing for Tech Startups Strategy Diagram"
              quality={100}
              width={800}
              height={500}
              priority
              className={`
                    w-full ms-auto h-auto md:col-span-3
                    transition-all duration-1000 ease-out // Transition for the entrance effect
                    ${
                      isVisible
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-50 rotate-[-10deg]"
                    }
                  `}
            />
          </div>
        </section>
        <section className={lightContainer}>
          <article className={twoColGridLightBkg}>
            <div className="flex flex-col gap-4">
              <div>
                <p className="uppercase text-xs font-semibold">
                  Flexible Help for Startups
                </p>
                <h2 className={`${h2} ${textGradient}`}>
                  Marketing Strategy Meets Startup Speed
                </h2>
              </div>
              <p>
                You&apos;re building something brilliant, but marketing
                shouldn&apos;t slow you down.
              </p>
              <p>
                I help early-stage tech startups develop smart, scalable
                marketing strategies that match their goals and budgets.
              </p>
              <p>
                Whether you need a fractional CMO to shape your go-to-market
                plan or a hands-on partner to execute it, I bring commercial
                thinking, creative ideas, and digital know-how to help you grow.
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
        <section id="services" className={darkContainer}>
          <article className="flex flex-col gap-8 w-full mb-8 text-white max-w-screen-lg mx-auto z-30">
            <div className="max-w-screen-md me-auto flex flex-col gap-8">
              <h2 className={h2}>
                Fractional CMO for Startups + Full-Stack Marketing Support
              </h2>
              <p className="text-lg font-medium">
                Get the clarity of a seasoned marketing leader, without the cost
                of a full-time hire. I work with startups across SaaS, AI,
                fintech, and more to define positioning, build brand awareness,
                and generate leads through smart, sustainable strategies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 justify-center">
              <div className={listColLight}>
                <div className="flex items-center justify-between gap-4 border-b-2 pb-4 mb-4">
                  <PiStrategyBold size={42} className="text-teal-400" />
                  <h4 className="font-bold upper">Strategy & Leadership</h4>
                </div>
                <div className={ulIconList}>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Fractional CMO support</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Go-to-market strategy</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Messaging & positioning</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Competitor analysis</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Audience development</p>
                  </div>
                  <Link href="/startup/strategy" className={`${linkBtnStyle}`}>
                    Strategy & Leadership
                  </Link>
                </div>
              </div>
              <div className={listColLight}>
                <div className="flex items-center justify-between gap-4 border-b-2 pb-4 mb-4">
                  <FaTelegramPlane size={42} className="text-teal-400" />
                  <h4 className="font-bold upper">Execution & Delivery</h4>
                </div>
                <div className={ulIconList}>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Campaign planning</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Content marketing</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Email & automation</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Social & paid media</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Brand + visual rollout</p>
                  </div>
                  <Link
                    href="/startup/execution"
                    className={`${linkBtnStyle}`}
                  >
                    Execution & Delivery
                  </Link>
                </div>
              </div>
              <div className={listColLight}>
                <div className="flex items-center justify-between gap-4 border-b-2 pb-4 mb-4">
                  <MdWeb size={42} className="text-teal-400" />
                  <h4 className="font-bold upper">Web & Digital</h4>
                </div>
                <div className={ulIconList}>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Website design</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>UX + conversion UX</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>SEO fundamentals</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Landing page builds</p>
                  </div>
                  <div className={ilIconList}>
                    <FaCheck />
                    <p>Analytics setup</p>
                  </div>
                  <Link
                    href="/startup/web-and-digital"
                    className={`${linkBtnStyle}`}
                  >
                    Web & Digital
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
        <Testimonials />
        <section className={`${lightContainer} overflow-hidden`}>
            <Image
              src="/fractional-cmo-services.png"
              alt="Oliver Smith, Fractional CMO services"
              quality={100}
              width={800}
              height={800}
              priority
              className="h-auto absolute bottom-0 right-0 z-0"
            />
          <article className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start justify-between px-8 xl:px-0 py-20 relative overflow-hidden">
            <div className="flex flex-col gap-4 z-10">
              <h2 className={`${h2} ${textGradient}`}>
                Scale Smartly With Me As Your Assistant
              </h2>
              <p className="text-lg">
                Whether you&apos;re launching a product, seeking funding, or
                scaling your team, you need a marketing strategy built for
                traction, not theory.
              </p>
              <p className="text-lg">
                Let&apos;s talk about how I can support you as a trusted marketing
                partner.
              </p>
            </div>
            <ContactForm />
          </article>

        </section>
      </main>
      <Footer />
    </>
  );
}
