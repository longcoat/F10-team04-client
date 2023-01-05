import { gql } from "@apollo/client";

export const FETCH_ALL_BOARDS = gql`
  query fetchAllBoards($page: Int) {
    fetchAllBoards(page: $page) {
      id
      title
      content
      createdAt
      image{
        id
        imgUrl
      }
      recruitRegion
      appointment
      recruitGrade
      recruitSports
    }
  }
`;
