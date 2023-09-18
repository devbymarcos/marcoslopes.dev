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
      <section className="container pt-24 px-3">
        <h1 className="text-white mt-12 mb-12 text-4xl">{data.project.name}</h1>
        <div className="w-full md:w-[900px] mb-12 relative h-[300px] md:h-[500px] ">
          <Image
            src={data.project.coverurl}
            fill
            alt="igf mostrando o aplicativo"
          />
        </div>
        <div className="text-white mb-12">
          <h2 className="text-4xl mb-4">Tecnologias utilizadas</h2>
          <ul className="flex  gap-2 ">
            {data.project.technology.map((item) => {
              return (
                <li
                  key={item.id}
                  className="bg-color-secondary inline-block p-4 rounded"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <article
          className={style.content}
          dangerouslySetInnerHTML={{ __html: data.project.content }}
        ></article>
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
