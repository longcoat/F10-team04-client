import { useMutation } from "@apollo/client";
import { useState } from "react";
import ReviewCommentWriteUI from "./reviewComment.presenter";
import { CREATE_REVIEW_COMMENT } from "./reviewComment.query";

export default function ReviewCommentWrite(props) {
    const [content, setContent] = useState("")

    const[createReviewComment] = useMutation(CREATE_REVIEW_COMMENT)

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
            //   refetchQueries: [
            //     {
            //       query: FETCH_USED_ITEM_QUESTIONS,
            //       variables: { useditemId: router.query.useditemId },
            //     },
            //   ],
            })
            setContent("");
            console.log(result)
          } else if (!content) {
            alert("내용을 입력해주세요.");
          }
    }
    return(
        <ReviewCommentWriteUI
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        />
    )
}