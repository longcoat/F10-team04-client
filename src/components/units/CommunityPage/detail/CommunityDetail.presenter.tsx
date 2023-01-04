import React, { useState } from "react";
import { Button, Modal } from "antd";
import { HeartFilled, RightOutlined } from "@ant-design/icons";
import * as S from "./CommunityDetail.styles";
import KakaoMapView from "../../../commons/map/mapview";
import styled from "@emotion/styled";
const ModalCustom = styled(Modal)`
  .ant-modal-header {
    padding: 16px 24px;
    padding-top: 30px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    height: 80px;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .ant-modal-footer > .ant-btn-primary {
    width: 161px;
    height: 63px;
    background-color: #000;
    color: #fff;
    border: none;
  }
  .ant-modal-footer > .ant-btn-default {
    width: 161px;
    height: 63px;
    background-color: #f6f6f6;
    color: #8b8b8b;
    border: none;
  }
`;

export default function CommunityDetailUIPage(props: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RightOutlined
        style={{ paddingRight: 10 }}
        onClick={() => setOpen(true)}
      />
      <ModalCustom
        title="한강 러닝🏃🏻"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <S.Wrapper>
          <S.Header>
            <S.Img src="./images/example.png"></S.Img>
          </S.Header>
          <S.Head>
            <S.AvatarWrap>
              <S.Avatar src="./images/avatar.png" />
            </S.AvatarWrap>
            <S.UerInfo>
              <S.Left>
                <S.UserName></S.UserName>
                <S.MapWrap>
                  <S.MapIcon src="./images/list/map.png"></S.MapIcon>
                  <S.MapText>서울특별시 서초구 반포동</S.MapText>
                </S.MapWrap>
              </S.Left>
              <S.Right>
                <HeartFilled style={{ color: "red", marginRight: "10px" }} />
                찜한 게시물:200
              </S.Right>
            </S.UerInfo>
          </S.Head>
          <S.Line />
          <S.Main>
            <S.Title>한강 러닝🏃🏻</S.Title>
            <S.Detail>
              <S.Sports>러닝</S.Sports>
              <S.Com>・</S.Com>
              <S.Create>39분 전</S.Create>
            </S.Detail>
            <S.Contents>
              본인 굉장히 빠르다. 같이 동기 부여하면서 경쟁 러너 구합니당.!!
            </S.Contents>

            <KakaoMapView />
          </S.Main>
        </S.Wrapper>
      </ModalCustom>
    </>
  );
}
