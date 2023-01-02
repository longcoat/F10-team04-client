import React, { useState } from "react";
import { Button, Modal } from "antd";
import { HeartFilled, RightOutlined } from "@ant-design/icons";
import * as S from "./CommunityDetail.styles";
import KakaoMapView from "../../../commons/map/mapview";
export default function CommunityDetailUIPage(props: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RightOutlined
        style={{ paddingRight: 10 }}
        onClick={() => setOpen(true)}
      />
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1380}
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
                인기도:200
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
      </Modal>
    </>
  );
}
