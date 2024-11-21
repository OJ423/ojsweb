import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

export function HeroBlog({ title, excerpt, slug, coverImage, category, author, date }) {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="mb-8 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center bg-white">
        <div className="relative transition-all duration-500 hover:scale-105">
          <Link
            href={`/blog/${slug}`}
          >
            <Image src={coverImage} alt={title} width={800} height={800} />
          </Link>
          <div className="bg-gradient-to-br from-teal-500 to-indigo-600 p-2 right-4 bottom-4 text-white font-bold text-sm absolute rounded">
          <p className="">
            {category}
          </p>
        </div>
        </div>
        <div className="p-4 lg:p-8 pb-20 flex flex-col gap-4">
          <div>
            <h3 className="mb-4 text-2xl lg:text-4xl leading-tight font-bold">
              <Link
                href={`/blog/${slug}`}
                className="hover:underline"
              >
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg font-bold text-sm text-indigo-500">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <p className="lg:text-lg leading-relaxed mb-4">{excerpt}</p>
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
      </div>
    </section>
  );
}
