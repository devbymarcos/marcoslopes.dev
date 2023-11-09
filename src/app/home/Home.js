import Link from "next/link";
import { BlurHome } from "@/app/home/blur/blurHome";
import { orbitron } from "../fonts";
import RedesHome from "@/app/home/redes-home/RedesHome";

export default function Home() {
  return (
    <>
      <section className="flex flex-col h-screen-custom justify-center items-center  ">
        <BlurHome />
        <div className="mb-12 text-white text-center">
          <h1
            className={`${orbitron.className} text-4xl md:text-6xl  font-bold`}
          >
            Programador Web
          </h1>
          <p className="text-2xl  my-4">Olá, me chamo Marcos </p>
          <p className="text-lg  my-4">
            Um desenvolvedor Web FullStack, criador de soluções computacionais
            para web{" "}
          </p>
        </div>
        <RedesHome />
        <div className="flex gap-3 items-center ">
          <Link
            className={` ${orbitron.className} px-5 py-3 text-md border-2 transition-all inline-block border-color-purple rounded-full font-bold text-white hover:bg-color-purple uppercase`}
            href="/#contato"
          >
            Mensagem
          </Link>
          <a
            target="_blank"
            className={` ${orbitron.className} px-5 py-3 text-md border-2 transition-all inline-block border-green-500 rounded-full font-bold text-white hover:bg-green-500 uppercase`}
            href="https://api.whatsapp.com/send?phone=5541992169810&text=Tenho%20trabalho%20vamos%20conversar"
          >
            whatsapp
          </a>
        </div>
      </section>
    </>
  );
}
