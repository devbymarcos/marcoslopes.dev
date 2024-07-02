import Image from "next/image";
import { Instagram, LinkedinIcon, Facebook } from "lucide-react";

export default function Avatar() {
  return (
    <>
      <Image
        className="object-cover "
        src="/images/avatar/marcos-home.png"
        width={400}
        height={396}
        alt="foto marcos lopes "
      />
    </>
  );
}
