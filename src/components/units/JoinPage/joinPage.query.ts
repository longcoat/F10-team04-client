import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
     id
     email
    }
  }
`;