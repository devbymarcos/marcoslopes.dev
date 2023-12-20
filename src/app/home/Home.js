import Link from "next/link";
import RedesHome from "@/app/home/redes-home/RedesHome";
import Avatar from "./avatar/Avatar";
import Mouse from "@/components/mouse/Mouse";

export default function Home() {
  return (
    <>
      <section className="md:h-screen-custom p-1 mt-24 mb-24  ">
        <p className="text-sm mt-12">
          <span className="uppercase font-bold">Envie-me um email </span>:
          <a className="underline" href="mailto:marcoslopes.dev@gmial.com">
            marcoslopes.dev@gmail.com
          </a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:h-96 md:mt-12">
          <div className="grid-item md:justify-self-center mb-12">
            <div className="mb-12 text-font-color dark:text-font-color-dark">
              <h1 className={` text-2xl  uppercase md:text-4xl  font-bold`}>
                Olá, me chamo Marcos. desenvolvedor web Entusiasta em
                desenvolvimento de Games
              </h1>

              <p className="text-lg  my-4 md:w-96 font-semibold">
                Olá é um prazer ter você aqui comigo. Este é o espaço onde
                publico meus projetos. Também é por aqui que você consegue meus
                contatos oficiais
              </p>
            </div>
            <RedesHome />
            <div className="flex gap-3 items-center ">
              <Link
                className={` px-6 py-3 text-md  transition-all inline-block   bg-pink-custom  uppercase text-white `}
                href="/#contato"
              >
                Mensagem
              </Link>
              <a
                target="_blank"
                className={` px-6 py-3 text-md  transition-all inline-block    bg-green-500 uppercase text-white `}
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
        <Mouse />
      </section>
    </>
  );
}
