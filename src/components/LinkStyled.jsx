import Link from "next/link";

export default function LinkStyled({ src, linkText }) {
  return (
    <Link
      href={src}
      className="text-lg font-bold mt-4 px-4 py-2 bg-blue-600 border-blue-600 text-white w-fit border-4 hover:bg-transparent hover:text-white hover:border-white transition-all duration-500 rounded-full"
    >
      {linkText}
    </Link>
  );
}
