import Link from "next/link";
import DateFormatter from "./DateFormatter";
import Image from "next/image";

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  category,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5 relative transition-all duration-500 hover:scale-105">
        <Link href={`/blog/${slug}`}>
          <Image
            src={coverImage}
            alt={title}
            width={800}
            height={700}
            className="rounded"
          />
        </Link>
        <div className="bg-gradient-to-br from-teal-500 to-indigo-600 p-2 right-4 bottom-4 text-white font-bold text-sm absolute rounded">
          <p className="">
            {category}
          </p>
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-4 text-indigo-500 font-bold">
        <DateFormatter dateString={date} />
      </div>
      <p className="md:text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="flex gap-4 items-center">
        <Image
          src={author.picture}
          alt={author.name}
          width={50}
          height={50}
          className="rounded-full w-8 h-8 md:w-10 md:h-10"
        />
        <p className="text-sm font-medium">{author.name}</p>
      </div>
    </div>
  );
}
