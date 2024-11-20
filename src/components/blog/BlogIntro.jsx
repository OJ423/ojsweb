export function BlogIntro() {
  return (
    <section className="grid grid-cols-1 mt-20 md:mt-0 md:grid-cols-3 flex items-center md:justify-between py-4 md:py-8 bg-gradient-to-br from-teal-500 to-indigo-600 text-white px-8 w-full">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        My Blog.
      </h1>
      <p className="text-left md:text-xl font-semibold md:col-span-2 hidden md:block">
        A collection of blogs on marketing, web development and graphic design to help people looking to grow their businesses.
      </p>
    </section>
  );
}