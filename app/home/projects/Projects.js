import BtnLink from "@/components/buttons/BtnLink";
import Card from "@/components/CardLink/Card";
import TagSkill from "@/components/tag-skill/TagSkill";
import { client, gqlquery } from "@/lib/graphClient";

const query = gqlquery`
  {
    allProjects(orderBy: [name_DESC]) {
      name
      summary {
        value
      }
      category {
        name
      }
      coverurl
    }
  }
`;

async function getProjects() {
  const response = await client.request(query);
  return response;
}

export default async function Projects() {
  const data = await getProjects();

  if (!data) return null;
  return (
    <>
      <section id="projetos" className=" h-auto md:h-screen  pt-28">
        <div className="px-2">
          {data.allProjects.map((item) => {
            let arr = [];
            item.category.forEach((element) => {
              arr.push(element.name);
            });
            return (
              <Card
                title={item.name}
                urlImg={item.coverurl}
                alt="gif para site cmape"
                urlLink="/projetos/cmape"
                stacks={["php", "Html", "CSS", "JQuery"]}
                key={item.id}
              >
                <p>
                  {item.summary.value.document.children[0].children[0].value}
                </p>
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
