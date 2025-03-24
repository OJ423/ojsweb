import { Children } from "react";

export default function ColumnsTwoFullH({children}) {
  return (
    <section className="flex flex-col gap-20 mx-auto max-w-screen-lg justify-center items-center py-40 px-8 xl:px-0 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 justify-center items-center">
        {children}
      </div>
    </section>
  );
}
