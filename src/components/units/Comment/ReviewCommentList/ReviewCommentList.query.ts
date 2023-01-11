import { gql } from "@apollo/client";

export const FETCH_REVIEW_COMMENTS = gql`
  query fetchReviewComments($reviewBoardId: String!, $page: Int) {
    fetchReviewComments(reviewBoardId: $reviewBoardId, page: $page) {
      id
      reviewComment
      createdAt
      user {
        id
        nickname
      }
    }
  }
`;