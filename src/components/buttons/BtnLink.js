import Link from "next/link";

export default function BtnLink({ children, href, title, target }) {
  if (href == "#") {
    return (
      <button className="py-2 px-2 border-2 mt-3 focus:outline-none bg-indigo-600 text-white font-bold    uppercase">
        {children}
      </button>
    );
  }

  return (
    <>
      <Link
        className="text-center px-4 py-3 text-sm rounded-lg  transition-all inline-block    bg-indigo-600 font-bold text-white "
        href={href}
        target={target ? target : ""}
        title={title}
      >
        {children}
      </Link>
    </>
  );
}
