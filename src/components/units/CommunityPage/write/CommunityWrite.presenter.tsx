import React, { useState } from "react";
import { Button, Modal } from "antd";
import * as S from "./CommunityWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KakaoMapUI from "../../../commons/map/mapsearch";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function CommunityWriteUI(props: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => setOpen(true)}
        style={{
          width: "170px",
          height: "61px",
          borderRadius: "8px",
          background: "black",
          border: "none",
        }}
      >
        작성하기
      </Button>
      <Modal
        title="게시물 작성"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1380}
      >
        <S.Wrapper>
          <S.Header>
            {" "}
            <S.Image>썸네일 등록</S.Image>
            <S.InputWrap1>
              <S.InputWrap2>
                <S.InputWrapper>
                  <S.InputTitle>제목</S.InputTitle>

                  <S.InputBox
                    placeholder="한강 러닝🏃🏻 하실분 ~~!!"
                    type="text"
                    {...props.register("name")}
                  />
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.InputTitle>모집운동</S.InputTitle>
                  <S.InputBox placeholder="러닝🏃🏻 하실분" />
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.InputTitle>모집인원</S.InputTitle>
                  <S.InputBox placeholder="ex) 7" />
                </S.InputWrapper>
              </S.InputWrap2>

              <S.InputWrap3>
                <S.InputWrapper>
                  <S.InputTitle>지역</S.InputTitle>
                  <S.selectBox>
                    {" "}
                    <option>서울특별시</option>
                    <option>세종특별시</option>
                    <option>인천광역시</option>
                    <option>대전광역시</option>
                    <option>대구광역시</option>
                    <option>부산광역시</option>
                    <option>울산광역시</option>
                    <option>광주광역시</option>
                  </S.selectBox>
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.InputTitle>시간</S.InputTitle>
                  <S.selectBox />
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.InputTitle>운동 능력</S.InputTitle>
                  <S.selectBox>
                    <option>Beginner</option>
                    <option>Amateur</option>
                    <option>Pro</option>
                  </S.selectBox>
                </S.InputWrapper>
              </S.InputWrap3>
            </S.InputWrap1>
          </S.Header>
          <KakaoMapUI />
          <S.InputWrapper>
            <S.InputTitle>내용</S.InputTitle>
            <ReactQuill
              // onChange={props.onChangeContents}
              style={{
                width: "856px",
                height: "300px",
                marginBottom: "40px",
              }}
              // value={props.getValues("contents") || ""}
            />
          </S.InputWrapper>
          <S.Main></S.Main>
        </S.Wrapper>
      </Modal>
    </>
  );
}
