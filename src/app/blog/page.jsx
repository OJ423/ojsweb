import Navigation from "@/components/Navigation";
import { getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import markdownStyles from "../../components/markdown-styles.module.css";
import { BlogIntro } from "@/components/blog/BlogIntro";
import { HeroBlog } from "../../components/blog/HeroBlog";

export default async function Blog() {
  const allPosts = await getAllPosts();

  const heroPost = await allPosts[0];
  const content = await markdownToHtml(heroPost.content || "");
  return (
    <>
      <div className="flex min-h-screen items-start">
        <Navigation />
        <main className="flex min-h-min flex-col w-full items-start justify-start">
          <BlogIntro />
          <HeroBlog 
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          {/* <div className="max-w-2xl mx-auto">
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div> */}
        </main>
      </div>
    </>
  );
}
