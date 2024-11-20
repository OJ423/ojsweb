import { BlogIntro } from "@/components/blog/BlogIntro";
import Navigation from "@/components/Navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import Link from "next/link";
import PostBody from "@/components/blog/PostBody";
import { PostHeader } from "@/components/blog/PostHeader";
import Footer from "@/components/Footer";

export default async function Post(props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex min-h-screen items-start">
      <Navigation />
      <main className="flex min-h-min flex-col w-full items-start justify-start">
        <BlogIntro />
        <div className="w-full px-4 md:mx-8 py-4">
          <Link
            href="/blog"
            className="text-sm font-bold transition-all duration-500 text-teal-500 hover:text-indigo-500"
          >
            {`<< Back to Blog`}
          </Link>
        </div>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
        <section className="flex flex-col gap-4 w-full px-4 py-8 mx-auto md:w-2/3 md:px-0 lg:w-1/2">
          <PostBody content={content} />
        </section>
      <Footer />
      </main>
    </div>
  );
}

export async function generateMetadata(props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | OJSWEB`;
  const description = post.excerpt.slice(0, 161);

  return {
    title,
    description,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
