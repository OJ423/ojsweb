import Image from "next/image";
import DateFormatter from "./DateFormatter";
import Link from "next/link";

export function PostHeader({ title, excerpt, slug, coverImage, author, date }) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4">
        <Image
          src={coverImage}
          alt={title}
          width={600}
          height={600}
          className="w-full md:w-2/3 lg:w-1/2 h-auto mx-auto px-0 pb-8 md:px-0"
        />
        <div className="px-4 md:px-0 flex flex-col gap-4 mx-auto w-full md:w-2/3 lg:w-1/2">
          <div>
            <h1 className="mb-4 text-4xl lg:text-5xl leading-tight font-bold">
              {title}
            </h1>
            <div className="mb-4 md:mb-0 text-lg font-medium">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={author.picture}
              alt={author.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-sm font-medium">{author.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
