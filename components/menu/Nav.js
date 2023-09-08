"use client";

import Link from "next/link";
import { menuData } from "../../app/menu-data";
import style from "./style.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        {menuData.map((navItem) => {
          return (
            <li className="" key={navItem.title}>
              <Link
                className=" "
                href={navItem.path}
                target={navItem.props ? navItem.props.target : ""}
              >
                {navItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
