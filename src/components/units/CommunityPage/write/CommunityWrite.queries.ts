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
      image
    }
  }
`;