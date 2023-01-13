import { gql } from "@apollo/client";

export const UPLOAD_FILES = gql`
mutation uploadFiles($files: [Upload!]!) {
  uploadFiles(files: $files)
}
`;

export const UPDATE_REVIEW_BOARD = gql`
  mutation updateReviewBoard(
    $updateReviewBoardInput: UpdateReviewBoardInput!
    $reviewBoardId: String!
  ) {
    updateReviewBoard(
      updateReviewBoardInput: $updateReviewBoardInput
      reviewBoardId: $reviewBoardId
    ) {
      id
      content
    }
  }
`;