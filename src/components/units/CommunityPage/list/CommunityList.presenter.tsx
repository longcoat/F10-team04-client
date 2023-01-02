import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import * as S from "./CommunityList.styles";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import CommunityWrite from "../write/CommunityWrite.container";
export default function CommunityListUi(props: any) {
  return (
    <S.Wrapper>
      <S.Title>검색결과</S.Title>
      <S.MenuWrapper>
        <S.MenuWrap>
          <S.Menu>실시간</S.Menu>
          <S.Menu2>마감순</S.Menu2>
        </S.MenuWrap>
        <CommunityWrite></CommunityWrite>
      </S.MenuWrapper>
      <S.ItemWrapper>
        <S.Item>
          <S.Img src="./images/list/1.png"></S.Img>
          <S.Main>
            <S.Title2>당산 게이트볼</S.Title2>
            <S.Contents>
              당산역 근처 게이트볼 하실 분 구합니다. <br></br># 50대 #19시 #
              Beginner #16일
            </S.Contents>
            <S.Sports>게이트볼</S.Sports>
            <S.Footer>
              <S.Location>
                <S.Icon src="./images/list/map.png"></S.Icon>
                <S.LocaionText>서울특별시</S.LocaionText>
              </S.Location>
              <RightOutlined style={{ paddingRight: 10 }} />
            </S.Footer>
          </S.Main>
        </S.Item>
        <S.Item>
          <S.Img src="./images/list/1.png"></S.Img>
          <S.Main>
            <S.Title2>당산 게이트볼</S.Title2>
            <S.Contents>
              당산역 근처 게이트볼 하실 분 구합니다. <br></br># 50대 #19시 #
              Beginner #16일
            </S.Contents>
            <S.Sports>게이트볼</S.Sports>
            <S.Footer>
              <S.Location>
                <S.Icon src="./images/list/map.png"></S.Icon>
                <S.LocaionText>서울특별시</S.LocaionText>
              </S.Location>
              <RightOutlined style={{ paddingRight: 10 }} />
            </S.Footer>
          </S.Main>
        </S.Item>
        <S.Item>
          <S.Img src="./images/list/1.png"></S.Img>
          <S.Main>
            <S.Title2>당산 게이트볼</S.Title2>
            <S.Contents>
              당산역 근처 게이트볼 하실 분 구합니다. <br></br># 50대 #19시 #
              Beginner #16일
            </S.Contents>
            <S.Sports>게이트볼</S.Sports>
            <S.Footer>
              <S.Location>
                <S.Icon src="./images/list/map.png"></S.Icon>
                <S.LocaionText>서울특별시</S.LocaionText>
              </S.Location>
              <RightOutlined style={{ paddingRight: 10 }} />
            </S.Footer>
          </S.Main>
        </S.Item>
        <S.Item>
          <S.Img src="./images/list/1.png"></S.Img>
          <S.Main>
            <S.Title2>당산 게이트볼</S.Title2>
            <S.Contents>
              당산역 근처 게이트볼 하실 분 구합니다. <br></br># 50대 #19시 #
              Beginner #16일
            </S.Contents>
            <S.Sports>게이트볼</S.Sports>
            <S.Footer>
              <S.Location>
                <S.Icon src="./images/list/map.png"></S.Icon>
                <S.LocaionText>서울특별시</S.LocaionText>
              </S.Location>
              <RightOutlined style={{ paddingRight: 10 }} />
            </S.Footer>
          </S.Main>
        </S.Item>
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
