import * as S from "./JoinPage.styles";
import { CheckOutlined } from "@ant-design/icons";
import React from "react";
import { Select } from "antd";

const AreaOption = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "disabled",
    disabled: true,
    label: "Disabled",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
];
export default function JoinPageB() {
  return (
    <>
      <S.Container>
        <S.JoinWrapper>
          <S.TitleBox>
            <S.Title>RunGether</S.Title>
          </S.TitleBox>
          <S.ImgBox>
            <S.ProfileImg src="/profile.png" />
          </S.ImgBox>
          <S.ProfileTextBox>
            <S.ProfileText>프로필 사진 등록</S.ProfileText>
          </S.ProfileTextBox>
          <S.Line>
            <S.GrayLine />
          </S.Line>
          <S.InfoBox>
            <S.InfoTitle>이름</S.InfoTitle>
            <S.RedDot>*</S.RedDot>
          </S.InfoBox>
          <S.CommonInputBox>
            <S.CommonInput type="text" placeholder="이름을 입력해 주세요." />
          </S.CommonInputBox>
          <S.InfoBox>
            <S.InfoTitle>성별</S.InfoTitle>
            <S.RedDot>*</S.RedDot>
          </S.InfoBox>
          <S.SexButtonBox>
            <S.SexButton1>남성</S.SexButton1>
            <S.SexButton2>여성</S.SexButton2>
          </S.SexButtonBox>
          <S.CommonInputBox>
            <S.CommonSelect>
              <option>나이</option>
              <option>10대</option>
              <option>20대</option>
              <option>30대</option>
              <option>40대</option>
              <option>50대</option>
              <option>60대이상</option>
            </S.CommonSelect>
          </S.CommonInputBox>
          <S.Selectbar>
            <S.SelectArea
              defaultValue="지역"
              style={{ width: "100%", borderRadius: "10px" }}
              // onChange={handleChange}
              options={AreaOption}
            />
          </S.Selectbar>
          <S.CommonInputBox>
            {/* <S.CommonSelect>
              <option>지역</option>
              <option>서울특별시</option>
              <option>경기도</option>
              <option>인천광역시</option>
              <option>세종특별자치시</option>
              <option>대전광역시</option>
              <option>부산광역시</option>
              <option>대구광역시</option>
              <option>광주광역시</option>
              <option>울산광역시</option>
              <option>강원도</option>
              <option>충청남도</option>
              <option>충청북도</option>
              <option>전라남도</option>
              <option>전라북도</option>
              <option>경상남도</option>
              <option>경상북도</option>
              <option>제주특별자치도</option>
            </S.CommonSelect> */}
          </S.CommonInputBox>
          <S.InfoBox>
            <S.InfoTitle>최애 운동</S.InfoTitle>
            <S.RedDot>*</S.RedDot>
          </S.InfoBox>
          <S.CommonInputBox>
            <S.CommonSelect>
              <option>런닝</option>
              <option>풋살</option>
              <option>농구</option>
            </S.CommonSelect>
          </S.CommonInputBox>
          <S.InfoBox>
            <S.InfoTitle>운동 레벨</S.InfoTitle>
            <S.RedDot>*</S.RedDot>
          </S.InfoBox>
          <S.ExerciseButtonBox>
            <S.ExerciseButton1>Beginner</S.ExerciseButton1>
            <S.ExerciseButton2>Amateur</S.ExerciseButton2>
            <S.ExerciseButton3>Pro</S.ExerciseButton3>
          </S.ExerciseButtonBox>
          <S.CompleteButtonBox>
            <S.CompleteButton>가입완료</S.CompleteButton>
          </S.CompleteButtonBox>
        </S.JoinWrapper>
      </S.Container>
    </>
  );
}
