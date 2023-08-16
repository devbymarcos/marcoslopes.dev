"use client";

import Link from "next/link";
import { menuData } from "../../app/menu-data";

export default function Nav() {
  function modifyMenu(e) {
    e.target.style.transform = "translateX(30px)";
  }

  function initialMenu(e) {
    e.target.style.transform = "translateX(0px)";
  }
  return (
    <nav className="mt-10 mb-32">
      <ul className="">
        {menuData.map((navItem) => {
          return (
            <li className="" key={navItem.title}>
              <Link
                className=" text-white transition-all flex items-center gap-4 hover:text-orange-500 py-3 px-5 "
                href={navItem.path}
                target={navItem.props ? navItem.props.target : ""}
                onMouseEnter={modifyMenu}
                onMouseLeave={initialMenu}
              >
                <span
                  className={`w-[30px] tras h-[1px] bg-color-border block`}
                ></span>
                {navItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
