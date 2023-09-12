import { client } from "./graphClient";
import { gql } from "graphql-request";

export async function getProjectsHome() {
  const query = gql`
    {
      allProjects(orderBy: [name_DESC], first: "3") {
        id
        name
        summaryContent
        techStack(markdown: false)
        content(markdown: true)
        coverurl
        slug
        technology {
          name
        }
      }
    }
  `;
  const response = await client.request(query);
  return response;
}
export async function getProjectsPage() {
  const query = gql`
    {
      allProjects {
        name
        coverurl
        id
        slug
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
export async function getProject(slug) {
  const query = gql`
    query Project($slug: String) {
      project(filter: { slug: { eq: $slug } }) {
        name
        coverurl
        content(markdown: true)
        technology {
          name
        }
        linkProject
      }
    }
  `;

  const variables = {
    slug: slug,
  };
  const response = await client.request(query, variables);
  return response;
}
