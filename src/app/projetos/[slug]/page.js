import Image from "next/image";
import BtnLinkFooterPage from "@/components/buttons/BtnLink";
import { getProject } from "@/lib/graphQuery";
import style from "./style.module.css";

export const metadata = {
  title: "Veja este projeto ",
  description: "Realizei a codificão do projeto e deploy ",
};

export default async function Project({ params }) {
  const data = await getProject(params.slug);

  return (
    <>
      <section className="container pt-24 px-3 ">
        <h1 className="text-font-color text-center font-bold dark:text-font-color-dark mt-12 mb-12 text-2xl md:text-6xl">
          {data.project.name}
        </h1>
        <p className="text-white text-center text-xl">
          {data.project.summaryContent}
        </p>
      </section>
      <section className="container pt-24 px-3">
        <div className="w-full rounded-lg overflow-hidden mx-auto md:w-[900px] mb-12 relative h-[180px] sm:h-[350px] md:h-[500px] ">
          <Image
            src={data.project.cover != null ? data.project.cover.url : ""}
            fill
            alt="gif mostrando o aplicativo"
            className="object-cover"
          />
        </div>
        <h2 className="text-4xl mb-12 font-bold dark:text-font-color-dark">
          Visão geral do projeto
        </h2>
        <article
          className={style.content}
          dangerouslySetInnerHTML={{ __html: data.project.content }}
        ></article>
        <div className="text-font-color  dark:text-font-color-dark mb-12">
          <h2 className="text-4xl mb-4">Ferramentas usadas</h2>
          <ul className="flex  gap-2 ">
            {data.project.technology.map((item) => {
              return (
                <li
                  key={item.id}
                  className="p-4 bg-secondary-light dark:bg-secondary-dark text-font-color dark:text-font-color-dark rounded font-bold "
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4">
          <BtnLinkFooterPage
            href={data.project.linkProject}
            title={data.project.name}
            target="_blank"
          >
            Acessar
          </BtnLinkFooterPage>
          <BtnLinkFooterPage
            href={
              data.project.repositoryLink
                ? data.project.repositoryLink
                : `/projetos/${params.slug}`
            }
            title={data.project.name}
            target="_blank"
          >
            Código
          </BtnLinkFooterPage>
        </div>
      </section>
    </>
  );
}
