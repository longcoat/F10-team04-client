import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { appointment } from "../../../commons/library/appointment";
import { attendListIdState, modalDetailState, reviewWriteModalState } from "../../../commons/stores";
import { OneEllipsis } from "../../../commons/styles/commonStyles";
import { IQuery, IQueryFetchMyAllBoardsArgs } from "../../../commons/types/generated/types";
import CommunityDetailPage from "../CommunityPage/detail/CommunityDetail.container";
import { FETCH_BOARD } from "../CommunityPage/detail/CommunityDetail.queries";
import * as M from "../../../commons/styles/mediaQueries";
import { CusModal } from "../PhotoReview/ReviewWrite/ReviewWrite.styles";
import ReviewWrite from "../PhotoReview/ReviewWrite/ReviewWrite.container";

export const FETCH_MY_All_BOARDS = gql`
  query fetchMyAllBoards($page: Int) {
    fetchMyAllBoards(page: $page) {
      id
      title
      content
      attendCount
      pickCount
      appointment
      recruitRegion
      recruitGrade
      createdAt
      recruitPeople
      image{
        imgUrl
      }
    }
  }
`;

export default function MyBoardList() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(reviewWriteModalState);
  const [attendListId, setAttendListId] = useRecoilState(attendListIdState);

  const { data } = useQuery<
  Pick<IQuery, "fetchMyAllBoards">,
  IQueryFetchMyAllBoardsArgs
>(FETCH_MY_All_BOARDS);
console.log(data)

  // 리스트 클릭시 디테일 로 넘어가게
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);
  const [boardId, setBoardId] = useState("");
  const onClickDetail = (boardId) => () => {
    setModalOpen((prev) => !prev);
    setBoardId(boardId);
  };

  const onClickWriteReview = (attendListId) => async (e) => {
    e.stopPropagation();
    setAttendListId(attendListId)
    setIsModalOpen(true);
  };

  return (
    <>
       {isModalOpen && (
        <CusModal
          width="1100px"
          open={true}
        >
          <ReviewWrite />
        </CusModal>
      )}
      <ModalCustom centered open={ModalOpen} width={1000}>
        <CommunityDetailPage boardId={boardId} />
      </ModalCustom>
      {data?.fetchMyAllBoards?.map((el: any, index) => (
        <BoardListWrapper key={el.id}>
          <BoardList onClick={onClickDetail(el.id)}>
            <ImageListProfileBox>
              <ImageListProfile src="/profile.png" />
            </ImageListProfileBox>
            <InfoTextWrapper>
              <InfoTextBox>
                <Title>{el.title}</Title>
                <MeetTime>{appointment(el.appointment)}</MeetTime>
              </InfoTextBox>
              <Content>
                <ContentText>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: String(el.content),
                    }}
                  />
                </ContentText>
                <Date>
                  {el.attendCount}/{el.recruitPeople}
                </Date>
                <ReviewBtn onClick={onClickWriteReview(el.id)}>
                  리뷰쓰기
                </ReviewBtn>
              </Content>
            </InfoTextWrapper>
            <ThumbnailBox>
              <ThumbnailImage 
              style={{backgroundImage: el.image?.imgUrl ? `url(${el.image.imgUrl})` : `url(/images/basic.png)`}}
              ></ThumbnailImage>
            </ThumbnailBox>
          </BoardList>
        </BoardListWrapper>
      ))}
    </>
  );
}

export const BoardListWrapper = styled.div`
  padding: 0 80px 0 80px;
`;

export const BoardList = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #8b8b8b;
`;
export const ImageListProfileBox = styled.div`
  padding: 25px 35px 25px 0;
`;

export const ImageListProfile = styled.img`
  width: 64px;
`;

export const InfoTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 25px 0 25px 0;
`;

export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const Title = styled(OneEllipsis)`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  width: 70%;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
`;
export const MeetTime = styled.div`
  width: 15%;
  padding-right: 20px;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;

  ${M.mediaL} {
    width: 25%;
  }
`;
export const Content = styled(OneEllipsis)`
  width: 100%;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */
  display: flex;
  /* justify-content: space-between; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  letter-spacing: -0.0024em;

  padding-top: 15px;
  padding-right: 20px;

  color: #0b0b0b;
`;
export const ContentText = styled(OneEllipsis)`
  padding-right: 20px;
  width: 86.7%;

  ${M.mediaL} {
    width: 90.7%;
  }
`;

export const ContentTextText = styled.div`
  /* width: 70%; */
`;
export const ReviewBtn = styled.button`
  background: black;
  border-radius: 8px;
  color: white;
  font-size: 14px;
`;
export const ThumbnailBox = styled.div`
  width: 120px;
  height: 90px;
  padding-top: 20px;
  border-radius: 12px;
`;
export const ThumbnailImage = styled.div`
  border-radius: 12px;
  height: 90px;
  background-size: cover;
  background-position: center;
`;
export const Date = styled.div`
`;
export const ModalCustom = styled(Modal)`
  .ant-modal-header {
    padding: 0px 24px 16px 24px;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 2px 2px 0 0;
    height: 80px;
  }
  .ant-modal-body {
    padding-top: 10px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
  }
  .ant-modal-footer > .ant-btn-primary {
    display: none;
  }
  .ant-modal-footer > .ant-btn-default {
    display: none;
  }
  .ant-modal-close-x {
    display: none;
  }
`;
