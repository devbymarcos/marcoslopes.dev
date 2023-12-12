"use client";
import Link from "next/link";
import { BlurHome } from "@/app/home/blur/blurHome";
import RedesHome from "@/app/home/redes-home/RedesHome";
import Avatar from "./avatar/Avatar";
import Mouse from "@/components/mouse/Mouse";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="md:h-screen-custom p-1 mt-24  "
      >
        <BlurHome />
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-96 mt-12 md:mt-40">
          <div className="grid-item md:justify-self-center mb-12">
            <div className="mb-12 text-font-color dark:text-font-color-dark">
              <h1 className={` text-4xl md:text-3xl  font-bold`}>
                Olá me chamo Marcos
              </h1>

              <p className="text-lg  my-4 md:w-96">
                Um desenvolvedor Web FullStack, criador de soluções
                computacionais para web{" "}
              </p>
            </div>
            <RedesHome />
            <div className="flex gap-3 items-center ">
              <Link
                className={`  px-4 py-2 text-md border-2 transition-all inline-block  rounded-full font-bold border-btn-primary text-font-color dark:text-primary-light `}
                href="/#contato"
              >
                Mensagem
              </Link>
              <a
                target="_blank"
                className={`  px-4 py-2 text-md border-2 transition-all inline-block border-green-500 rounded-full font-bold text-font-color dark:text-primary-light `}
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
      </motion.section>
    </>
  );
}
