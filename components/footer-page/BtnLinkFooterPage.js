import Link from "next/link";
export default function BtnLinkFooterPage({ children, href, title }) {
  return (
    <>
      <Link
        className="bg-purple-900 font-bold my-12 uppercase py-3 px-6 inline-block rounded-md"
        href={href}
        target="_bank"
        title={title}
      >
        {children}
      </Link>
    </>
  );
}
