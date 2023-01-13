import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      nickname
      age
      gender
      region
      image{
        id
        imgUrl
      }
    }
  }
`;

export const SEND_TOKEN_TO_EMAIL = gql`
  mutation sendTokenToEmail($email: String!) {
    sendTokenToEmail(email: $email)
  }
`;

export const CHECK_TOKEN_EMAIL = gql`
  mutation checkTokenEmail($email: String!, $token: String!) {
    checkTokenEmail(email: $email, token: $token)
  }
`;
export const CHECK_NICK_NAME = gql`
  mutation checkNickName($nickname: String!) {
    checkNickName(nickname: $nickname)
  }
`;
