import { client } from "@/services/api";
import { gql } from "graphql-request";

export async function getProjectsPage() {
  const query = gql`
    {
      allProjects(orderBy: [name_DESC]) {
        name
        coverurl
        id
        slug
        stackFilter {
          name
        }
        cover {
          url
        }
      }
      allCategoryFilters(orderBy: [name_ASC]) {
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
        summaryContent
        cover {
          url
        }
        content(markdown: true)
        technology {
          name
        }
        linkProject
        repositoryLink
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const response = await client.request(query, variables);
  return response;
}
