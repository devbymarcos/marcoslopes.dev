import Link from "next/link";

export default function BtnLink({ children, href, title }) {
  return (
    <>
      <Link
        className="py-4 px-6 border-2 border-color-purple hover:bg-color-purple text-white font-bold   rounded-md uppercase"
        href={href}
        target="_bank"
        title={title}
      >
        {children}
      </Link>
    </>
  );
}
