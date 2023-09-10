"use client";
import BtnLink from "@/components/buttons/BtnLink";
import Card from "@/components/CardLink/Card";
import TagSkill from "@/components/tag-skill/TagSkill";
import { client, gqlquery } from "@/lib/graphClient";
import { useEffect, useState } from "react";

const query = gqlquery`
  {
    allProjects {
      name
      body {
        value
      }
      category {
        name
      }
    }
  }
`;

export default function Projects() {
  const [data, setData] = useState(null);

  async function getProjects() {
    const response = await client.request(query);
    console.log(response);
    setData(response);
  }

  console.log(data);
  useEffect(() => {
    getProjects();
  }, []);

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
                urlImg="/images/cmape.gif"
                alt="gif para site cmape"
                urlLink="/projetos/cmape"
                stacks={["php", "Html", "CSS", "JQuery"]}
              >
                <p>{item.body.value.document.children[0].children[0].value}</p>
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
