import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { appointment } from "../../../commons/library/appointment";
import { attendListIdState, modalDetailState } from "../../../commons/stores";
import { OneEllipsis } from "../../../commons/styles/commonStyles";
import CommunityDetailPage from "../CommunityPage/detail/CommunityDetail.container";
import { FETCH_BOARD } from "../CommunityPage/detail/CommunityDetail.queries";
import ReviewWrite from "../PhotoReview/ReviewWrite/ReviewWrite.container";
import { CusModal } from "../PhotoReview/ReviewWrite/ReviewWrite.styles";

export const FETCH_ATTEND_LIST = gql`
  query fetchAttendList {
    fetchAttendList {
      id
      user {
        id
        email
        nickname
        age
        gender
      }
      board {
        id
        title
        content
        appointment
      }
      createdAt
      updatedAt
    }
  }
`;
export const ATTEND_LIST = gql`
  mutation attendList($boardId: String!) {
    attendList(boardId: $boardId)
  }
`;

export default function AttendList() {
  const { data } = useQuery(FETCH_ATTEND_LIST);
  // 리스트 클릭시 디테일 로 넘어가게
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);
  const [attendListId, setAttendListId] = useRecoilState(attendListIdState);
  const [boardId, setBoardId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickMore = () => {};
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onClickDetail = (boardId) => () => {
    setModalOpen((prev) => !prev);
    setBoardId(boardId);
  };
  const [attend, setAttend] = useState(true);

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
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ReviewWrite />
        </CusModal>
      )}
      {ModalOpen && (
        <ModalCustom centered open={ModalOpen} width={900}>
          <CommunityDetailPage boardId={boardId} />
        </ModalCustom>
      )}
      {data?.fetchAttendList?.map((el: any, index) => (
        <BoardListWrapper key={el.id}>
          <BoardList key={el.id} onClick={onClickDetail(el.board.id)}>
            <ImageListProfileBox>
              <ImageListProfile src="/profile.png" />
            </ImageListProfileBox>
            <InfoTextWrapper>
              <InfoTextBox>
                <Title>{el.board.title}</Title>
                <MeetTime>{appointment(el.board.appointment)}</MeetTime>
              </InfoTextBox>
              <Content>
                <ContentText>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: String(el.board.content),
                    }}
                  />
                </ContentText>
                <ReviewBtn onClick={onClickWriteReview(el.id)}>
                  리뷰쓰기
                </ReviewBtn>
              </Content>
            </InfoTextWrapper>
            <ThumbnailBox>
              <ThumbnailImage src="/thumbnailsample.png" />
            </ThumbnailBox>
          </BoardList>
        </BoardListWrapper>
      ))}
    </>
  );
}

export const BoardListWrapper = styled.div`
  padding: 0 200px 0 200px;
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
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
`;
export const MeetTime = styled(OneEllipsis)`
  width: 21%;
  padding-right: 20px;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
`;
export const Content = styled.div`
  width: 100%;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: -0.0024em;

  padding-top: 15px;
  padding-right: 20px;

  color: #0b0b0b;
`;
export const ContentText = styled.div`
  padding-right: 20px;
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
export const ThumbnailImage = styled.img`
  border-radius: 12px;
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
