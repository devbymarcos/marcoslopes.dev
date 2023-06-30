import Image from "next/image";
import Link from "next/link";
import { menuData } from "../../app/menu-data";

export default function Header() {
  return (
    <header className="h-24 bg-color-secondary flex justify-between fixed w-full items-center pl-10 pr-10">
      <Link href="/#" className="flex justify-between gap-4 items-center ">
        <div className="rounded-full overflow-hidden relative  h-14 w-14">
          <Image
            className="object-cover"
            fill
            src="/images/marcos.jpg"
            alt="avatar"
          />
        </div>
        <p className="font-poppins font-bold text-white">MARCOSLOPES.DEV</p>
      </Link>
      <nav>
        <ul className="flex justify-center items-center gap-16">
          {menuData.map((navItem) => {
            return (
              <li>
                <Link className="text-white" href={navItem.path}>
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
