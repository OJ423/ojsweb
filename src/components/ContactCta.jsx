import Image from "next/image";
import ContactForm from "./ContactForm";
import { darkContainer, flexRowDarkBkg, h2 } from "./customStyles";

export default function ContactCta() {
  return (
    <section className={`${darkContainer} overflow-hidden`}>
        <Image
          src="/fractional-cmo-services.png"
          alt="Oliver Smith, Fractional CMO services"
          quality={100}
          width={800}
          height={800}
          priority
          className="h-auto absolute bottom-0 right-0"
        />
      <article className="grid md:grid-cols-2 max-w-screen-lg mx-auto items-start gap-8 text-white relative">
        <div className="flex flex-col gap-8">
          <h2 className={h2}>Let&apos;s talk about your project</h2>
          <p>
            Get in touch to discuss your needs. I can help for ad-hoc projects
            or you can contract me for a period of your choosing.
          </p>
        <ContactForm />
        </div>
      </article>
    </section>
  );
}
