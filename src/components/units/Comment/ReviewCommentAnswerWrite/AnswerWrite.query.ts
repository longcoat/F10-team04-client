import { gql } from "@apollo/client";

export const CREATE_NESTED_COMMENT = gql`
  mutation createNestedComment(
    $nestedComment: String!
    $commentId: String!
  ) {
    createNestedComment(
        nestedComment: $nestedComment
      commentId: $commentId
    ) {
        id
        nestedComment
    }
  }
`;