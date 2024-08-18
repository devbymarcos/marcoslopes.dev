import { client } from "@/services/api";
import { gql } from "graphql-request";

export async function getProjectsHome() {
  const query = gql`
    {
      allProjects(orderBy: [_createdAt_DESC], first: "2") {
        id
        name
        summaryContent
        techStack(markdown: false)
        content(markdown: true)
        slug
        technology {
          name
        }
        cover {
          url
        }
        text1
        text2
        text3
        text4
      }
    }
  `;
  const response = await client.request(query);
  return response;
}
