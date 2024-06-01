import { menuData } from "@/app/menu-data";
import Link from "next/link";
import { firaCode } from "@/app/fonts";

export default function MenuMobile({ active, onClick }) {
  return (
    <>
      <aside
        className={` ${
          active ? "left-0" : "-left-[100%]"
        } fixed w-full top-24 bg-primary-light  transition-all dark:bg-secondary-dark   h-screen`}
      >
        <nav>
          <ul>
            {menuData.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={onClick}
                  className={`${firaCode.className} p-8 block hover:bg-color-secondary  hover:bg-pink-custom hover:text-font-color-dark text-font-color dark:text-font-color-dark`}
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
