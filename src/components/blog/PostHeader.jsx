import Image from "next/image";
import DateFormatter from "./DateFormatter";
import Link from "next/link";

export function PostHeader({ title, excerpt, slug, coverImage, author, date }) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 max-w-screen-md mx-auto">
        <Image
          src={coverImage}
          alt={title}
          width={600}
          height={600}
          className="max-w-screen-md h-auto mx-auto w-full rounded-xl px-0 md:px-0"
        />
        <div className="px-4 xl:px-0 flex flex-col gap-4 max-w-screen-md mt-4">
          <div>
            <h1 className="mb-4 text-4xl lg:text-5xl leading-tight font-bold">
              {title}
            </h1>
            <div className="mb-4 md:mb-0 text-lg font-medium text-indigo-500">
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
