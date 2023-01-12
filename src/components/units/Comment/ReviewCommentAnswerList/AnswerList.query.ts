import { gql } from "@apollo/client";

export const FETCH_REVIEW_NESTED_COMMENTS = gql`
  query fetchReviewNestedComments($reviewCommentId: String!, $page: Int) {
    fetchReviewNestedComments(
        reviewCommentId: $reviewCommentId
        page: $page
    ) {
      id
      reviewNestedComment
      createAt
      user {
        id
        nickname
      }
    }
  }
`;