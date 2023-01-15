import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IMutation, IMutationCreateReviewCommentArgs } from "../../../../commons/types/generated/types";
import { FETCH_REVIEW_COMMENTS } from "../ReviewCommentList/ReviewCommentList.query";
import ReviewCommentWriteUI from "./reviewComment.presenter";
import { CREATE_REVIEW_COMMENT } from "./reviewComment.query";
import { schema } from "./reviewComment.validation";

export default function ReviewCommentWrite(props) {
    const [createReviewComment] = useMutation<
    Pick<IMutation, "createReviewComment">,
    IMutationCreateReviewCommentArgs
  >(CREATE_REVIEW_COMMENT);

    const { register, handleSubmit, formState, setValue, trigger, getValues } =useForm({
      resolver: yupResolver(schema)  
    });

    const onClickSubmit = async (data: any) => {
        if (data.content) {
            const result = await createReviewComment({
              variables: {
                reviewComment: data.content,
                reviewBoardId: String(props.id)
              },
              refetchQueries: [
                {
                  query: FETCH_REVIEW_COMMENTS,
                  variables: { reviewBoardId: String(props.id) },
                },
              ],
            })
            console.log(result)
            setValue("content", "");
          }
        
    }
    return(
        <ReviewCommentWriteUI
        register={register}
        handleSubmit={handleSubmit}
        onClickSubmit={onClickSubmit}
        />
    )
}