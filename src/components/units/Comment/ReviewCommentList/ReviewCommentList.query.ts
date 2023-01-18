import { gql } from "@apollo/client";

export const FETCH_REVIEW_COMMENTS = gql`
  query fetchReviewComments($reviewBoardId: String!) {
    fetchReviewComments(reviewBoardId: $reviewBoardId) {
      id
      reviewComment
      createdAt
      user {
        id
        nickname
        image{
          id
          imgUrl
        }
      }
    }
  }
`;

export const DELETE_REVIEW_COMMENT = gql`
  mutation deleteReviewComment($reviewCommentId: String!) {
    deleteReviewComment(reviewCommentId: $reviewCommentId)
  }
`;