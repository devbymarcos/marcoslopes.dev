import { getProjectsPage } from "@/services/projects";
import Navprojects from "./Navprojects";
import Cardprojects from "@/components/card-projects/Cardprojects";

export default async function Projetos() {
  const data = await getProjectsPage();

  return (
    <>
      <div className="pt-28 container-custom mx-auto">
        <Navprojects content={data} />
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-2">
            {data.allProjects.map((item) => {
              return (
                <Cardprojects
                  key={item.id}
                  title={item.name}
                  urlImg={item.cover != null ? item.cover["url"] : ""}
                  alt={item.alt}
                  urlLink={`/projetos/${item.slug}`}
                  category={item.stackFilter.name}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
