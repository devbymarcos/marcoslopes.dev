"use client";
import Image from "next/image";
import Link from "next/link";
import { menuData } from "../../app/menu-data";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="h-24 bg-color-secondary z-40 flex justify-between fixed w-full items-center pl-10 pr-10">
      <Link href="/#" className="flex justify-between gap-4 items-center ">
        <div className="rounded-full overflow-hidden relative  h-14 w-14">
          <Image
            className="object-cover"
            fill
            src="/images/marcos.jpg"
            alt="avatar"
          />
        </div>

        <Image
          src="/images/marcoslopes-dev.png"
          alt="logo devbymarcos"
          width={154}
          height={18}
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex justify-center items-center gap-16">
          {menuData.map((navItem) => {
            return (
              <li key={navItem.title}>
                <Link
                  className="text-white hover:text-orange-500 font-bold py-4 px-5 "
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
    </header>
  );
}
