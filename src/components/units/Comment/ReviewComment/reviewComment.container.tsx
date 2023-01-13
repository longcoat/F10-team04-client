import { useMutation } from "@apollo/client";
import { useState } from "react";
import { IMutation, IMutationCreateReviewCommentArgs } from "../../../../commons/types/generated/types";
import { FETCH_REVIEW_COMMENTS } from "../ReviewCommentList/ReviewCommentList.query";
import ReviewCommentWriteUI from "./reviewComment.presenter";
import { CREATE_REVIEW_COMMENT } from "./reviewComment.query";

export default function ReviewCommentWrite(props) {
    const [content, setContent] = useState("")

    const [createReviewComment] = useMutation<
    Pick<IMutation, "createReviewComment">,
    IMutationCreateReviewCommentArgs
  >(CREATE_REVIEW_COMMENT);

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onClickSubmit = async () => {
        if (content) {
            const result = await createReviewComment({
              variables: {
                reviewComment: content,
                reviewBoardId: String(props.id)
              },
              refetchQueries: [
                {
                  query: FETCH_REVIEW_COMMENTS,
                  variables: { reviewBoardId: String(props.id) },
                },
              ],
            })
            setContent("");
            console.log(result)
          } else if (!content) {
            alert("내용을 입력해주세요.");
          }
    }
    return(
        <ReviewCommentWriteUI
        content={content}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        />
    )
}