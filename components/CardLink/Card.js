"use client";
import Link from "next/link";
import Image from "next/image";

export default function Card({ title, urlImg, alt, urlLink, category }) {
  return (
    <>
      <Link
        data-category={category}
        href={urlLink}
        className="hover:-translate-y-3 transition-all justify-self-auto"
      >
        <div className="w-full h-[270px] overflow-hidden relative rounded-sm">
          <Image className="object-cover w-full " src={urlImg} alt={alt} fill />
        </div>
        <div className="my-5 text-center  text-[30px]">
          <h2 className={` text-white  `}>{title}</h2>
        </div>
      </Link>
    </>
  );
}
