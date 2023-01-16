import React, { useState } from "react";
import { Button, DatePicker, Modal } from "antd";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import styled from "@emotion/styled";
import InModalWrite from "../../../commons/Modal/modal(write)";
import { modalWriteState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import * as S from "./CommunityWrite.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import KaKaoMapPage from "../../../commons/map/mapsearch";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { RangePickerProps } from "antd/lib/date-picker";
import { FETCH_USER_LOGGED_IN } from "../detail/CommunityDetail.queries";
import { useQuery } from "@apollo/client";

const AreaOption = [
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
const exOption = [
  { value: "Beginner", label: "Beginner" },
  { value: "Amateur", label: "Amateur" },
  { value: "Pro", label: "Pro" },
];
dayjs.extend(customParseFormat);

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

const ModalCustom = styled(Modal)`
  padding-top: 60px;
  width: 1000px;

  .ant-modal-content {
    border-radius: 20px;
  }

  .ant-modal-title {
    font-weight: 600;
    font-size: 20px;
  }

  .ant-modal-body {
    padding: 8px 30px 8px 30px;
    font-size: 14px;
    line-height: 1.5715;
    width: 100%;
    word-wrap: break-word;
  }

  .ant-modal-header {
    padding: 16px 24px;
    padding-top: 28px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 20px 20px 0 0;
    /* border-radius: 30px; */
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
    width: 160px;
    height: 60px;
    background-color: #000;
    color: #fff;
    border: none;
  }

  // 모임지역 검색하기 버튼

  .css-12sbnz6 {
    border-radius: 12px;
    font-size: 15px;
  }

  // 하얀색버튼
  .css-1a8xmf3 {
    border-radius: 12px;
    font-size: 18px;
    color: #000;
    cursor: pointer;
  }
  // 검정색버튼
  .css-3tc048 {
    border-radius: 12px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }

  .ant-modal-footer > .ant-btn-default {
    width: 160px;
    height: 60px;
    background-color: #f6f6f6;
    color: #8b8b8b;
    border: none;
    border-radius: 12px;
  }
  .ant-modal-footer {
    height: 0px;
    border: none;
  }
  .ant-btn {
    visibility: hidden;
  }
`;

//========================================

export default function CommunityWriteUI(props: any) {
  const [ModalOpen, setModalOpen] = useRecoilState(modalWriteState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);


  const handleCancel = () => {
    setModalOpen(false);
  };

  const onClickWrite= () => {
      setModalOpen(true)
  }

  return (
    <>
      <Button
        type="primary"
        onClick={onClickWrite}
        style={{
          padding: "0px 15px 10px 15px",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "22px",
          textAlign: "center",
          height: "36px",
          color: "white",
          paddingTop: "7px",
          borderRadius: "8px",
          backgroundColor: "#0b0b0b",
          border: "none",
          // border: "1px solid #fff",
        }}
      >
        작성하기
      </Button>


      {ModalOpen && (
        <ModalCustom
          title="게시물 작성"
          centered
          open={true}
          width={1000}
          onCancel={() => {
            setModalOpen(false);
          }}
        >
          <InModalWrite />
        </ModalCustom>
      )}

    </>
  );
}
