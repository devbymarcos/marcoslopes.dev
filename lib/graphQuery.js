import { client, gqlQuery } from "./graphClient";

export async function getProjectsHome() {
  const query = gqlQuery`
    {
      allProjects(orderBy: [name_DESC],first:"3") {
        id
        name
        summaryContent
        techStack(markdown: false)
        content(markdown: true)
        coverurl
        technology{
          name
        }
      }
    }
  `;
  const response = await client.request(query);
  return response;
}
export async function getProjectsPage() {
  const query = gqlQuery`
    {
      allProjects {
        name
        coverurl
        id
        stackFilter {
          name
        }
      }
      allCategoryFilters {
        name
      }
    }
  `;
  const response = await client.request(query);
  return response;
}
