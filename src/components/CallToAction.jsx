import {
  FcVoicePresentation,
  FcTemplate,
  FcDocument,
  FcCommandLine,
} from "react-icons/fc";
import { h2, textGradient } from "./customStyles";
import ContactCta from "./ContactCta";

export default function CallToAction() {
  return (
    <>
    <section className="flex flex-col gap-20 mx-auto w-full justify-center items-center py-20 px-8 lg:px-4 max-w-screen-lg">
      <div className="mx-auto flex flex-col gap-20">
        <div>
          <h2 className={`${h2} ${textGradient}`}>
            My working process...
          </h2>
          <p className="text-lg font-medium">
            {`I'm a methodical person. I typically work in the following way. The best thing to do is to get in touch with an overview of what you want. This will give me chance to do a bit of research before we speak.`}
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
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
      </div>
    </section>
    <ContactCta />
    </>
  );
}
