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
      thumbnail
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
export const FETCH_FOLLOWING = gql`
  query fetchFollowing($userId: String!,$page: Int){
    fetchFollowing(userId:$userId,page:$page) {
      id
      user2{
        id
        nickname
        age
        region
        prefer
        grade
        image{
          imgUrl
        }
      }
    }
  }
`;
export const FETCH_FOLLOWER = gql`
  query fetchFollower($userId: String!,$page: Int){
    fetchFollower(userId:$userId,page:$page) {
      id
      user1{
        id
        nickname
        age
        region
        prefer
        grade
        image{
          imgUrl
        }
      }
    }
  }
`;