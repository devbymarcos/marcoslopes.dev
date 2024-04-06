import Image from "next/image";
import { Instagram, LinkedinIcon, Facebook } from "lucide-react";

export default function Avatar() {
  return (
    <>
      <div className="w-[250px] h-[250px] rounded-full     overflow-hidden  border-2 border-purple-500  mb-12 ">
        <Image
          className="object-cover p-3 rounded-full"
          src="/images/avatar/marcos-n.png"
          width={250}
          height={250}
          alt="foto marcos lopes "
        />
      </div>
    </>
  );
}
