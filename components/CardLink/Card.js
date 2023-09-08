"use client";
import Link from "next/link";
import Image from "next/image";
import TagSkill from "../tag-skill/TagSkill";
import style from "./style.module.css";

export default function Card({
  children,
  title,
  urlImg,
  alt,
  urlLink,
  category,
  stacks,
}) {
  return (
    <>
      <Link data-category={category} href={urlLink} className={style.card}>
        <div className=" overflow-hidden w-[150px] h-[100px]  relative rounded-sm">
          <Image src={urlImg} alt={alt} fill />
        </div>
        <div className={style.cardBody}>
          <h1>{title}</h1>
          {children}
        </div>
      </Link>
    </>
  );
}
