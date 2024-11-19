export function BlogIntro() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 flex items-center md:justify-between py-8 bg-gradient-to-br from-teal-500 to-indigo-600 text-white px-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        My Blog.
      </h1>
      <h4 className="text-center md:text-left text-xl font-semibold md:col-span-2">
        A collection of blogs on marketing, web development and graphic design to help people looking to grow their businesses.
      </h4>
    </section>
  );
}