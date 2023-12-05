import Link from "next/link";

export default function BtnLink({ children, href, title, target }) {
  if (href == "#") {
    return (
      <button className="py-4 px-6 border-2 mt-3 focus:outline-none bg-btn-primary text-white font-bold   rounded-md uppercase">
        {children}
      </button>
    );
  }

  return (
    <>
      <Link
        className="py-4 px-6 border-2 mt-3 border-color-purple bg-btn-primary text-white font-bold inline-block   rounded-md uppercase"
        href={href}
        target={target ? target : ""}
        title={title}
      >
        {children}
      </Link>
    </>
  );
}
