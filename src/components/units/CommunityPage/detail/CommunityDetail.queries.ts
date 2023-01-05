import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      content
      attendCount
      pickCount
      appointment
      recruitRegion
      recruitGrade
      recruitSports
      createdAt
      user {
        id
        email
        nickname
      }
      image{
        id
        imgUrl
      }
    }
  }
`;