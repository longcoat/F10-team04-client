import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalEditState } from "../../../commons/stores";
import Uploads00 from "../uploads/00/Uploads01.container";
import * as S from "./userEdit.styels";

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
const AgeOption = [
  { value: "10대", label: "10대" },
  { value: "20대", label: "20대" },
  { value: "30대", label: "30대" },
  { value: "40대", label: "40대" },
  { value: "50대", label: "50대" },
  { value: "60대 이상", label: "60대 이상" },
];
const FavOption = [
  { value: "런닝", label: "런닝" },
  { value: "걷기", label: "걷기" },
  { value: "풋살", label: "풋살" },
  { value: "배드민턴", label: "배드민턴" },
  { value: "테니스", label: "테니스" },
  { value: "수영", label: "수영" },
  { value: "족구", label: "족구" },
  { value: "탁구", label: "탁구" },
  { value: "야구", label: "야구" },
];

export default function UserEditUI(props: any) {
  return (
    <S.Container>
      <S.JoinForm>
        <CloseOutlined
          onClick={props.onClickClose}
          style={{
            position: "relative",
            top: "50px",
            right: "80px",
            fontSize: "25px",
          }}
        />
        <S.TitleBox>
          <S.Title>RunGether</S.Title>
        </S.TitleBox>
        <S.ImgBox>
          <Uploads00
            image={props.image}
            onChangeImage={props.onChangeImage}
            data={props.data}
          />
        </S.ImgBox>
        <S.ProfileTextBox>
          <S.ProfileText>프로필 사진 등록</S.ProfileText>
        </S.ProfileTextBox>
        <S.Line>
          <S.GrayLine />
        </S.Line>
        <S.InfoBox>
          <S.InfoTitle>닉네임</S.InfoTitle>
          {!props.NicknameAct && <S.RedDot>*</S.RedDot>}
        </S.InfoBox>
        <S.DuplicationBox>
          <S.DupInput
            value={props.nickName}
            onChange={props.onChangeNickName}
            type="text"
            placeholder="닉네임을 입력해주세요."
            defaultValue={props.data?.fetchUserLoggedIn.nickname}
          ></S.DupInput>
          <S.DupButton onClick={props.onClickCheckNickname}>
            중복확인
          </S.DupButton>
        </S.DuplicationBox>
        <S.InfoBox>
          <S.InfoTitle>성별</S.InfoTitle>
          {!props.genderAct && <S.RedDot>*</S.RedDot>}
        </S.InfoBox>
        <S.SexButtonBox>
          <S.SexButton1
            type="button"
            isActive={props.clickLeft}
            onClick={props.onClickLeft}
          >
            남성
          </S.SexButton1>
          <S.SexButton2
            type="button"
            isActive={props.clickRight}
            onClick={props.onClickRight}
          >
            여성
          </S.SexButton2>
        </S.SexButtonBox>
        <S.InfoBox>
          <S.InfoTitle>연령</S.InfoTitle>
        </S.InfoBox>
        <S.CommonInputBox>
          <S.Selectbar>
            <S.SelectArea
              onChange={props.onChangeAge}
              defaultValue={props.data?.fetchUserLoggedIn.age}
              style={{ width: "100%", borderRadius: "10px" }}
              options={AgeOption}
            />
          </S.Selectbar>
        </S.CommonInputBox>

        <S.InfoBox>
          <S.InfoTitle>지역</S.InfoTitle>
        </S.InfoBox>
        <S.Selectbar>
          <S.SelectArea
            onChange={props.onChangeLo}
            defaultValue={props.data?.fetchUserLoggedIn.region}
            style={{ width: "100%", borderRadius: "10px" }}
            options={AreaOption}
          />
        </S.Selectbar>
        <S.InfoBox>
          <S.InfoTitle>최애 운동</S.InfoTitle>
        </S.InfoBox>
        <S.Selectbar>
          <S.SelectArea
            onChange={props.onChangeFav}
            defaultValue={props.data?.fetchUserLoggedIn.prefer}
            style={{ width: "100%", borderRadius: "10px" }}
            options={FavOption}
          />
        </S.Selectbar>
        <S.InfoBox>
          <S.InfoTitle>운동 레벨</S.InfoTitle>
          {!props.levelAct && <S.RedDot>*</S.RedDot>}
        </S.InfoBox>
        <S.ExerciseButtonBox>
          <S.ExerciseButton1
            type="button"
            isActive={props.level1}
            onClick={props.onClickLevel1}
          >
            Beginner
          </S.ExerciseButton1>
          <S.ExerciseButton2
            type="button"
            isActive={props.level2}
            onClick={props.onClickLevel2}
          >
            Amateur
          </S.ExerciseButton2>
          <S.ExerciseButton3
            type="button"
            isActive={props.level3}
            onClick={props.onClickLevel3}
          >
            Pro
          </S.ExerciseButton3>
        </S.ExerciseButtonBox>
        <S.CompleteButtonBox>
          <S.CompleteButton onClick={props.onClickSubmit}>
            수정완료
          </S.CompleteButton>
        </S.CompleteButtonBox>
      </S.JoinForm>
    </S.Container>
  );
}
