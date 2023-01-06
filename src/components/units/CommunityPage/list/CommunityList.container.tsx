import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalDetailState} from "../../../../commons/stores";
import { FETCH_BOARD } from "../detail/CommunityDetail.queries";
import CommunityListUi from "./CommunityList.presenter";

import {
  FETCH_ALL_BOARDS,
  FETCH_ALL_BOARDS_WITH_PICK_BOARD,
} from "./CommunityList.queries";

export default function CommunityList() {

  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);
  const [boardId, setBoardId] = useState("")
  const [level, setLevel] = useState("")

  const { data, refetch, fetchMore } = useQuery(FETCH_ALL_BOARDS);
  const [Lo, setLo] = useState("");
  const {
    data: Pick,
    refetch: pickRefetch,
    fetchMore: pickFetchMore,
  } = useQuery(FETCH_ALL_BOARDS_WITH_PICK_BOARD);
  const result = [];
  const result2 = [];
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchAllBoards.length / 9) + 1,
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

  const onLoadMore2 = () => {
    if (!data) return;

    pickFetchMore({
      variables: {
        page: Math.ceil(Pick?.fetchAllBoardsWithPickCount.length / 9) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchAllBoardsWithPickCount == undefined) {
          return {
            fetchAllBoardsWithPickCount: [...prev.fetchAllBoardsWithPickCount],
          };
        }
        return {
          fetchAllBoardsWithPickCount: [
            ...prev.fetchAllBoardsWithPickCount,
            ...fetchMoreResult?.fetchAllBoardsWithPickCount,
          ],
        };
      },
    });
  };
  const onClickDetail = (boardId) => () => {
    setModalOpen((prev) => !prev);
    setBoardId(boardId);
  };
  const onChangeLevel = (e) => {
    setLevel(e);
  };
  const onChangeLo = (e) => {
    setLo(e);
  };
  data?.fetchAllBoards.forEach((el) => {
    if (
      el.recruitRegion?.includes(Lo) === true &&
      el.recruitGrade?.includes(level) === true
    ) {
      result.push(el);
    }
  });
  Pick?.fetchAllBoardsWithPickCount.forEach((el) => {
    if (
      el.recruitRegion?.includes(Lo) === true &&
      el.recruitGrade?.includes(level) === true
    ) {
      result2.push(el);
    }
  });
  console.log(data);
  return (
    <CommunityListUi
      result={result}
      result2={result2}
      boardId={boardId}
      Pick={Pick}
      data={data}
      onLoadMore2={onLoadMore2}
      onChangeLevel={onChangeLevel}
      onChangeLo={onChangeLo}
      onLoadMore={onLoadMore}
      onClickDetail={onClickDetail}
    />
  );
}
