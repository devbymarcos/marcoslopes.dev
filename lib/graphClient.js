import { GraphQLClient, gql } from "graphql-request";

const url = process.env.GRAPHQL_URL;
const token = process.env.GRAPHQL_TOKEN;

export const gqlQuery = gql;
export const client = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});
