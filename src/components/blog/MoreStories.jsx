import { PostPreview } from "./PostPreview";

export function MoreStories({ posts }) {
  return (
    <section className="px-8 xl:px-0 max-w-screen-xl mx-auto">
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            category={post.category}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}