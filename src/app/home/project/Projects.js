import BtnLink from "@/components/buttons/BtnLink";
import Cardprojects from "@/components/card-projects/Cardprojects";
import { getProjectsHome } from "@/lib/graphQuery";

export default async function Project() {
  const { allProjects } = await getProjectsHome();

  return (
    <>
      <section className="mb-12 container mx-auto">
        <h1 className="text-font-color dark:text-font-color-dark uppercase  mb-12 font-bold text-2xl">
          Projetos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {allProjects.map((item) => {
            return (
              <Cardprojects
                title={item.name}
                urlImg={item.cover != null ? item.cover.url : item.coverurl}
                urlLink={`/projetos/${item.slug}`}
                alt={item.name}
                key={item.name}
              ></Cardprojects>
            );
          })}
        </div>
        <div className="text-center my-24">
          <BtnLink href="/projetos">Mais Projetos</BtnLink>
        </div>
      </section>
    </>
  );
}
