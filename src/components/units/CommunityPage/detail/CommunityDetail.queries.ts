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
      image {
        id
        imgUrl
      }
      location{
        center
        path
      }
    }
  }
`;
export const PICK_BOARD = gql`
  mutation pickBoard($boardId: String!) {
    pickBoard(boardId: $boardId)
  }
`;
export const ATTEND_LIST = gql`
  mutation attendList($boardId: String!) {
    attendList(boardId: $boardId)
  }
`;
