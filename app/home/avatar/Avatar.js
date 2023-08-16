import Image from "next/image";
import { Instagram, LinkedinIcon, Facebook } from "lucide-react";

export default function Avatar() {
  return (
    <>
      <div className="w-[300px] h-[300px] transition-all rounded-full mx-auto   overflow-hidden  border-2 border-color-purple  mt-36 ">
        <Image
          className="object-cover p-3 rounded-full"
          src="/images/avatar/marcos-n.png"
          width={300}
          height={300}
        />
      </div>
      <div className="px-3 flex justify-center">
        <ul>
          <li className="my-4 flex gap-4">
            <a href="https://www.instagram.com/devbymarcos">
              <Instagram color="#fff" size={32} />
            </a>
            <a href="https://www.linkedin.com/in/devbymarcos">
              <LinkedinIcon color="#fff" size={32} />
            </a>
            <a href="https://www.facebook.com/marcoslopes.ml">
              <Facebook color="#fff" size={32} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
