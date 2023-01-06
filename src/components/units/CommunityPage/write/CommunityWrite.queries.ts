
import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      title
      content
      appointment
      recruitRegion
      recruitGrade
      recruitSports
      image{
      id
      imgUrl
    }
    recruitPeople
    location{
      center
      path
    }
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($boardId: String!,$updateBoardInput: UpdateBoardInput!) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput) {
      id
      title
      content
      appointment
      recruitRegion
      recruitGrade
      recruitSports
      image{
      id
      imgUrl
    }
    recruitPeople
    location{
      center
      path
    }
    }
  }
`;