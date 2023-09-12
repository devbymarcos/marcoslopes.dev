import BtnLink from "@/components/buttons/BtnLink";
import Card from "@/components/CardLink/Card";
import TagSkill from "@/components/tag-skill/TagSkill";
import { getProjectsHome } from "@/lib/graphQuery";

export default async function Projects() {
  const data = await getProjectsHome();

  if (!data) return null;
  return (
    <>
      <section id="projetos" className=" h-auto md:h-screen  pt-28">
        <div className="px-2">
          {data.allProjects.map((item) => {
            let arr = [];
            item.technology.forEach((element) => {
              arr.push(element.name);
            });
            return (
              <Card
                title={item.name}
                urlImg={item.coverurl}
                alt="gif para site cmape"
                urlLink={`/projetos/${item.slug}`}
                stacks={["php", "Html", "CSS", "JQuery"]}
                key={item.id}
              >
                <p>{item.summaryContent}</p>
                <TagSkill stacks={arr} />
              </Card>
            );
          })}
        </div>

        <div className="my-12 text-center">
          <BtnLink href="/projetos">Ver mais projetos</BtnLink>
        </div>
      </section>
    </>
  );
}
