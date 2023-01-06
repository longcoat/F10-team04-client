import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { mapCenterViewState, mapPathViewState, modalState2 } from "../../../../commons/stores";
import CommunityDetailUIPage from "./CommunityDetail.presenter";
import { FETCH_BOARD, PICK_BOARD } from "./CommunityDetail.queries";

export default function CommunityDetailPage(props) {
  const [ModalOpen, setModalOpen] = useRecoilState(modalState2);
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterViewState);
  const [mapPath, setMapPath] = useRecoilState(mapPathViewState);
  const [pick, setPick] = useState(false)
  const router = useRouter()

  const [pickBoard] = useMutation(PICK_BOARD);
  const { data } = useQuery(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(props.boardId),
      },
    }
  );

  const onClickClose =() => {
    setModalOpen(prev=>!prev)
  }
  const onClickPick = async () => {
    try {
      const result = await pickBoard({
        variables: {
          boardId: String(props.boardId)
        }, refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(props.boardId) },
          },
        ],
      });
      setPick(prev => !prev)
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  }
  return <CommunityDetailUIPage 
  data={data} 
  pick={pick}
  onClickClose={onClickClose}
  onClickPick={onClickPick}
  />;
}
