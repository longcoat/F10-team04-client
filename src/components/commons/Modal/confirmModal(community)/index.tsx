import { ExclamationCircleFilled } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import {
  confirmModalState,
  modalDetailState,
} from "../../../../commons/stores";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_BOARD } from "../../../units/CommunityPage/detail/CommunityDetail.queries";
import { FETCH_ALL_BOARDS } from "../../../units/CommunityPage/list/CommunityList.queries";

export default function ConfirmModal(props: any) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(confirmModalState);
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickClose = () => {
    setIsModalOpen(false);
  };

  const onClickDelete = () => {
    try {
      void deleteBoard({
        variables: {
          boardId: String(props.data?.fetchBoard.id),
        },
        refetchQueries: [{ query: FETCH_ALL_BOARDS }],
      });
      setIsModalOpen(false);
      setModalOpen(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    // router.push("/community/");
  };
  return (
    <>
      <Icon />
      <Content>정말 삭제 하시겠습니까?</Content>
      <BtnWrap>
        <Button onClick={onClickClose}>닫기</Button>
        <ButtonDel onClick={onClickDelete}>삭제하기</ButtonDel>
      </BtnWrap>
    </>
  );
}
const Icon = styled(ExclamationCircleFilled)`
  font-size: 70px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  margin: 30px auto;
  font-size: 30px;
  text-align: center;
`;
const BtnWrap = styled.div`
  width: 60%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: #d3d3d3;
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`;
const ButtonDel = styled.button`
  background-color: #151515;
  border: none;
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
  .ant-modal-close-x {
    display: none;
  }
`;
