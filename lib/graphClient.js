import { GraphQLClient, gql } from "graphql-request";

const url = "https://graphql.datocms.com/";
const token = "e558f7f097b2c6ab17c176569812ff";

export const gqlquery = gql;
export const client = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});
