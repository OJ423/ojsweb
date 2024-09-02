import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/PeterWilliams";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CallToAction from "@/components/CallToAction";
import LinkStyled from "@/components/LinkStyled";
import TechLogos from "@/components/TechLogos";
import Costs from "@/components/Costs";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";

export default function WebApps() {
  const codeString = `exports.fetchPostById = (post_id) => {
  return db.query('
    SELECT * 
    FROM posts
    WHERE post_id = $1;',
    [post_id])
  .then(({rows}) => {
    return rows
  })
}`;
  const costDesc = `Developing an application takes time and needs to be planned. Typically I would work towards developing a minimum viable product (MVP). Providing a cost before understanding your requirements is impossible as it depends on a myriad of criteria.
  
  For a simple back and front-end application, you are looking in the region of £5,000`;

  return (
    <>
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min mt-28 md:my-0 flex-col w-full items-center justify-center">
          <section className="md:min-h-screen flex flex-col gap-20 mx-auto w-5/6 justify-center items-center pb-20 md:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                  <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                    Curate and Display Data
                  </span>{" "}
                  To Business Stakeholders
                </h1>
                <p className="text-lg font-medium">
                  Share, create, and use data and content with beautiful and
                  intuitive web and mobile apps.
                </p>
                <LinkStyled src="/contact" linkText="Arrange a chat" />
              </div>
              <Image
                src="/flushfinder-mobile-app.jpg"
                alt="Flushfinder mobile app mockup"
                width={600}
                height={300}
                className="w-full h-auto rounded-xl"
                priority
                quality={100}
              />
            </div>
            <TechLogos />
          </section>
          <PeterWilliams />
          <ColumnsTwoFullH>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold w-full text-gray-800">
                Unlock Business Potential with{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  Data-Driven Web Apps
                </span>
              </h1>
              <p className="text-lg leading-7">
                I specialise in using existing data or collecting new
                information to create impactful solutions. Picture a retail app
                that customises user recommendations based on purchase history,
                or a healthcare app that gathers patient data to offer
                personalised health tips.
              </p>
              <p className="text-lg leading-7 font-medium">
                My full-stack expertise ensures your web application is both
                visually appealing and highly functional, transforming data into
                valuable insights for your business growth.
              </p>
              <LinkStyled src="/contact" linkText="Talk your needs" />
            </div>
            <div>
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                wrapLongLines={true}
                className="rounded-xl"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </ColumnsTwoFullH>
          <div className="bg-teal-100 mb-20 flex justify-center items-center">
            <Costs description={costDesc} cost="£5,000" />
          </div>
          <CallToAction />
          <section className="bg-gradient-to-br from-teal-100 to-cyan-200 flex flex-col gap-20 mx-auto w-full justify-center items-center py-20 px-4 pb-20">
            <div className="w-full md:w-11/12 flex flex-col gap-8">
              <h2 className="text-2xl md:text-3xl font-bold">{`Here's some of my work...`}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
                <Image
                  src="/portfolio/slidersgame-closeup.webp"
                  alt="Example game application"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Games and Interactive Fun
                  </h3>
                  <p className="mb-8">{`This is a game called sliders. It is a daily challenge game that gives a user five targets to hit using, surprisingly, sliders. It updates everyday and stores the user's scores in their local storage.`}</p>
                  <div className="flex gap-4 items-center">
                    <Link href="https://slidersgame.com">
                      <HiExternalLink
                        size={32}
                        title="slidersgame.com"
                        aria-label="link to the sliders game"
                      />
                    </Link>
                    <Link href="https://github.com/OJ423/sliders">
                      <IoLogoGithub
                        size={32}
                        title="Sliders Github repo"
                        aria-label="link to the sliders Github repo"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold my-4">
                Community Social Media App
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
                <Image
                  src="/portfolio/comm-you-nity-view.webp"
                  alt="Community View for community social media app"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
                <Image
                  src="/portfolio/comm-you-nity-group.webp"
                  alt="Group view and posts for community social media app"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
                <Image
                  src="/portfolio/react-page-nextjs.webp"
                  alt="Community View for community social media app"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Twitter, but friendly and for communities
                  </h3>
                  <p className="mb-4">{`I spoke with a number of village communities about creating a centralised place for villagers, schools, local businesses, and churches to share news, updates and interests. They wanted an alternative to Facebook, so I built Comm-you-nity.`}</p>
                  <p className="mb-8">{`The app features an SQL database, API server and Next.js front-end with user authentication.`}</p>
                  <div className="flex gap-4 items-center">
                    <Link
                      href="https://slidersgame.com"
                      className="flex flex-col items-center hover:opacity-50 transition-all duration-500 gap-2"
                    >
                      <IoLogoGithub
                        size={32}
                        title="slidersgame.com"
                        aria-label="link to the sliders game"
                      />
                      <p className="text-xs font-medium">Backend</p>
                    </Link>
                    <Link
                      href="https://github.com/OJ423/sliders"
                      className="flex flex-col items-center hover:opacity-50 transition-all duration-500 gap-2"
                    >
                      <IoLogoGithub
                        size={32}
                        title="Sliders Github repo"
                        aria-label="link to the sliders Github repo"
                      />
                      <p className="text-xs font-medium">Front-End</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}