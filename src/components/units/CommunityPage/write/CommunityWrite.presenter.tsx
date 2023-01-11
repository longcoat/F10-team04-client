import React, { useState } from "react";
import { Button, Modal } from "antd";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import styled from "@emotion/styled";
import InModalWrite from "../../../commons/modal(write)";
import { modalWriteState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

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

  return (
    <>
      <Button
        type="primary"
        onClick={() => setModalOpen(true)}
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
        <ModalCustom title="게시물 작성" centered open={true} width={1000}>
          <InModalWrite />
        </ModalCustom>
      )}
    </>
  );
}
