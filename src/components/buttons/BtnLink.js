import Link from "next/link";

export default function BtnLink({ children, href, title, target }) {
  if (href == "#") {
    return (
      <button className="py-4 px-6 border-2 mt-3 focus:outline-none bg-pink-custom text-white font-bold    uppercase">
        {children}
      </button>
    );
  }

  return (
    <>
      <Link
        className="min-w-[160px] text-center px-6 py-3 text-md rounded-md  transition-all inline-block    bg-gradient-to-r from-orange-custom to-pink-custom font-bold text-white "
        href={href}
        target={target ? target : ""}
        title={title}
      >
        {children}
      </Link>
    </>
  );
}
