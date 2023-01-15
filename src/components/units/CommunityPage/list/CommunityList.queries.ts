import { gql } from "@apollo/client";

export const FETCH_ALL_BOARDS = gql`
  query fetchAllBoards($page: Int) {
    fetchAllBoards(page: $page) {
      id
      title
      content
      createdAt
      image {
        id
        imgUrl
      }
      recruitRegion
      appointment
      recruitGrade
      recruitSports
      attendCount
      recruitPeople
    }
  }
`;

export const FETCH_ALL_BOARDS_WITH_PICK_BOARD = gql`
  query fetchAllBoardsWithPickCount($page: Int) {
    fetchAllBoardsWithPickCount(page: $page) {
      id
      title
      content
      createdAt
      image {
        id
        imgUrl
      }
      recruitRegion
      appointment
      recruitGrade
      recruitSports
      attendCount
      recruitPeople
    }
  }
`;

export const SEARCH_BOARDS = gql`
  query searchBoards($word: String!) {
    searchBoards(word: $word) {
      id
      title
      content
      image {
        id
        imgUrl
      }
      recruitRegion
      appointment
      recruitGrade
      recruitSports
      attendCount
      recruitPeople
    }
  }
`;