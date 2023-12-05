import Link from "next/link";
import { BlurHome } from "@/app/home/blur/blurHome";
import { orbitron } from "../fonts";
import RedesHome from "@/app/home/redes-home/RedesHome";
import Avatar from "./avatar/Avatar";

export default function Home() {
  return (
    <>
      <section className="h-screen-custom p-1 ">
        <BlurHome />
        <div className="grid grid-cols-2 h-96 mt-40">
          <div className="grid-item justify-self-center">
            <div className="mb-12 text-font-color dark:text-font-color-dark">
              <h1 className={` text-4xl md:text-3xl  font-bold`}>
                Olá me chamo Marcos
              </h1>

              <p className="text-lg  my-4 w-96">
                Um desenvolvedor Web FullStack, criador de soluções
                computacionais para web{" "}
              </p>
            </div>
            <RedesHome />
            <div className="flex gap-3 items-center ">
              <Link
                className={`  px-4 py-2 text-md border-2 transition-all inline-block  rounded-full font-bold border-btn-primary text-font-color `}
                href="/#contato"
              >
                Mensagem
              </Link>
              <a
                target="_blank"
                className={`  px-4 py-2 text-md border-2 transition-all inline-block border-green-500 rounded-full font-bold text-font-color `}
                href="https://api.whatsapp.com/send?phone=5541992169810&text=Tenho%20trabalho%20vamos%20conversar"
              >
                Whatsapp
              </a>
            </div>
          </div>
          <div className="grid-item justify-self-center">
            <Avatar />
          </div>
        </div>
      </section>
    </>
  );
}
