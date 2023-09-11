import Image from "next/image";
import BtnLinkFooterPage from "@/components/buttons/BtnLink";

export const metadata = {
  title: "Clinica Cmape | Projeto Freelancer",
  description: "Realizei a codificão do projeto e deploy ",
};

export default function Project() {
  return (
    <>
      <section className="container pt-24 px-3">
        <h1 className="text-white mt-12 text-4xl">CLINICA CMAPE</h1>
        <p className="text-white mb-32">Projeto Freelancer</p>
        <div className="w-full md:w-[900px] mb-12 relative h-[300px] md:h-[500px] ">
          <Image
            src="/images/cmape.gif"
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
            <li className="bg-color-secondary inline-block p-4 rounded">PHP</li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              MYSQL
            </li>
          </ul>
        </div>
        <article className="text-white">
          <h2 className="text-4xl text-white mb-4">Descrição</h2>
          <p className="text-2xl">
            Web site com painel administrativo personalizado. <br />
            Carregamento de fotos, posts, descrições, titulos.
          </p>
          <BtnLinkFooterPage
            href="https://www.cmape.com.br"
            title="Clinica Cmape"
          >
            Acessar
          </BtnLinkFooterPage>
        </article>
      </section>
    </>
  );
}
