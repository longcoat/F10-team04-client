import { MessageOutlined } from "@ant-design/icons";
import * as S from "./reviewComment.styles";

export default function ReviewCommentWriteUI(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <MessageOutlined style={{ fontSize: "25px" }} />
      <S.Input
        type="text"
        {...props.register("content")}
        placeholder="댓글 달기..."
      ></S.Input>
      <S.Btn>댓글 추가</S.Btn>
    </S.Wrapper>
  );
}
