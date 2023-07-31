import Image from "next/image";

import { Github } from "lucide-react";
import BtnLinkFooterPage from "@/components/footer-page/BtnLinkFooterPage";

export const metadata = {
  title: "TypeWriter | Code Utility",
  description: "Código javascript para criar animação de digitação",
};

export default function typeWriter() {
  return (
    <>
      <section className="container pt-24">
        <h1 className="text-white mt-12 text-4xl"> Type writer Effect</h1>
        <p className="text-white mb-32">Animação - Efeito de digitação</p>
        <div className="w-full md:w-[900px] mb-12 relative h-[300px] md:h-[500px] ">
          <Image
            src="/images/typewriter.gif"
            fill
            alt="gif para mostrar o efeito de digitacao sendo realizado"
          />
        </div>

        <div className="text-white mb-12">
          <h2 className="text-4xl mb-4">Tecnologias utilizadas</h2>
          <ul className="flex  gap-2 ">
            <li className="bg-color-secondary inline-block p-4 rounded">
              HTML
            </li>
            <li className="bg-color-secondary inline-block p-4 rounded">CSS</li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              JavaScript - VanillaJs
            </li>
          </ul>
        </div>
        <article className="text-white">
          <h2 className="text-4xl text-white mb-4">Descrição</h2>
          <p className="text-2xl">
            <h2>TYPEWRITE-EFFECT</h2>
            Este script consiste em animar frases com o efeito de
            digitação.utilizei o conceito de recursividade. A recursividade é
            excelente para resolver problemas pequenos. No entanto, descarte sua
            utilização para grandes volumes de dados.
          </p>
          <div className="flex items-center gap-4">
            <BtnLinkFooterPage
              href="https://typewrite-effect.vercel.app/"
              title="Typewrite Effect"
            >
              Acessar
            </BtnLinkFooterPage>
            <BtnLinkFooterPage
              href="https://github.com/devbymarcos/typewrite-effect"
              title="Typewrite Effect"
            >
              <Github size={24} color="#fff" />
            </BtnLinkFooterPage>
          </div>
        </article>
      </section>
    </>
  );
}
