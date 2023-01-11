import { gql } from "@apollo/client";

export const FETCH_NESTED_COMMENTS = gql`
  query fetchNestedComments($commentId: String!, $page: Int) {
    fetchNestedComments(
        commentId: $commentId
        page: $page
    ) {
      id
      nestedComment
      createdAt
      user {
        id
        nickname
      }
    }
  }
`;