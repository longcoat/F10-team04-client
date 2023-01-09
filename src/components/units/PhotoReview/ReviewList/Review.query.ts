import { gql } from "@apollo/client";

export const FETCH_ALL_REVIEW_BOARD_IMAGES = gql`
  query fetchAllReviewBoardImages {
    fetchAllReviewBoardImages {
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