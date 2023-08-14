import { source, fira_mono } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className=" container px-2 gap-3 pt-36 items-center   h-screen grid grid-cols-1 md:grid-cols-2 ">
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
            className={`${source.className} text-white text-xl md:text-[28px]   my-6 leading-7`}
          >
            Um desenvolvedor JavaScript atualmente focado em{" "}
            <span className="text-color-purple font-bold  ">Front-end</span>,
            construindo o Frontend de sites e aplicativos da Web
          </p>
          <div className="flex gap-3 items-center ">
            <Link
              className="px-5 py-4 text-md border-2 transition-all inline-block border-color-purple rounded-full font-bold text-white hover:bg-color-purple uppercase"
              href="/#contato"
            >
              Mande uma mensagem
            </Link>
            <a
              target="_blank"
              className="px-5 py-4 text-md border-2 transition-all inline-block border-green-500 rounded-full font-bold text-white hover:bg-green-500 uppercase"
              href="https://api.whatsapp.com/send?phone=5541992169810&text=Tenho%20trabalho%20vamos%20conversar"
            >
              whatsapp
            </a>
          </div>
        </div>
        <div className="relative w-[300px] overflow-hidden rounded-full hover:shadow-md h-[300px] justify-self-center">
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
