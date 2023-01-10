import { gql } from "@apollo/client";

export const FETCH_ALL_REVIEW_BOARD_IMAGE = gql`
  query fetchReviewBoardImage($reviewBoardId: String!) {
    fetchReviewBoardImage(reviewBoardId:$reviewBoardId) {
      id
      imgUrl
      reviewBoard{
        id
      }
    }
  }
`;

export const FETCH_ALL_REVIEW_BOARDS = gql`
  query fetchAllReviewBoards($page: Int){
    fetchAllReviewBoards(page:$page) {
      id
      title
      content
    }
  }
`;

export const FETCH_ALL_REVIEW_BOARD_IMAGES = gql`
  query fetchReviewBoardImages {
    fetchReviewBoardImages {
      id
      imgUrl
      reviewBoard{
        id
      }
    }
  }
`;