"use client";

import Link from "next/link";
import { menuData } from "../../app/menu-data";
import { usePathname } from "next/navigation";
import MenuMobile from "../menu-mobile/MenuMobile";
import BtnMobile from "../btn-mobile/BtnMobile";
import { useState } from "react";
import { orbitron } from "@/app/fonts";

export default function Header() {
  const pathname = usePathname();

  const [menuMobile, setMenuMobile] = useState(false);

  function openMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className="h-24 bg-color-secondary z-40 px-3   w-full items-center ">
      <div className="container flex justify-between h-24">
        <Link href="/" className="flex justify-between gap-4 items-center ">
          <div className="relative">
            <h2
              className={`${orbitron.className} bg-white p-2 rounded text-xl font-bold`}
            >
              Marcos Juvêncio
            </h2>
          </div>
        </Link>
        <BtnMobile onClick={openMenuMobile} open={menuMobile} />
        <nav className="hidden md:block h-24">
          <ul className="flex justify-center items-center h-24 gap-16">
            {menuData.map((nav) => {
              return (
                <li key={nav.title}>
                  <Link
                    className="text-white text-lg hover:text-orange-500 py-4 px-3 "
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
