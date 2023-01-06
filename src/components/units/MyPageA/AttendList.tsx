import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_ATTEND_LIST = gql`
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
      }
      createdAt
      updatedAt
    }
  }
`;

export default function AttendList() {
  const { data } = useQuery(FETCH_ATTEND_LIST);
  console.log(data?.fetchAttendList.board);
  return (
    <>
      {data?.fetchAttendList?.map((el: any, index) => (
        // <BoardListWrapper key={el.id}>
        <BoardList key={el.id}>
          <ImageListProfileBox>
            <ImageListProfile src="/profile.png" />
          </ImageListProfileBox>
          <InfoTextWrapper>
            <InfoTextBox>
              <Title>{el.board.title}</Title>
              <MeetTime>시간 12월 11일 15시</MeetTime>
            </InfoTextBox>
            <Content>
              <ContentText>{el.board.content}</ContentText>
              <ReviewBtn>참가취소</ReviewBtn>
            </Content>
          </InfoTextWrapper>
          <ThumbnailBox>
            <ThumbnailImage src="/thumbnailsample.png" />
          </ThumbnailBox>
        </BoardList>
        // </BoardListWrapper>;
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
export const Title = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
`;
export const MeetTime = styled.div`
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
