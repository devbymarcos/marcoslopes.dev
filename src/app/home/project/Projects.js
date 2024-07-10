import BtnLink from "@/components/buttons/BtnLink";
import Cardprojects from "@/components/card-projects/Cardprojects";
import { getProjectsHome } from "@/lib/graphQuery";
import Image from "next/image";

export default async function Project() {
  const { allProjects } = await getProjectsHome();

  return (
    <>
      <section className="mb-12 container mx-auto">
        <h1 className="text-font-color dark:text-font-color-dark   mb-12 font-bold text-2xl">
          Projetos em destaques
        </h1>

        {allProjects.map((item) => {
          return (
            <div
              key={item.name}
              className=" grid gap-20 grid-cols-1 md:grid-cols-2 mb-20"
            >
              <Image
                src={item.cover.url}
                width={609}
                height={346}
                className="rounded-lg"
              />
              <div className="relative">
                <h2 className="text-white font-bold text-2xl text-center md:text-left">
                  {item.name}
                </h2>
                <div className="grid  grid-cols-1 text-center md:grid-cols-2 gap-10 font-bold text-white mt-4">
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  <p>{item.text3}</p>
                  <p>{item.text4}</p>
                </div>
                <div className="md:absolute text-center mt-10 md:bottom-0">
                  <BtnLink href={`/projetos/${item.slug}`}>Saiba mais</BtnLink>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center items-center mt-40 ">
          <BtnLink href={`/projetos/`}>Ver todos os Projetos</BtnLink>
        </div>
      </section>
    </>
  );
}
