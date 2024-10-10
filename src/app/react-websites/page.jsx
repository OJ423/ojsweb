import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/PeterWilliams";
import ColumnsTwoFullH from "@/components/ColumnsTwoFullH";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Portfolio from "@/components/Portfolio";
import CallToAction from "@/components/CallToAction";
import LinkStyled from "@/components/LinkStyled";
import TechLogos from "@/components/TechLogos";
import Costs from "@/components/Costs";
import { images } from "@/components/constants";


export default function ReactWebsites() {
  const costDescription =
    "The cost of your React site depends on your needs. How many pages, what level of customisation and many other factors. A site like this for example would cost in the region of £1,000.";
  const codeString = `useEffect(() => {
    if (user && selectedCommunity) {
      const fetchData = async() => {
        try {
          const data = await getUsersCommunityPosts(+user.user_id, selectedCommunity.community_id, filter)
          setUserPosts(data.posts)

        } catch(error:any) {
          console.log(error)
        }
      }
      fetchData()
    }
  },[user, selectedCommunity, filter])`;
  return (
    <>
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min flex-col w-full items-center justify-center pattern-cross pattern-green-600 pattern-bg-white pattern-size-6 pattern-opacity-20">
          <section className={`min-h-screen flex flex-col gap-20 mx-auto px-[8%] justify-center items-center py-20 bg-[url("/full-bloom.webp")]`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                  <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                    Lightning Quick React Websites
                  </span>{" "}
                  To Showcase Your Business
                </h1>
                <p className="text-lg font-medium">
                  Beautiful and highly performant websites and blogs crafted to
                  your spec.
                </p>
                <LinkStyled src="/contact" linkText="Arrange a chat" />
              </div>
              <Image
                src="/portfolio/animated-display-website.webp"
                alt="Screenshot of an app I built"
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
              <h2 className="text-3xl font-bold w-full text-gray-800">
                A website for{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  the best of you
                </span>
              </h2>
              <p className="text-lg leading-7">
                With a background spanning tech start-ups and multi-nationals, I
                understand the need to tailor your website around your
                specifics.
              </p>
              <p className="text-lg leading-7 font-medium">
                React frameworks enable tailor-made functionality. Whether that
                is interactive tools or custom layouts that template sites
                cannot handle, I can craft a website to showcase exactly what
                your customers need to see.
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
          <section className="bg-gradient-to-br from-teal-100 to-cyan-200 md:min-h-screen flex flex-col gap-20 mx-auto w-full justify-center items-center py-20 px-4">
            <h2 className="text-2xl md:text-3xl font-bold">{`Here's some of my work...`}</h2>
            <Portfolio images={images} />
          </section>
          <Costs description={costDescription} cost="£1,000" />
          <CallToAction />
        </main>
      </div>
    </>
  );
}
