"use client";
import Link from "next/link";
import { menuData } from "../../app/menu-data";
import { usePathname } from "next/navigation";
import MenuMobile from "../menu-mobile/MenuMobile";
import BtnMobile from "../btn-mobile/BtnMobile";
import { useEffect, useState } from "react";
import { firaCode, poppins } from "@/app/fonts";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const [menuMobile, setMenuMobile] = useState(false);

  function openMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 769) {
        const scroll = window.scrollY;
        const header = document.querySelector(".header-nav");
        if (scroll > 100) {
          header.classList.remove("py-12");
          header.classList.add("py-6");
        } else {
          header.classList.remove("py-6");
          header.classList.add("py-12");
        }
      }
    });
  });

  return (
    <header className="header-nav   fixed top-0 transition-all bg-primary-light dark:bg-primary-dark z-40 px-3 sm:px-0    w-full  items-center  py-12 ">
      <div className=" flex gap-4 items-center justify-between px-3  md:px-0   container-custom  ">
        <Link
          href="/"
          className={`${poppins.className} flex justify-between   items-center   text-2xl text-primary-light `}
        >
          devbymarcos
        </Link>
        <nav className="hidden md:block justify-self-start">
          <ul className="flex justify-center items-center  ">
            {menuData.map((nav) => {
              return (
                <li className=" " key={nav.title}>
                  <Link
                    className={` ${firaCode.className} hover:text-font-color px-8 block   dark:text-font-color-dark   text-sm  `}
                    href={nav.path}
                  >
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <BtnMobile onClick={openMenuMobile} open={menuMobile} />
        <MenuMobile active={menuMobile} onClick={openMenuMobile} />
        <Link
          href="https://hotmart.com/pt-br/club/dbmcode"
          className="text-white hidden md:block"
          target="_blank"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
