import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState2 } from "../../../../commons/stores";
import { FETCH_BOARD } from "../detail/CommunityDetail.queries";
import CommunityListUi from "./CommunityList.presenter";
import { FETCH_ALL_BOARDS } from "./CommunityList.queries";

export default function CommunityList() {
  const [ModalOpen, setModalOpen] = useRecoilState(modalState2);
  const [boardId, setBoardId] = useState("");
  const { data, refetch, fetchMore } = useQuery(FETCH_ALL_BOARDS);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchAllBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchAllBoards == undefined) {
          return {
            fetchAllBoards: [...prev.fetchAllBoards],
          };
        }
        return {
          fetchAllBoards: [
            ...prev.fetchAllBoards,
            ...fetchMoreResult?.fetchAllBoards,
          ],
        };
      },
    });
  };
  const onClickDetail = (boardId) => () => {
    setModalOpen((prev) => !prev);
    setBoardId(boardId);
  };
  return (
    <CommunityListUi
      boardId={boardId}
      data={data}
      onLoadMore={onLoadMore}
      onClickDetail={onClickDetail}
    />
  );
}
