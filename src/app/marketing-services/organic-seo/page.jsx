"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/PeterWilliams";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import LinkStyled from "@/components/LinkStyled";
import Packages from "@/components/Packages";
import { useEffect, useState } from "react";

export default function OrganicSEO() {
  const packageDescription =
    "A three month package would enable provide you with 48 hours of my time. This includes SEO tools such as Ahrefs saving you further money on software packages.";
  const packageTitle = "3 Month Starter Package";
  const packageFeatures = [
    "16 hours per month x 3",
    "Site Audit",
    "Topic & Keyword Research",
    "SEO Plan",
    "On-Page Optimisation",
    "Internal Link Building",
    "External Link Building",
    "SEO Optimised Content Generation",
  ];

  return (
    <>
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min mt-24 md:my-0 flex-col w-full items-center justify-center pattern-cross pattern-green-600 pattern-bg-white pattern-size-6 pattern-opacity-20">
          <section className="min-h-screen flex flex-col gap-20 mx-auto w-5/6 lg:w-2/3 xl:w-5/6 justify-center items-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-center items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                  <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                    Connect With YOUR Audience
                  </span>{" "}
                  Using Organic SEO
                </h1>
                <p className="text-lg font-medium">
                  Thought-leadership, piquing interest and talking to the
                  correct audience are the most effective ways to increase brand
                  awareness and long-term customer acquisition.
                </p>
                <p className="text-lg font-medium">
                  My organic SEO services are proven to increase web traffic and
                  lead generation.
                </p>
                <LinkStyled src="/contact" linkText="Arrange a chat" />
              </div>
              <Image
                src="/marketing/organic-seo-services.webp"
                alt="A screenshot of an article talking about data mesh"
                width={600}
                height={300}
                className="lg:w-5/6 h-auto rounded-xl hidden xl:block"
                priority
                quality={100}
              />
            </div>
          </section>
          <section className="flex flex-col w-5/6 lg:w-3/5 gap-20 my-20">
            <section className="flex flex-col gap-8 p-8 bg-teal-100 rounded-xl">
              <h2 className="font-bold text-xl">
                My previous roles resulted in -
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <p className="text-teal-500 text-4xl font-bold text-center md:text-left">{`> 1000 % Growth`}</p>
                <p className="text-sm text-gray-600 font-medium">
                  {`I grew TerminusDB's organic web traffic from under 200 monthly visitors to over 10,000, generating over 1,200 leads in just 12 months.`}{" "}
                </p>
              </div>
              <div className="border-t-2 border-teal-500 my-4"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <p className="text-teal-500 text-4xl font-bold text-center md:text-left">{`125 % Growth`}</p>
                <p className="text-sm text-gray-600 font-medium">
                  Food manufacturer Aviko saw their web visitors increase from
                  2,000 monthly visitors to 4,500 visitors in under 12 months
                  and exponentially improved lead generation.{" "}
                </p>
              </div>
            </section>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold w-full text-gray-800">
                Talk for your{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Clients
                </span>
              </h2>
              <p className="text-lg leading-7">
                I believe that by educating, inspiring, amusing or helping
                people with content is the most effective way to build
                awareness, trust and custom. This is the fundamental building
                block for my organic search engine optimisation services.
              </p>
              <p className="text-lg leading-7 font-medium">
                The service encompasses technical SEO to optimise your current
                site. Keyword research and competitor analysis determine
                opportunities and low hanging fruit to form a plan of attack.
              </p>
              <p className="text-lg leading-7 font-medium">
                From there I will concentrate on SEO optimised content, link
                building and continual improvement of your owned channels.
              </p>
              <p className="text-lg leading-7 font-medium">
                If you are interested, the best port-of-call is to arrange a
                chat to discuss your needs.
              </p>
              <LinkStyled src="/contact" linkText="Arrange a chat" />
            </div>
          </section>
          <section className="bg-teal-100 rounded-xl p-8 grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8 lg:gap-20 w-11/12 mx-auto md:w-5/6 items-center mb-20">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold w-full text-gray-800">
                The Key Is{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Consistency
                </span>
              </h2>
              <p className="text-lg leading-7 font-medium">
                Organic SEO is not a quick fix. It takes time for changes to
                correlate across search engines, but with the right craft and
                care, results can steadily increase month by month.
              </p>
              <p className="text-lg leading-7 font-medium">
                I would recommend hiring me for a minimum of three months to
                start to see an increase in web traffic and website generated
                enquiries. If you have junior marketing staff I can teach best
                practices so you can continue without my assistance and still
                reap the rewards.
              </p>
            </div>
            <div>
              <Image
                src="/marketing/organic-seo-results.svg"
                alt="Mock up of google browser on desktop"
                width={600}
                height={600}
                quality={80}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </section>
          <Packages
            description={packageDescription}
            title={packageTitle}
            features={packageFeatures}
            cost="£1,800"
          />
          <PeterWilliams />
          <section className="mb-40">
            <h2 className="text-2xl sm:text-4xl font-bold pb-6 mb-6 border-b-2 w-fit bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
              Get in touch to begin...
            </h2>
            <p className="mb-16">Send me a message to arrange a chat.</p>
            <LinkStyled src="/contact" linkText="Arrange a chat" />
          </section>
        </main>
      </div>
    </>
  );
}
