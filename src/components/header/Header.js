"use client";

import Link from "next/link";
import { menuData } from "../../app/menu-data";
import { usePathname } from "next/navigation";
import MenuMobile from "../menu-mobile/MenuMobile";
import BtnMobile from "../btn-mobile/BtnMobile";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const [menuMobile, setMenuMobile] = useState(false);

  function openMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className="h-24 bg-secondary-light z-40 px-3    w-full items-center ">
      <div className="container-custom  flex justify-between h-24">
        <Link href="/" className="flex justify-between gap-4 items-center ">
          <Image
            src="/images/logo-marcos-black.png"
            alt="logo Marcos"
            width={70}
            height={22}
          />
        </Link>
        <BtnMobile onClick={openMenuMobile} open={menuMobile} />
        <nav className="hidden md:block h-24">
          <ul className="flex justify-center items-center h-24 gap-16">
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
