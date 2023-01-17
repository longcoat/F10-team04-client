import { DeleteOutlined } from "@ant-design/icons";
import { toFormData } from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { timeForToday } from "../../../../commons/library/utils2";
import { LoggedInUserId } from "../../../../commons/stores";
import AnswerList from "../ReviewCommentAnswerList/AnswerList.container";
import CommentAnswerWriter from "../ReviewCommentAnswerWrite/AnswerWrite.container";
import * as S from "./ReviewCommentList.styles";

export default function ReviewCommentListItem(props: any) {
  const [id, setId] = useRecoilState(LoggedInUserId);
  const [isActive, setIsActive] = useState(false);
  const [more, setMore] = useState(false);

  const onClickAnswer = () => {
    setIsActive((prev) => !prev);
  };
  const onClickMore = () => {
    setMore((prev) => !prev);
  };
  return (
    <div key={props.key}>
      <S.Wrap>
        <S.IconWrap>
        <S.ImageProfile
                  src={props.el.user.image?.imgUrl || "/profile.png"}
                />
        </S.IconWrap>
        <S.ContentWrap>
          <S.firstLine>
            <S.MainWrap>
              <S.user>{props.el.user.nickname}</S.user>
              <S.content>{props.el.reviewComment}</S.content>
            </S.MainWrap>
            {props.el.user.id === id ? (
              <DeleteOutlined
                onClick={props.onClickDelete(props.el.id)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              ""
            )}
          </S.firstLine>
          <S.SecondLine>
            <S.Date>{timeForToday(props.el.createdAt)}</S.Date>
            <S.ReplyBtn onClick={onClickAnswer}>답글 달기</S.ReplyBtn>
            <S.ReplyBtn onClick={onClickMore}>
              {more ? "답글 닫기" : "답글 보기"}
            </S.ReplyBtn>
          </S.SecondLine>
        </S.ContentWrap>
      </S.Wrap>
      {isActive && <CommentAnswerWriter el={props.el} setMore={setMore} />}
      {more && <AnswerList el={props.el} />}
    </div>
  );
}
