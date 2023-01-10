import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import AnswerWriteUI from "./AnswerWrite.presenter";
import { CREATE_NESTED_COMMENT } from "./AnswerWrite.query";

export default function CommentAnswerWriter(props){
    const [isActive, setIsActive] = useState(true);
    const [contents, setContents] = useState("");

    const [createNestedComment] = useMutation(CREATE_NESTED_COMMENT);

    const onChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
      };

    const onClickWrite = async () => {
        if (contents) {
          const result = await createNestedComment({
            variables: {
                commentId: String(props.el.id),
                nestedComment: String(contents)
            },
            // refetchQueries: [
            //   {
            //     query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            //     variables: { commentId: String(props.el.id) },
            //   },
            // ],
          });
          console.log(result)
          setContents("");
          setIsActive((prev) => !prev);
        } else if (!contents) {
          alert("내용을 입력해주세요.");
        }
      };
    return(
      <AnswerWriteUI 
      isActive={isActive}
      contents={contents}
      onChangeAnswer={onChangeAnswer}
      onClickWrite={onClickWrite}
      />
    )
}