import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";

import {
  EditBoardId,
  modalDetailState,
  modalEditState,
} from "../../../../commons/stores";
import { FETCH_ALL_BOARDS } from "../list/CommunityList.queries";

import CommunityDetailUIPage from "./CommunityDetail.presenter";
import {
  ATTEND_LIST,
  DELETE_BOARD,
  FETCH_BOARD,
  PICK_BOARD,
} from "./CommunityDetail.queries";

export default function CommunityDetailPage(props) {
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);
  const [EditModalOpen, setEditModalOpen] = useRecoilState(modalEditState);
  const [editBoardId, setEditBoardId] = useRecoilState(EditBoardId);
  const [pick, setPick] = useState(false);
  const router = useRouter();

  const [attendBoard] = useMutation(ATTEND_LIST);
  const [attend, setAttend] = useState(false);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickAttend = async () => {
    try {
      const result = await attendBoard({
        variables: {
          boardId: String(props.boardId),
        },
      });
      setAttend((prev) => !prev);
      if (attend === false) {
        setModalOpen((prev) => !prev);
        Modal.success({ content: "참여완료" });
      } else if (attend === true) {
        setModalOpen((prev) => !prev);
        Modal.error({ content: "참가취소" });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: "에러" });
    }
  };
  const onClickNoAtt = () => {
    alert("참가 인원이 가득 찼습니다.");
  };
  const [pickBoard] = useMutation(PICK_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(props.boardId),
    },
  });
  const onClickClose = () => {
    setModalOpen((prev) => !prev);
  };
  const onClickDelete = () => {
    try {
      void deleteBoard({
        variables: {
          boardId: String(data?.fetchBoard.id),
        },
        refetchQueries: [{ query: FETCH_ALL_BOARDS }],
      });
      setModalOpen((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    router.push("/community/");
  };
  const onClickPick = async () => {
    try {
      const result = await pickBoard({
        variables: {
          boardId: String(props.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(props.boardId) },
          },
        ],
      });
      setPick((prev) => !prev);
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  };

  const onClickEdit = (boardId) => () => {
    setEditModalOpen((prev) => !prev);
    setModalOpen((prev) => !prev);
    setEditBoardId(boardId);
  };

  return (
    <CommunityDetailUIPage
      data={data}
      pick={pick}
      EditModalOpen={EditModalOpen}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickNoAtt={onClickNoAtt}
      onClickClose={onClickClose}
      onClickPick={onClickPick}
      onClickAttend={onClickAttend}
      attend={attend}
    />
  );
}
