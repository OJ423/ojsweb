import {
  FcVoicePresentation,
  FcTemplate,
  FcDocument,
  FcCommandLine,
} from "react-icons/fc";
import LinkStyled from "./LinkStyled";

export default function CallToAction() {
  return (
    <section className="md:min-h-screen flex flex-col gap-20 mx-auto w-full justify-center items-center py-20 px-4 ">
      <div className="px-[8%] xl:px-[12%] mx-auto flex flex-col gap-20">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold pb-6 mb-6 border-b-2 w-fit">
            My working process...
          </h2>
          <p className="text-lg font-medium">
            {`I'm a methodical person. I typically work in the following way. The best thing to do is to get in touch with an overview of what you want. This will give me chance to do a bit of research before we speak.`}
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-start">
            <FcVoicePresentation size={100} className="mb-8" />
            <h2 className="text-xl font-bold mb-2 ">
              Discuss needs
            </h2>
            <p className="">
              Our first port of call would be to meet or have a call to talk
              about your needs and timescales.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <FcDocument size={100} className="mb-8" />
            <h2 className="text-xl font-bold mb-2 ">
              Proposal & Quote
            </h2>
            <p className="">
              {`I'll put together a proposal and quote that details everything I will including cost breakdowns.`}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <FcTemplate size={100} className="mb-8" />
            <h2 className="text-xl font-bold mb-2 ">Wireframes</h2>
            <p className="">
              {`Wireframes (if not supplied) will be sent for you to approve before development begins.`}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <FcCommandLine size={100} className="mb-8" />
            <h2 className="text-xl font-bold mb-2 ">
              Build and Test
            </h2>
            <p className="">{`I'll get to work in a dev environment, testing as I build. After a demo, and with your approval, I will deploy your app.`}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold pb-6 mb-6 border-b-2 w-fit bg-gradient-to-br from-teal-500 to-indigo-600 text-transparent bg-clip-text">
            Get in touch to begin...
          </h2>
          <p className="mb-16">Send me a message to arrange a chat.</p>
          <LinkStyled src="/contact" linkText="Arrange a chat" />
        </div>
      </div>
    </section>
  );
}
