import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;
export async function getAccessToken() {
  try {

    const graphQLClient = new GraphQLClient("https://backsol2.shop/graphql", {
      credentials: "include",
    });


    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    console.log("11111111111111111111111111");
    const newAccessToken = result.restoreAccessToken;
    console.log(newAccessToken);
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
