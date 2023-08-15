"use client";

import Link from "next/link";
import { menuData } from "../../app/menu-data";

export default function Nav() {
  return (
    <nav className="mt-10">
      <ul className="">
        {menuData.map((navItem) => {
          return (
            <li className="" key={navItem.title}>
              <Link
                className=" text-white flex items-center gap-4 hover:text-orange-500 py-3 px-5 "
                href={navItem.path}
                target={navItem.props ? navItem.props.target : ""}
              >
                <span className="w-[30px] tras h-[1px] bg-color-border block"></span>
                {navItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
