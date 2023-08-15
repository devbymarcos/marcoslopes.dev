"use client";
import Link from "next/link";
import Image from "next/image";

export default function Card({
  children,
  title,
  urlImg,
  alt,
  urlLink,
  category,
}) {
  return (
    <>
      <Link
        data-category={category}
        href={urlLink}
        className="filter-list hover:-translate-y-3 p-2 rounded hover:bg-black  flex flex-start gap-2 mb-11 transition-all duration-700 "
      >
        <div className=" overflow-hidden w-[150px] h-[100px]  relative rounded-sm">
          <Image src={urlImg} alt={alt} fill />
        </div>
        <div className="mb-5 text-white w-4/5 ">
          <h2 className={` text-white text-lg  `}>{title}</h2>
          <p>{children}</p>
        </div>
      </Link>
    </>
  );
}
