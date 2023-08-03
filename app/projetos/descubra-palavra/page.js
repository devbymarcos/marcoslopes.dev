import Image from "next/image";

import BtnLinkFooterPage from "@/components/buttons/BtnLink";

export const metadata = {
  title: "Gerador de senhas | Projeto Freelancer",
  description: "Projeto para utilidade",
};

export default function Cmape() {
  return (
    <>
      <section className="container pt-24 px-3">
        <h1 className="text-white mt-12 text-4xl">DESCUBRA PALAVRA</h1>
        <p className="text-white mb-32">Projeto pessoal</p>
        <div className="w-full md:w-[900px] mb-12 relative h-[300px] md:h-[500px] ">
          <Image
            src="/images/guess-word.gif"
            fill
            alt="igf mostrando o aplicativo"
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
              Javascript
            </li>
          </ul>
        </div>
        <article className="text-white">
          <h2 className="text-4xl text-white mb-4">Descrição</h2>
          <p className="text-2xl">
            Criei esse jogo com o objetivo de brincar com a minha filha, quando
            ela começou a formar as palavras
          </p>
          <BtnLinkFooterPage
            href="https://geradro-de-senha-vercel.vercel.app/"
            title="Gerador de senha"
          >
            Acessar
          </BtnLinkFooterPage>
        </article>
      </section>
    </>
  );
}