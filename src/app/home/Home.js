import Link from "next/link";
import RedesHome from "@/app/home/redes-home/RedesHome";
import Avatar from "./avatar/Avatar";
import Mouse from "@/components/mouse/Mouse";

export default function Home() {
  return (
    <>
      <section className="md:h-screen-custom h-screen flex flex-col  justify-center p-1 pt-28 mb-24  ">
        <div className="grid grid-cols-1 order-0 md:grid-cols-2  md:h-96 md:mt-12">
          <div className="grid-item  order-last md:order-1 md:justify-self-center mb-12">
            <div className="mb-12 text-font-color dark:text-font-color-dark">
              <h1 className={` text-2xl   md:text-4xl  font-bold`}>
                Oi eu sou Marcos !
              </h1>
              <p className="text-lg  my-4 md:w-96 ">
                Eu <span className="text-indigo-600">desenvolvo</span> soluções
                para Web e sou entusiasta no desenvolvimento de games mobile.
              </p>
            </div>

            <div className="flex gap-3 items-center ">
              <Link
                className={` min-w-[160px] px-6 py-3 text-md rounded-md  transition-all inline-block text-center   bg-indigo-600     text-white `}
                href="/#contato"
              >
                Contato
              </Link>
              <a
                target="_blank"
                className={` min-w-[160px] text-center px-6 py-3 text-md rounded-md  transition-all inline-block    bg-indigo-600  text-white `}
                href="https://api.whatsapp.com/send?phone=5541992169810&text=Tenho%20trabalho%20vamos%20conversar"
              >
                Aprenda
              </a>
            </div>
          </div>
          <div className="grid-item md:order-last justify-self-center">
            <Avatar />
          </div>
        </div>
      </section>
    </>
  );
}
