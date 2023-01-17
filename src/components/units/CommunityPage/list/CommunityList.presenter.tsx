import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import * as S from "./CommunityList.styles";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import CommunityWrite from "../write/CommunityWrite.container";
import CommunityDetailPage from "../detail/CommunityDetail.container";
import InfiniteScroll from "react-infinite-scroller";
import DOMPurify from "dompurify";
import { Modal } from "antd";
import { modalDetailState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../commons/library/utils";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const AreaOption = [
  { value: "", label: "모든 지역" },
  { value: "서울특별시", label: "서울특별시" },
  { value: "인천광역시", label: "인천광역시" },
  { value: "세종특별자치시", label: "세종특별자치시" },
  { value: "대전광역시", label: "대전광역시" },
  { value: "부산광역시", label: "부산광역시" },
  { value: "대구광역시", label: "대구광역시" },
  { value: "광주광역시", label: "광주광역시" },
  { value: "울산광역시", label: "울산광역시" },
  { value: "제주특별자치도", label: "제주특별자치도" },
];
const levelOption = [
  { value: "", label: "모든 레벨" },
  { value: "Beginner", label: "Beginner" },
  { value: "Amateur", label: "Amateur" },
  { value: "Pro", label: "Pro" },
];

export default function CommunityListUi(props: any) {
  const [ModalOpen, setModalOpen] = useRecoilState(modalDetailState);
  const [newest, setNewest] = useState(true);
  const [orderPick, setOrderPick] = useState(false);
  const [ModalEsc, setModalEsc] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  const onClickNew = (e: MouseEvent) => {
    if (!newest) {
      if (orderPick) {
        setNewest(true);
        setOrderPick(false);
        setIsSearch(false);
      } else if (isSearch) {
        setNewest(true);
        setOrderPick(false);
        setIsSearch(false);
      } else {
        setNewest(true);
      }
    }
  };
  const onClickPick = (e: MouseEvent) => {
    if (!orderPick) {
      if (newest) {
        setNewest(false);
        setOrderPick(true);
        setIsSearch(false);
      } else if (isSearch) {
        setNewest(false);
        setOrderPick(true);
        setIsSearch(false);
      } else {
        setOrderPick(true);
      }
    }
  };

  const onClickSearch = () => {
    if (!isSearch) {
      if (newest) {
        setNewest(false);
        setOrderPick(false);
        setIsSearch(true);
      } else if (orderPick) {
        setNewest(false);
        setOrderPick(false);
        setIsSearch(true);
      } else {
        setIsSearch(true);
      }
    }
  };
  const onChangeWord = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearch(false);
    setNewest(true);
    props.setWord(e.target.value);
  };
  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <S.ModalCustom
        centered
        open={ModalOpen}
        width={900}
        onCancel={handleCancel}
      >
        <CommunityDetailPage boardId={props.boardId} />
      </S.ModalCustom>

      <S.Wrapper>
        <S.SearchWrap>
          <S.SelectSide>
            <S.Category>
              <S.Ctg_title>지역</S.Ctg_title>
              <S.Selectbar>
                <S.SelectArea
                  onChange={props.onChangeLo}
                  defaultValue={AreaOption[0]}
                  style={{ width: "100%", borderRadius: "10px" }}
                  options={AreaOption}
                />
              </S.Selectbar>
            </S.Category>
            <S.Category>
              <S.Ctg_title>운동 레벨</S.Ctg_title>
              <S.Selectbar>
                <S.SelectArea
                  onChange={props.onChangeLevel}
                  defaultValue={levelOption[0]}
                  style={{ width: "100%", borderRadius: "10px" }}
                  options={levelOption}
                />
              </S.Selectbar>
            </S.Category>
            <S.InputWrap>
              <S.Ctg_title>제목 검색</S.Ctg_title>
              <S.Selectbar>
                <S.Input
                  type="text"
                  onChange={onChangeWord}
                  placeholder="제목을 입력해주세요."
                />
              </S.Selectbar>
            </S.InputWrap>
          </S.SelectSide>
          <S.ButtonSide>
            <S.SearchButton onClick={onClickSearch}>검색하기</S.SearchButton>
          </S.ButtonSide>
        </S.SearchWrap>
        <S.ResultWrap>
          <S.ResultWrite>
            <S.ResultTitle>검색결과</S.ResultTitle>
          </S.ResultWrite>
          <S.TabMenu>
            <S.Menu1>
              <S.Item1 isActive={newest} onClick={onClickNew}>
                최신순
              </S.Item1>
              <S.Item1 isActive={orderPick} onClick={onClickPick}>
                인기순
              </S.Item1>
            </S.Menu1>
            <CommunityWrite />
          </S.TabMenu>

          {newest ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
            >
              <S.Items>
                {props.result.map((el: any, index: any) => (
                  <S.Item key={el.id}>
                    <S.Img
                      style={{
                        backgroundImage:
                          el.image?.imgUrl === undefined ||
                          el.image?.imgUrl === ""
                            ? "url(./images/basic.png)"
                            : `url(${el.image?.imgUrl})`,
                        backgroundPosition: "center",
                      }}
                    ></S.Img>
                    <S.Main>
                      <S.Title2>
                        {el.title
                          .replaceAll(props.keyword, `%^&${props.keyword}%^&`)
                          .split("%^&")
                          .map((el: any) => (
                            <span
                              key={uuidv4()}
                              style={{
                                color: el === props.keyword ? "red" : "black",
                              }}
                            >
                              {el}
                            </span>
                          ))}
                      </S.Title2>
                      <S.Tag>
                        <S.Level>#{el.recruitGrade}</S.Level>
                      </S.Tag>
                      <S.SpoDate>
                        <S.Sports>{el.recruitSports}</S.Sports>
                        <S.Date>
                          {el.attendCount}/{el.recruitPeople}
                        </S.Date>
                      </S.SpoDate>
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
              </S.Items>
            </InfiniteScroll>
          ) : (
            ""
          )}
          {orderPick ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore2}
              hasMore={true}
            >
              <S.Items>
                {props.result2.map((el: any) => (
                  <S.Item key={el.id}>
                    <S.Img
                      style={{
                        backgroundImage:
                          el.image?.imgUrl === undefined ||
                          el.image?.imgUrl === ""
                            ? "url(./images/basic.png)"
                            : `url(${el.image?.imgUrl})`,
                        backgroundPosition: "center",
                      }}
                    ></S.Img>
                    <S.Main>
                      <S.Title2>
                        {el.title
                          .replaceAll(props.keyword, `%^&${props.keyword}%^&`)
                          .split("%^&")
                          .map((el) => (
                            <span
                              key={uuidv4()}
                              style={{
                                color: el === props.keyword ? "red" : "black",
                              }}
                            >
                              {el}
                            </span>
                          ))}
                      </S.Title2>
                      <S.Tag>
                        <S.Level>#{el.recruitGrade}</S.Level>
                      </S.Tag>
                      <S.SpoDate>
                        <S.Sports>{el.recruitSports}</S.Sports>
                        <S.Date>
                          {el.attendCount}/{el.recruitPeople}
                        </S.Date>
                      </S.SpoDate>
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
              </S.Items>
            </InfiniteScroll>
          ) : (
            ""
          )}
          {isSearch ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
            >
              <S.Items>
                {props.search?.searchBoards.map((el: any) => (
                  <S.Item key={el.id}>
                    <S.Img
                      style={{
                        backgroundImage:
                          el.image?.imgUrl === undefined ||
                          el.image?.imgUrl === ""
                            ? "url(./images/basic.png)"
                            : `url(${el.image?.imgUrl})`,
                        backgroundPosition: "center",
                      }}
                    ></S.Img>
                    <S.Main>
                      <S.Title2>
                        {el.title
                          .replaceAll(props.keyword, `%^&${props.keyword}%^&`)
                          .split("%^&")
                          .map((el: any) => (
                            <span
                              key={uuidv4()}
                              style={{
                                color: el === props.keyword ? "red" : "black",
                              }}
                            >
                              {el}
                            </span>
                          ))}
                      </S.Title2>
                      <S.Tag>
                        <S.Level>#{el.recruitGrade}</S.Level>
                      </S.Tag>
                      <S.SpoDate>
                        <S.Sports>{el.recruitSports}</S.Sports>
                        <S.Date>
                          {el.attendCount}/{el.recruitPeople}
                        </S.Date>
                      </S.SpoDate>
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
              </S.Items>
            </InfiniteScroll>
          ) : (
            ""
          )}
        </S.ResultWrap>
      </S.Wrapper>
    </>
  );
}
