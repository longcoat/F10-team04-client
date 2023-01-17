import * as S from "./JoinPage.styles";
import {
  ArrowLeftOutlined,
  CheckOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import Uploads00 from "../../commons/uploads/00/Uploads01.container";
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

export default function JoinPageUi(props) {
  const router = useRouter();
  const [isNext, setIsNext] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  // 이미지 등록
  const [image, setImage] = useState("");
  const onChangeImage = (fileUrl) => {
    const newFile = fileUrl;
    setImage(newFile);
  };
  const onClickNext = () => {
    if (
      props.email.includes("@") &&
      props.password.match(/^(?=.*[a-zA-Z]).{0,16}$/) &&
      props.password.match(/^(?=.*[0-9]).{0,16}$/) &&
      props.password.match(/^(?=.*[!@#$%^*+=-]).{0,16}$/) &&
      props.password.match(/^.{8,16}$/) &&
      props.password === props.cpassword &&
      props.nickNameCheck
    ) {
      setIsNext((prev) => !prev);
    } else if (!props.email.includes("@")) {
      alert("이메일 형식을 확인해주세요.");
    } else if (!props.nickNameCheck) {
      alert("닉네임 중복을 확인하세요.");
    } else {
      alert("비밀번호를 확인해주세요.");
    }
  };
  const onClickBack = () => {
    setIsNext(false);
  };
  const onClickEye = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <>
      {!isNext ? (
        <S.Container>
          <S.JoinWrapper>
            <S.TitleBox>
              <S.Title onClick={() => router.push("/")}>RunGether</S.Title>
            </S.TitleBox>
            <S.JoinContainer>
              <S.JoinTitleBox>
                <S.JoinTitle>회원가입</S.JoinTitle>
              </S.JoinTitleBox>
              <S.InfoBox>
                <S.InfoTitle>아이디</S.InfoTitle>
                {!props.emailAct && <S.RedDot>*</S.RedDot>}
              </S.InfoBox>
              <S.DuplicationBox>
                <S.DupInput
                  onChange={props.onChangeEmail}
                  value={props.email}
                  type="text"
                  placeholder="example@naver.com"
                ></S.DupInput>
                <S.DupButton onClick={props.onClickSendEmail}>
                  인증하기
                </S.DupButton>
              </S.DuplicationBox>
              <S.InfoSubtitle>인증하기 버튼을 눌러주세요</S.InfoSubtitle>
              {props.sendEmail ? (
                <S.DuplicationBox>
                  <S.DupInput
                    onChange={props.onChangeEmailToken}
                    value={props.token}
                    type="text"
                    placeholder="인증 번호를 입력해주요."
                  ></S.DupInput>
                  <S.DupButton onClick={props.onClickCheckEmail}>
                    인증번호 확인
                  </S.DupButton>
                </S.DuplicationBox>
              ) : (
                ""
              )}
              <S.InfoBox1>
                <S.Wrap>
                  <S.InfoTitle>비밀번호</S.InfoTitle>
                  {!props.pwAct && <S.RedDot>*</S.RedDot>}
                </S.Wrap>
                {!isHidden ? (
                  <EyeOutlined
                    onClick={onClickEye}
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      right: "20px",
                      top: "56px",
                      color: "#d9d9d9",
                    }}
                  />
                ) : (
                  <EyeInvisibleOutlined
                    onClick={onClickEye}
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      right: "20px",
                      top: "56px",
                      color: "#d9d9d9",
                    }}
                  />
                )}
              </S.InfoBox1>
              <S.PassInputBox>
                <S.PassInput
                  value={props.password}
                  onChange={props.onChangePw}
                  type={isHidden ? "text" : "password"}
                  placeholder="비밀번호를 입력해주세요."
                />
              </S.PassInputBox>
              <S.Error>
                <S.Type>
                  영문
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct1 && "#EC0E2A",
                    }}
                  />
                </S.Type>
                <S.Type>
                  숫자
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct2 && "#EC0E2A",
                    }}
                  />
                </S.Type>
                <S.Type>
                  특수문자
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct3 && "#EC0E2A",
                    }}
                  />
                </S.Type>
                <S.Type>
                  8자리 이상
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct4 && "#EC0E2A",
                    }}
                  />
                </S.Type>
              </S.Error>
              <S.InfoBox>
                <S.InfoTitle>비밀번호 확인</S.InfoTitle>
                {!props.pwCon && <S.RedDot>*</S.RedDot>}
              </S.InfoBox>
              <S.PassInputBox>
                <S.PassInput
                  value={props.rePassword}
                  onChange={props.onChangePwCon}
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                />
              </S.PassInputBox>
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
                ></S.DupInput>
                <S.DupButton onClick={props.onClickCheckNickname}>
                  중복확인
                </S.DupButton>
              </S.DuplicationBox>
              <S.InfoSubtitle>
                RunGether에서 사용할 닉네임을 입력해주세요.
              </S.InfoSubtitle>
              <S.Footer>
                <S.NextButton onClick={onClickNext}>다음</S.NextButton>
              </S.Footer>
            </S.JoinContainer>
          </S.JoinWrapper>
        </S.Container>
      ) : (
        <S.Container>
          <S.JoinForm>
            <ArrowLeftOutlined
              onClick={onClickBack}
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
              <Uploads00 image={image} onChangeImage={onChangeImage} />
            </S.ImgBox>
            <S.ProfileTextBox>
              <S.ProfileText>프로필 사진 등록</S.ProfileText>
            </S.ProfileTextBox>
            <S.Line>
              <S.GrayLine />
            </S.Line>
            <S.InfoBox>
              <S.InfoTitle>이름</S.InfoTitle>
              {!props.nameAct && <S.RedDot>*</S.RedDot>}
            </S.InfoBox>
            <S.CommonInputBox>
              <S.CommonInput
                onChange={props.onChangeName}
                type="text"
                placeholder="이름을 입력해 주세요."
              />
            </S.CommonInputBox>
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
                  defaultValue={AgeOption[0]}
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
                defaultValue={AreaOption[0]}
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
                defaultValue={FavOption[0]}
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
                가입완료
              </S.CompleteButton>
            </S.CompleteButtonBox>
          </S.JoinForm>
        </S.Container>
      )}
    </>
  );
}
