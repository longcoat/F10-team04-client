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
import { getDate } from "../../../../commons/library/utils";

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
  { value: "",label: "모든 레벨"},
  { value: "Beginner",label: "Beginner"},
  { value: "Amateur",label: "Amateur"},
  {value: "Pro",label: "Pro"},
];

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
    width={900}
  >
    <CommunityDetailPage   boardId={props.boardId}/>
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
              <S.Input type="text"/>
            </S.Selectbar>
          </S.InputWrap>
        </S.SelectSide>
        <S.ButtonSide>
          <S.SearchButton >검색하기</S.SearchButton>
        </S.ButtonSide>
      </S.SearchWrap>
      <S.ResultWrap>
          <S.ResultWrite>
          <S.ResultTitle>검색결과</S.ResultTitle>
        
          </S.ResultWrite>
          <S.TabMenu>
            <S.Menu1>
            <S.Item1 isActive={first} onClick={onClickfirst}>최신순</S.Item1>
            <S.Item1 isActive={second} onClick={onClicksecond}>인기순</S.Item1>
            </S.Menu1>
            <CommunityWrite />
          </S.TabMenu>
          {first?
           <S.Items>
            {props.result.map((el, index) => (
        <S.Item key={el.id}>
          <S.Img 
           style={{
            backgroundImage:
              el.image === undefined || el.image === ""
                ? "url(./images/list/1.png)"
                : `url(https://storage.googleapis.com/${el.image})`,
          }}
          ></S.Img>
          <S.Main>
            <S.Title2>{el.title}</S.Title2>
          <S.Tag>
            <S.Level>#{el.recruitGrade}</S.Level>
          </S.Tag>
            <S.SpoDate>
            <S.Sports>{el.recruitSports}</S.Sports>
            <S.Date>{el.attendCount}/{el.recruitPeople}</S.Date>
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
          :
          <S.Items>
             {props.result2.map((el, index) => (
        <S.Item key={el.id}>
          <S.Img src="./images/list/1.png"></S.Img>
          <S.Main>
            <S.Title2>{el.title}</S.Title2>
          <S.Tag>
            <S.Level>#{el.recruitGrade}</S.Level>
          </S.Tag>
            <S.SpoDate>
            <S.Sports>{el.recruitSports}</S.Sports>
            <S.Date>{el.recruitPeople}/{el.attendCount}</S.Date>
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
          }
         
        </S.ResultWrap>
     
    </S.Wrapper>

    </>
  );
}
