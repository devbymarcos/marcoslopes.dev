"use client";

import Link from "next/link";
import { menuData } from "../../app/menu-data";
import { usePathname } from "next/navigation";
import MenuMobile from "../menu-mobile/MenuMobile";
import BtnMobile from "../btn-mobile/BtnMobile";
import { useEffect, useState } from "react";
import { firaCode } from "@/app/fonts";

export default function Header() {
  const pathname = usePathname();

  const [menuMobile, setMenuMobile] = useState(false);

  function openMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   if (window.innerWidth > 769) {
    //     const scroll = window.scrollY;
    //     const header = document.querySelector(".header-nav");
    //     if (scroll > 100) {
    //       header.classList.remove("py-8");
    //       header.classList.add("py-3");
    //     } else {
    //       header.classList.remove("py-3");
    //       header.classList.add("py-8");
    //     }
    //   }
    // });
  });

  return (
    <header className="header-nav  fixed top-0 transition-all bg-primary-light dark:bg-primary-dark z-40 px-3 border-b border-blue-custom-light   w-full h-[55px] items-center   ">
      <div className=" flex items-center gap-10 h-[55px] ">
        <Link
          href="/"
          className={`${firaCode.className} flex justify-between  gap-4 items-center md:w-[300px] font-bold text-xl text-blue-custom-light pl-8 `}
        >
          {/* <LogoSVG color={"#000"} width={70} height={22} /> */}
          Marcos Lj
        </Link>
        <BtnMobile onClick={openMenuMobile} open={menuMobile} />
        <nav className="hidden md:block">
          <ul className="flex justify-center items-center last:border-r last:border-blue-custom-light  ">
            {menuData.map((nav) => {
              return (
                <li
                  className="border-l border-blue-custom-light h-[55px]"
                  key={nav.title}
                >
                  <Link
                    className={` ${firaCode.className}  px-11 block  border-blue-custom-light text-font-color dark:text-font-color-dark   text-sm hover:text-pink-custom py-4 `}
                    href={nav.path}
                  >
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <MenuMobile active={menuMobile} onClick={openMenuMobile} />
      </div>
    </header>
  );
}
