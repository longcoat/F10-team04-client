import { gql } from "@apollo/client";

export const CREATE_REVIEW_COMMENT = gql`
  mutation createReviewComment(
    $reviewComment: String!
    $reviewBoardId: String!
  ) {
    createReviewComment(
        reviewComment: $reviewComment
      reviewBoardId: $reviewBoardId
    ) {
      id
    }
  }
`;