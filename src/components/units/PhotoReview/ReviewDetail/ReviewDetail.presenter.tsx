import {
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { timeForToday } from "../../../../commons/library/utils2";
import { getDate } from "../../../../commons/library/utils";
import ReviewCommentWrite from "../../Comment/ReviewComment/reviewComment.container";
import * as S from "./ReviewDetail.styles";
import ReviewCommentList from "../../Comment/ReviewCommentList/ReviewCommentList.container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { reviewWriteModalState } from "../../../../commons/stores";
import { CusEditModal } from "../ReviewEdit/ReviewEdit.styles";
import ReviewEdit from "../ReviewEdit/ReviewEdit.container";

export default function ReviewWriteUI(props: any) {
  return (
    <>
      {props.editModal && (
        <CusEditModal width="1000px" open={true} onCancel={props.onCancel}>
          <ReviewEdit data={props.data} image={props.image} />
        </CusEditModal>
      )}
      <S.Wrapper>
        <S.LeftSide
        // style={{backgroundImage: `url(${props.image[0]})`}}
        >
          <S.CusSlider {...props.settings}>
            {props.image.map((el: string) => (
              <S.Div key={el}>
                <S.Img src={`${el}`} />
              </S.Div>
              // <div key={el}
              // style={{backgroundImage:`url('${el}')`, backgroundColor:"#ffffff"}}
              // >{el}</div>
            ))}
          </S.CusSlider>
        </S.LeftSide>
        <S.RightSide>
          <S.RightInnerWrap>
            <S.UserWrap>
              <S.User>
                <SmileOutlined style={{ paddingRight: "10px" }} />
                <S.Name>{props.data?.fetchReviewBoard.user.nickname}</S.Name>
              </S.User>
              <S.Edit_Del>
                {props.data?.fetchReviewBoard.user.id === props.id ? (
                  <div>
                    <EditOutlined
                      onClick={props.onClickEdit}
                      style={{ marginRight: "20px", cursor: "pointer" }}
                    />
                    <DeleteOutlined
                      onClick={props.onClickDelete(
                        props.data?.fetchReviewBoard.id
                      )}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ) : (
                  ""
                )}
              </S.Edit_Del>
            </S.UserWrap>
            <S.Contents>
              <S.Content>{props.data?.fetchReviewBoard.content}</S.Content>
              <S.CreatedAt>
                {getDate(props.data?.fetchReviewBoard.createdAt)}
              </S.CreatedAt>
            </S.Contents>
            <S.Comment>
              <ReviewCommentList id={props.data?.fetchReviewBoard.id} />
            </S.Comment>
          </S.RightInnerWrap>
          <S.IconWrap>
            <S.HeartLine>
              <HeartOutlined onClick={props.onClickHeart} />
              <S.CountLine>
                {props.data?.fetchReviewBoard.likeCount}
              </S.CountLine>
            </S.HeartLine>
          </S.IconWrap>
          <ReviewCommentWrite id={props.data?.fetchReviewBoard.id} />
        </S.RightSide>
      </S.Wrapper>
    </>
  );
}
