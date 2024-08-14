import Navigation from "@/components/Navigation";
import Image from "next/image";
import PeterWilliams from "@/components/testimonials.js/PeterWilliams";
import LinkStyled from "@/components/LinkStyled";

export default function DesignServices() {

  return (
    <>
      <div className="flex min-h-screen items-center">
        <Navigation />
        <main className="flex min-h-min mt-28 md:my-0 flex-col w-full items-center justify-center pattern-cross pattern-green-600 pattern-bg-white pattern-size-6 pattern-opacity-20">
          <section className="md:min-h-screen flex flex-col gap-20 mx-auto w-5/6 justify-center items-center pb-20 md:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-center items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl xl:text-5xl font-bold w-full text-gray-800">
                  <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                    Aesthetically Pleasing
                  </span>{" "}
                  Graphic Design Services
                </h1>
                <p className="text-lg font-medium">
                  From pitch decks, brochures to website imagery, I am adept at creating on-brand imagery and collateral to make your business shine.
                </p>
                <LinkStyled src="/contact" linkText="Arrange a chat" />
              </div>
              <Image
                src="/graphic-design/Apple-Kiss.webp"
                alt="A vector graphic of an apple with the bite mark and shadow representing a man and woman about to kiss"
                width={600}
                height={300}
                className="lg:w-5/6 h-auto rounded-xl"
                priority
                quality={100}
              />
            </div>
          </section>
          <section className="my-20 w-11/12 md:w-5/6 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold w-full text-gray-800">
                Make things look{" "}
                <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                  pretty
                </span>
              </h2>
              <p className="text-lg leading-7">
                Graphic design services do not need much explanation. You have an idea and you want it to be displayed nicely, portray the right message and help achieve its business objective.
              </p>
              <p className="text-lg leading-7 font-medium">
                I charge £35 per hour for my graphic design services. All rights to images and collateral produced by me belong to you. Use me as a one off or book a retainer, discounts available.
              </p>
              <p className="text-lg leading-7 font-medium">
                If you are interested, the best port-of-call is to arrange a
                chat to discuss your needs.
              </p>
              <LinkStyled src="/contact" linkText="Arrange a chat" />
            </div>
          </section>
          <section className="flex flex-col gap-8 my-20 p-4 md:p-8 lg:p-20">
            <h2 className="text-3xl font-bold w-full text-gray-800">
              Here is a sample of my {" "}
              <span className="bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                work
              </span>
            </h2>
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <Image 
                src="/marketing/terminusdb-popup-banner-design.webp"
                alt="Pop Up Banner Design"
                title="2m x 2m Pop Up Banner Design"
                width={500}
                height={500}
                className="w-full h-auto rounded text-center"
              />
              <Image 
                src="/graphic-design/Apple-Kiss.webp"
                alt="A vector graphic of an apple with the bite mark and shadow representing a man and woman about to kiss"
                title="Graphic design for fun"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              <Image 
                src="/graphic-design/from-despair-to-where.webp"
                alt="Book cover for From Despair to Where zombie novel"
                width={500}
                height={500}
                className="w-auto h-auto rounded max-h-96 mx-auto"
              />
              <Image 
                src="/graphic-design/SuperCrunch-Brochure-1.jpg"
                alt="Fast food brochure front cover showing a bowl of loaded fries"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              <Image 
                src="/graphic-design/SuperCrunch-Brochure-2.jpg"
                alt="Fast food brochure showing product listing"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              <Image 
                src="/graphic-design/SuperCrunch-Brochure-3.jpg"
                alt="Fast food brochure front showing pictures of french fry varieties"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              <Image 
                src="/graphic-design/childrens-book-illustration.webp"
                alt="Children's book illustration showing 4 trolls sat in a cave around a camp fire"
                width={500}
                height={500}
                className="w-full h-auto rounded md:col-span-2"
              />
              <Image 
                src="/graphic-design/Motor-Girl.webp"
                alt="Graphic design of woman in motorcycle leathers"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              <Image 
                src="/graphic-design/VersionXL-Presentation-1.jpg"
                alt="Pitch deck example for a product called VersionXL"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              <Image 
                src="/graphic-design/VersionXL-Presentation-2.jpg"
                alt="Detailing the problem of using Excel in a pitch deck"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              <Image 
                src="/graphic-design/VersionXL-Presentation-3.jpg"
                alt="Another page from the VersionXL pitch deck"
                width={500}
                height={500}
                className="w-full h-auto rounded"
              />
              
            </div>

          </section>
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