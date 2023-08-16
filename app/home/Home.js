import { source, fira_mono } from "@/app/fonts";
import Link from "next/link";
import Nav from "@/components/menu/Nav";

export default function Home() {
  return (
    <>
      <section className=" md:fixed w-[400px]  px-2 gap-3 pt-16  ">
        <div className="  ">
          <h1
            className={`text-white text-5xl md:text-[45px] font-black uppercase  ${source.className}`}
          >
            Marcos Juvêncio
          </h1>
          <p
            className={`${source.className} text-white text-xl md:text-[20px]   my-6 leading-7`}
          >
            Um desenvolvedor JavaScript atualmente focado em{" "}
            <span className="text-color-purple font-bold  ">Front-end</span>,
            construindo o Frontend de sites e aplicativos da Web
          </p>
          <div className="flex gap-3 items-center ">
            <Link
              className="px-5 py-3 text-md border-2 transition-all inline-block border-color-purple rounded-full font-bold text-white hover:bg-color-purple uppercase"
              href="/#contato"
            >
              Mensagem
            </Link>
            <a
              target="_blank"
              className="px-5 py-3 text-md border-2 transition-all inline-block border-green-500 rounded-full font-bold text-white hover:bg-green-500 uppercase"
              href="https://api.whatsapp.com/send?phone=5541992169810&text=Tenho%20trabalho%20vamos%20conversar"
            >
              whatsapp
            </a>
          </div>
        </div>
        <Nav />
      </section>
    </>
  );
}
