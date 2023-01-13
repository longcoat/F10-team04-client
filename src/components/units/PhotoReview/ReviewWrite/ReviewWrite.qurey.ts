import { gql } from "@apollo/client";

export const UPLOAD_FILES = gql`
mutation uploadFiles($files: [Upload!]!) {
  uploadFiles(files: $files)
}
`;

export const CREATE_REVIEW_BOARD = gql`
  mutation createReviewBoard($createReviewBoardInput: CreateReviewBoardInput!, $attendListId: String!) {
    createReviewBoard(createReviewBoardInput: $createReviewBoardInput,attendListId: $attendListId) {
        title
        content
    }
  }
`;