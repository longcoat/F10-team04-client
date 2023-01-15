import { gql } from "@apollo/client";

export const CHECK_NICK_NAME = gql`
  mutation checkNickName($nickname: String!) {
    checkNickName(nickname: $nickname)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      email
      image{
        id
        imgUrl
      }
    }
  }
`;
