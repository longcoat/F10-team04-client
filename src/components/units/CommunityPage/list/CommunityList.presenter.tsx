import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import * as S from "./CommunityList.styles";
import React, { useState } from "react";
import CommunityWrite from "../write/CommunityWrite.container";
import CommunityDetailPage from "../detail/CommunityDetail.container";
import InfiniteScroll from "react-infinite-scroller";
import DOMPurify from "dompurify";
import { Modal } from "antd";
import { modalState2 } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function CommunityListUi(props: any) {
  const [ModalOpen, setModalOpen] = useRecoilState(modalState2);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  const onClickfirst = (e) => {
    if (!first) {
      if (second) {
        setFirst((prev) => !prev);
        setSecond((prev) => !prev);
      } else {
        setFirst((prev) => !prev);
      }
    }
  };
  const onClicksecond = (e) => {
    if (!second) {
      if (first) {
        setFirst((prev) => !prev);
        setSecond((prev) => !prev);
      } else {
        setSecond((prev) => !prev);
      }
    }
  };
  return (
<>
    <S.ModalCustom
    centered
    open={ModalOpen}
    onOk={() => setModalOpen(false)}
    onCancel={() => setModalOpen(false)}
    width={1000}
    zIndex={10}
  >
    <CommunityDetailPage   boardId={props.boardId}/>
    </S.ModalCustom>
    <S.Wrapper>
      <S.Title>검색결과</S.Title>
      <S.MenuWrapper>
        <S.MenuWrap>
          <S.Menu isActive={first} onClick={onClickfirst}>
            실시간
          </S.Menu>
          <S.Menu2 isActive={second} onClick={onClicksecond}>
            관심순
          </S.Menu2>
        </S.MenuWrap>
        <CommunityWrite></CommunityWrite>
      </S.MenuWrapper>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      <S.ItemWrapper>
      {props.data?.fetchAllBoards.map((el, index) => (
        <S.Item key={el.id}>
          <S.Img src="./images/list/1.png"></S.Img>
          <S.Main>
            <S.Title2>{el.title}</S.Title2>
            {typeof window !== "undefined" && (
                <S.Contents
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(el.content),
                  }}
                ></S.Contents>
              )}
            <S.Sports>{el.recruitSports}</S.Sports>
            <S.Footer>
              <S.Location>
                <S.Icon src="./images/list/map.png"></S.Icon>
                <S.LocaionText>{el.recruitRegion}</S.LocaionText>
              </S.Location>
              <RightOutlined onClick={props.onClickDetail(el.id)} />
            </S.Footer>
          </S.Main>
        </S.Item>
        ))}
      </S.ItemWrapper>
      </InfiniteScroll>
    </S.Wrapper>
    </>
  );
}
