import { gql } from "@apollo/client";

export const CREATE_REVIEW_NESTED_COMMENT = gql`
  mutation createReviewNestedComment(
    $reviewNestedComment: String!
    $reviewCommentId: String!
  ) {
    createReviewNestedComment(
        reviewNestedComment: $reviewNestedComment
        reviewCommentId: $reviewCommentId
    ) {
        id
        reviewNestedComment
    }
  }
`;