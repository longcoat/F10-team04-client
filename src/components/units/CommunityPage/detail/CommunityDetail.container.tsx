import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";



import { confirmModalState, EditBoardId, modalDetailState, modalEditState} from "../../../../commons/stores";
import { IMutation, IMutationAttendListArgs, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs, IQueryFetchMyPickBoardsArgs } from "../../../../commons/types/generated/types";

import { FETCH_ATTEND_LIST } from "../../MyPageA/AttendList";
import { FETCH_MY_PICK_BOARDS } from "../../MyPageA/MyPickList";

import { FETCH_ALL_BOARDS } from "../list/CommunityList.queries";

import CommunityDetailUIPage from "./CommunityDetail.presenter";
import {
  ATTEND_LIST,
  FETCH_BOARD,
  FETCH_USER_LOGGED_IN,
  PICK_BOARD,
} from "./CommunityDetail.queries";

export default function CommunityDetailPage(props) {
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);
  const [EditModalOpen, setEditModalOpen] = useRecoilState(modalEditState);
  const [editBoardId, setEditBoardId] = useRecoilState(EditBoardId);

  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)
  const [pick, setPick] = useState(false)

  const [attend, setAttend] = useState(false);
  const router = useRouter();

  const [attendBoard] = useMutation(ATTEND_LIST);



  
  const { data:PickList } = useQuery<
  Pick<IQuery, "fetchMyPickBoards">,
  IQueryFetchMyPickBoardsArgs
>(FETCH_MY_PICK_BOARDS);

const [pickBoard] = useMutation(PICK_BOARD);
  
const { data } = useQuery<
  Pick<IQuery, "fetchBoard">,
  IQueryFetchBoardArgs
>(FETCH_BOARD, {
    variables: {
      boardId: String(props.boardId),
    },
  });
   const { data: userData } =
    useQuery(FETCH_USER_LOGGED_IN);

  const { data: AttendList } = useQuery(FETCH_ATTEND_LIST);

  console.log(PickList?.fetchMyPickBoards, data);

  useEffect(() => {
    // PickList?.fetchMyPickBoards.forEach((el) => {
    //   if (el.board.id === data?.fetchBoard.id) {
    //     setPick(true);
    //     return;
    //   } else {
    //     setPick(false);
    //   }
    // });
    AttendList?.fetchAttendList.forEach((el) => {
      if (el.board.id === data?.fetchBoard.id) {
        console.log(el.board.id === data?.fetchBoard.id)
        setAttend(true);
      }
console.log(attend)
    })
  },[[data]])


  const onClickAttend = (boardId) => async () => {
    try {
      const result = await attendBoard({
        variables: {
          boardId: String(props.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_ATTEND_LIST,
          },
          { query: FETCH_ALL_BOARDS },
        ],
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
 

  const onClickClose = () => {
    setModalOpen((prev) => !prev);
  };
  const onClickDelete = () => {
    setConfirmModal(true)
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
          { query: FETCH_MY_PICK_BOARDS },
        ],
      });
      setPick(true);
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
      userData={userData}
      data={data}
      pick={pick}
      confirmDel={confirmModal}
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
