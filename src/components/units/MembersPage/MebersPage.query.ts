import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      id
      email
      nickname
      region
      prefer
      gender
      age
      grade
    }
  }
`;
