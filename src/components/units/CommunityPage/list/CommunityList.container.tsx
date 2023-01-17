import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  AttendState,
  modalDetailState,
  PickState,
  ToggleState,
} from "../../../../commons/stores";
import CommunityListUi from "./CommunityList.presenter";
import {
  FETCH_ALL_BOARDS,
  FETCH_ALL_BOARDS_WITH_PICK_BOARD,
  SEARCH_BOARDS,
} from "./CommunityList.queries";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchAllBoardsArgs,
  IQuerySearchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function CommunityList() {
  const [keyword, setKeyword] = useState("");
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);
  const [pick, setPick] = useRecoilState(PickState);
  const [attend, setAttend] = useRecoilState(AttendState);
  const [Toggle, setToggle] = useRecoilState(ToggleState);
  const [boardId, setBoardId] = useState("");
  const [level, setLevel] = useState("");
  const [Lo, setLo] = useState("");
  const [word, setWord] = useState("");
  const result = [];
  const result2 = [];

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchAllBoards">,
    IQueryFetchAllBoardsArgs
  >(FETCH_ALL_BOARDS);
  const {
    data: Pick,
    refetch: pickRefetch,
    fetchMore: pickFetchMore,
  } = useQuery(FETCH_ALL_BOARDS_WITH_PICK_BOARD);
  const { data: search } = useQuery<
    Pick<IQuery, "searchBoards">,
    IQuerySearchBoardsArgs
  >(SEARCH_BOARDS, {
    variables: {
      word,
    },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchAllBoards.length / 8) + 1,
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
        page: Math.ceil(Pick?.fetchAllBoardsWithPickCount.length / 8) + 1,
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
  const onClickDetail = (boardId: any) => () => {
    setModalOpen((prev) => !prev);
    setBoardId(boardId);
  };
  const onChangeLevel = (e: MouseEvent) => {
    setLevel(String(e));
  };
  const onChangeLo = (e: MouseEvent) => {
    setLo(String(e));
  };

  data?.fetchAllBoards.forEach((el) => {
    if (
      el.recruitRegion?.includes(Lo) === true &&
      el.recruitGrade?.includes(level) === true
    ) {
      result.push(el);
    }
  });
  Pick?.fetchAllBoardsWithPickCount.forEach((el: any) => {
    if (
      el.recruitRegion?.includes(Lo) === true &&
      el.recruitGrade?.includes(level) === true
    ) {
      result2.push(el);
    }
  });

  return (
    <CommunityListUi
      result={result}
      result2={result2}
      boardId={boardId}
      Pick={Pick}
      data={data}
      word={word}
      search={search}
      setWord={setWord}
      onLoadMore2={onLoadMore2}
      onChangeLevel={onChangeLevel}
      onChangeLo={onChangeLo}
      onLoadMore={onLoadMore}
      onClickDetail={onClickDetail}
      keyword={keyword}
    />
  );
}
