import { menuData } from "@/app/menu-data";
import Link from "next/link";

export default function MenuMobile({ active, onClick }) {
  if (!active) return null;
  return (
    <>
      <aside className="fixed w-full top-24 bg-color-primary   left-0 h-screen ">
        <nav>
          <ul>
            {menuData.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={onClick}
                  className="p-8 block hover:bg-color-secondary text-white"
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
