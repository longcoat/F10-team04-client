import React, { useState } from "react";
import { Button, Modal } from "antd";
import * as S from "./CommunityWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KakaoMapUI from "../../../commons/map/mapsearch";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// 날짜 (시간)선택 ==================
import { DatePicker, Space } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Input03 from "../../../commons/inputs/03-input";
import styled from "@emotion/styled";

dayjs.extend(customParseFormat);

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

const { RangePicker } = DatePicker;

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

const disabledRangeTime: RangePickerProps["disabledTime"] = (_, type) => {
  if (type === "start") {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
//========================================

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
      <ModalCustom
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
            <Input03 type="file" />
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
                  <DatePicker
                    style={{
                      border: "1px solid #8b8b8b",
                      borderRadius: "16px",
                      width: "242px",
                      height: "63px",
                    }}
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                  />
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
          <KakaoMapUI />

          <S.Main></S.Main>
        </S.Wrapper>
      </ModalCustom>
    </>
  );
}
