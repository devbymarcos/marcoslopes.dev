"use client";

import Link from "next/link";
import { menuData } from "../../app/menu-data";
import { usePathname } from "next/navigation";
import MenuMobile from "../menu-mobile/MenuMobile";
import BtnMobile from "../btn-mobile/BtnMobile";
import { useEffect, useState } from "react";
import { LogoSVG } from "../logo-svg/LogoSVG";

export default function Header() {
  const pathname = usePathname();

  const [menuMobile, setMenuMobile] = useState(false);

  function openMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const header = document.querySelector(".header-nav");
      if (scroll > 100) {
        header.classList.remove("py-8");
        header.classList.add("py-3");
      } else {
        header.classList.remove("py-3");
        header.classList.add("py-8");
      }
    });
  });

  return (
    <header className="header-nav py-8 fixed top-0 transition-all bg-secondary-light dark:bg-primary-dark z-40 px-3    w-full items-center dark:shadow-sm dark:shadow-neutral-500 dark:shad ">
      <div className="container-custom  flex justify-between ">
        <Link href="/" className="flex justify-between gap-4 items-center ">
          <LogoSVG color={"#fff"} width={70} height={22} />
        </Link>
        <BtnMobile onClick={openMenuMobile} open={menuMobile} />
        <nav className="hidden md:block">
          <ul className="flex justify-center items-center  gap-16">
            {menuData.map((nav) => {
              return (
                <li key={nav.title}>
                  <Link
                    className="text-font-color dark:text-font-color-dark   text-md hover:text-orange-500 py-4 px-2 font-bold "
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
