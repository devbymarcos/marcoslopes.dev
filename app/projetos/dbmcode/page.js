import Image from "next/image";
import { Github } from "lucide-react";
import BtnLinkFooterPage from "@/components/footer-page/BtnLinkFooterPage";

export const metadata = {
  title: "dBmcode | Web site ",
  description:
    "Site construido em nextjs para aprensentar os trabalhos da Dbmcode",
};

export default function DbmCode() {
  return (
    <>
      <section className="container pt-24 px-3">
        <h1 className="text-white mt-12 text-4xl"> dBmcode</h1>
        <p className="text-white mb-32">
          O site dBmcode é meu projeto pessoal, disponibilizo conteúdo sobre
          programação
        </p>
        <div className="w-full md:w-[900px] mb-12 relative h-[300px] md:h-[500px] ">
          <Image
            src="/images/dbmcode.gif"
            fill
            alt="gif para mostrar o efeito de digitacao sendo realizado"
          />
        </div>

        <div className="text-white mb-12">
          <h2 className="text-4xl mb-4">Tecnologias utilizadas</h2>
          <ul className="flex  gap-2 ">
            <li className="bg-color-secondary inline-block p-4 rounded">
              Reactjs
            </li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              Tailwind
            </li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              Nextjs 13
            </li>
          </ul>
        </div>
        <h2 className="text-4xl text-white mb-4">Descrição</h2>
        <article className="text-white">
          <h2 className=" text-3xl font-bold">dBmcode</h2>
          <p className="text-2xl">Web site com páginas státicas</p>
          <div className="flex items-center gap-4">
            <BtnLinkFooterPage href="https://www.dbmcode.com" title="dBmocode">
              Acessar
            </BtnLinkFooterPage>
          </div>
        </article>
      </section>
    </>
  );
}
