import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers($page: Int) {
    fetchUsers(page: $page) {
      id
      email
      nickname
      region
      prefer
      gender
      age
      grade
      image{
        id
        imgUrl
      }
    }
  }
`;
