import { getProjectsPage } from "@/lib/graphQuery";
import Navprojects from "./Navprojects";
import Cardprojects from "@/components/card-projects/Cardprojects";

export default async function Projetos() {
  const data = await getProjectsPage();

  return (
    <>
      <div className="pt-28 container">
        <Navprojects content={data} />
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-11 px-2">
            {data.allProjects.map((item) => {
              return (
                <Cardprojects
                  key={item.id}
                  title={item.name}
                  urlImg={item.coverurl}
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
