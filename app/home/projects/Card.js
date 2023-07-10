"use client";
import Link from "next/link";
import Image from "next/image";

export default function CardCmape({ title, urlImg, alt, urlLink }) {
  return (
    <>
      <Link id="cmape" href={urlLink} className="">
        <div className="w-full   h-[270px] overflow-hidden relative rounded-sm">
          <Image className="object-cover w-full " src={urlImg} alt={alt} fill />
        </div>
        <div className="my-5 text-center  text-[30px]">
          <h2 className={` text-white  `}>{title}</h2>
        </div>
      </Link>
    </>
  );
}
