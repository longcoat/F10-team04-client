import { ExclamationCircleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import {
  attendListModalState,
  modalDetailState,
} from "../../../../commons/stores";

export default function AttendList(props: any) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(attendListModalState);
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);

  const onClickClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Content>참가자 명단</Content>
      <Main>
        {props.data?.fetchBoard.attendList.map((el: any) => (
          <BoardListWrapper key={el.id}>
            <BoardList>
              <ImageListProfileBox>
                <ImageListProfile
                  src={el.user.image.imgUrl || "/profile.png"}
                />
              </ImageListProfileBox>
              <Profile1>
                <InfoTextBox1>
                  <Title1>{el.user.nickname}</Title1>
                  <Nim1>님</Nim1>
                </InfoTextBox1>
                <Content1>
                  <Exercise>#{el.user.prefer}</Exercise>
                  <Section2>#{el.user.region}</Section2>
                  <Sex1>#{el.user.gender}</Sex1>
                </Content1>
              </Profile1>
            </BoardList>
          </BoardListWrapper>
        ))}
      </Main>
      <BtnWrap>
        <Button onClick={onClickClose}>확인</Button>
      </BtnWrap>
    </>
  );
}
const Main = styled.div`
  margin-top: 10px;
  height: 170px;
  overflow: auto;
`;

const Content = styled.div`
  font-size: 30px;
  text-align: center;
`;
const BtnWrap = styled.div`
  width: 90%;
  margin: 0px auto;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  background-color: #151515;
  color: white;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  cursor: pointer;
`;

export const ConfirmCus = styled(Modal)`
  padding-top: 60px;

  .ant-select-selection-item {
    color: black;
  }
  .ant-modal-title {
    font-size: 20px;
  }

  .ant-modal-content {
    width: 500px;
    height: 300px;
    border-radius: 20px;
  }

  .ant-modal-body {
    height: 500px;
  }
  .ant-modal-header {
    padding: 16px 24px;
    padding-top: 28px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 20px 20px 0 0;
    height: 80px;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .ant-modal-footer > .ant-btn-primary {
    width: 161px;
    height: 63px;
    background-color: #000;
    color: #fff;
    border: none;
  }
  .ant-modal-footer > .ant-btn-default {
    width: 161px;
    height: 63px;
    background-color: #f6f6f6;
    color: #8b8b8b;
    border: none;
  }
  .ant-modal-footer {
    height: 0px;
    border: none;
  }
  .ant-btn {
    visibility: hidden;
  }
`;
export const BoardListWrapper = styled.div`
  padding: 0 30px 0 30px;
`;
export const BoardList = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  border-bottom: 1px solid #8b8b8b;
  width: 100%;
  margin-bottom: 10px;
`;
export const ImageListProfileBox = styled.div`
  padding: 5px 15px 10px 0;
`;
export const ImageListProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;
export const Profile1 = styled.div`
  width: 100%;
`;
export const InfoTextBox1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const Title1 = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
`;
export const Nim1 = styled.div`
  padding-top: 5px;
  color: #8b8b8b;
`;
export const Content1 = styled.div`
  width: 100%;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #8b8b8b;
  /* identical to box height */
  display: flex;
  align-items: center;
  letter-spacing: -0.0024em;
  padding-top: 5px;
  padding-right: 20px;
  color: #0b0b0b;
`;
export const Exercise = styled.div`
  padding-right: 2%;
  color: #8b8b8b;
`;
export const Section2 = styled.div`
  padding-right: 2%;
  color: #8b8b8b;
`;
export const Sex1 = styled.div`
  color: #8b8b8b;
`;
