import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      id
      email
      nickName
      password
      region
      like
      gender
      age
    }
  }
`;
