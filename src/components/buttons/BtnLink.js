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
        className="py-4 px-6  mt-3 border-color-purple bg-pink-custom text-white font-bold inline-block    uppercase"
        href={href}
        target={target ? target : ""}
        title={title}
      >
        {children}
      </Link>
    </>
  );
}
