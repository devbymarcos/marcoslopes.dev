import { source, fira_mono } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className=" container px-2 gap-3 pt-36 items-center   h-screen grid grid-cols-2 ">
        <div className="  ">
          <p className={`text-white  text-xl ${fira_mono.className}`}>
            Olá, pode me chamar
          </p>
          <h1
            className={`text-white text-5xl md:text-[62px] font-black uppercase  ${source.className}`}
          >
            Marcos lopes
          </h1>
          <p
            className={`${source.className} text-white text-lg md:text-[28px]   my-3 leading-10`}
          >
            Um desenvolvedor JavaScript atualmente focado em{" "}
            <span className="text-lime-600 font-bold  ">Front-end</span>,
            construindo o Frontend de sites e aplicativos da Web
          </p>
          <Link
            className="px-5 py-4 text-lg border-2 transition-all inline-block border-color-purple rounded-md font-bold text-white hover:bg-color-purple uppercase"
            href="/#contato"
          >
            Mande uma mensagem
          </Link>
        </div>
        <div className="relative w-[300px] overflow-hidden rounded h-[300px] justify-self-center">
          <Image
            className="hover:scale-105 transition-all filter grayscale hover:filter-none"
            src="/images/marcos-v2.png"
            alt="Marcos Lopes"
            fill
          />
        </div>
      </section>
    </>
  );
}
