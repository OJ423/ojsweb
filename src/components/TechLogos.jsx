import Image from "next/image";

export default function TechLogos() {
  return (
    <div className="flex gap-8 items-center justify-center flex-wrap">
      <Image
        src="/logos/js.png"
        alt="Javascript logo"
        width={80}
        height={90}
        className="w-auto h-8"
        priority
        quality={100}
      />
      <Image
        src="/logos/typescript.png"
        alt="TypeScript logo"
        width={80}
        height={90}
        className="w-auto h-8"
        priority
        quality={100}
      />
      <Image
        src="/logos/next.svg"
        alt="Next.js logo"
        width={80}
        height={90}
        className="w-16 h-auto"
        priority
        quality={100}
      />
      <Image
        src="/logos/Gatsby-Logo.svg"
        alt="Next.js logo"
        width={80}
        height={90}
        className="w-16 h-auto"
        priority
        quality={100}
      />
      <Image
        src="/logos/react.png"
        alt="React logo"
        width={80}
        height={90}
        className="w-auto h-8"
        priority
        quality={100}
      />
      <Image
        src="/logos/vue.png"
        alt="Vue logo"
        width={80}
        height={90}
        className="w-auto h-8"
        priority
        quality={100}
      />
      <Image
        src="/logos/postgresql-96.png"
        alt="PostgreSQL logo"
        width={80}
        height={90}
        className="w-auto h-8"
        priority
        quality={100}
      />
      <Image
        src="/logos/mongodb-96.png"
        alt="MongoDB logo"
        width={80}
        height={90}
        className="w-auto h-8"
        priority
        quality={100}
      />
      <Image
        src="/logos/firebase-96.png"
        alt="Firebase logo"
        width={80}
        height={90}
        className="w-auto h-8"
        priority
        quality={100}
      />
    </div>
  );
}
