import Navigation from "@/components/Navigation";
import { getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { BlogIntro } from "@/components/blog/BlogIntro";
import { HeroBlog } from "../../components/blog/HeroBlog";
import { MoreStories } from "@/components/blog/MoreStories";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DeskTopNav";

export default async function Blog() {
  const allPosts = await getAllPosts();

  const heroPost = await allPosts[0];

  const morePosts = allPosts.slice(1);

  const content = await markdownToHtml(heroPost.content || "");

  return (
    <>
        <Navigation />
        <DesktopNav />
        <main className="flex min-h-min flex-col w-full items-start justify-start">

          <HeroBlog 
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            category={heroPost.category}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />      
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Footer />
        </main>
    </>
  );
}
