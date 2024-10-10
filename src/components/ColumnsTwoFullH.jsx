import { Children } from "react";

export default function ColumnsTwoFullH({children}) {
  return (
    <section className="md:min-h-screen flex flex-col gap-20 mx-auto w-5/6 justify-center items-center py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-20 justify-center items-center">
        {children}
      </div>
    </section>
  );
}
