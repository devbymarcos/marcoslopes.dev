import Image from "next/image";
import BtnLink from "@/components/buttons/BtnLink";

export const metadata = {
  title: "Pizzaria Fernades | Web site ",
  description: "Site construido em nextjs para exibição de cardapio",
};

export default function PizzariaFernades() {
  return (
    <>
      <section className="container pt-24 px-3">
        <h1 className="text-white mt-12 text-4xl"> Pizzaria Fernades</h1>
        <p className="text-white mb-32">Projeto Freelancer</p>
        <div className="w-full md:w-[900px] mb-12 relative h-[300px] md:h-[500px] ">
          <Image
            src="/images/pizzaria-fernandes.png"
            fill
            alt="gif para mostrar o efeito de digitacao sendo realizado"
          />
        </div>

        <div className="text-white mb-12">
          <h2 className="text-4xl mb-4">Tecnologias utilizadas</h2>
          <ul className="flex  gap-2 ">
            <li className="bg-color-secondary inline-block p-4 rounded">
              Reactjs / Nextjs
            </li>
          </ul>
        </div>
        <h2 className="text-4xl text-white mb-4">Descrição</h2>
        <article className="text-white">
          <h2 className=" text-3xl font-bold">Pizzaria Fernades</h2>
          <p className="text-2xl">
            Site para divulgar o cardápio. <br />
            -Painel Administrativo para registro do cardápio criado com CMS
            STRAPI.
            <br /> Esse projeto não possui repositório gitHub Público.
          </p>
          <div className="flex items-center gap-4">
            <BtnLink href="#" title="Pizzaria Fernandes">
              Acessar
            </BtnLink>
          </div>
        </article>
      </section>
    </>
  );
}
