import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

export function HeroBlog({ title, excerpt, slug, coverImage, author, date }) {
  return (
    <section>
      <div className="mb-8 md:mb-16 flex gap-8 justify-center items-center">
        <Image src={coverImage} alt={title} width={500} height={700} />
        <div className="p-4 flex flex-col gap-4">
          <div>
            <h3 className="mb-4 text-3xl lg:text-4xl leading-tight font-bold">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg font-medium"><DateFormatter dateString={date} /></div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
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
