import Link from "next/link";

export default function LinkStyled({ src, linkText }) {
  return (
    <Link
      href={src}
      className="text-sm font-bold mt-8 p-4 bg-gray-200 hover:bg-teal-200 w-fit border-b-4 border-gray-500 hover:border-teal-500 transition-all duration-500 rounded-xl"
    >
      {linkText}
    </Link>
  );
}
