import * as S from "./JoinPage.styles";
import { CheckOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function JoinPageA() {
  const router = useRouter()

  return (
    <>
      <S.Container>
        <S.JoinWrapper>
          <S.TitleBox>
            <S.Title>RunGether</S.Title>
          </S.TitleBox>
          <S.JoinContainer>
            <S.JoinTitleBox>
              <S.JoinTitle>회원가입</S.JoinTitle>
            </S.JoinTitleBox>
            <S.InfoBox>
              <S.InfoTitle>아이디</S.InfoTitle>
              <S.RedDot>*</S.RedDot>
            </S.InfoBox>
            <S.DuplicationBox>
              <S.DupInput
                type="text"
                placeholder="example@naver.com"
              ></S.DupInput>

              <S.DupButton>중복확인</S.DupButton>
            </S.DuplicationBox>
            <S.InfoSubtitle>인증하기 버튼을 눌러주세요</S.InfoSubtitle>
            <S.InfoBox>
              <S.InfoTitle>비밀번호</S.InfoTitle>
              <S.RedDot>*</S.RedDot>
            </S.InfoBox>
            <S.PassInputBox>
              <S.PassInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </S.PassInputBox>
            <S.Error>
              <S.Type>
                영문
                <CheckOutlined style={{ paddingLeft: "4px" }} />
              </S.Type>
              <S.Type>
                숫자
                <CheckOutlined style={{ paddingLeft: "4px" }} />
              </S.Type>
              <S.Type>
                특수문자
                <CheckOutlined style={{ paddingLeft: "4px" }} />
              </S.Type>
              <S.Type>
                8자리 이상
                <CheckOutlined style={{ paddingLeft: "4px" }} />
              </S.Type>
            </S.Error>
            <S.InfoBox>
              <S.InfoTitle>비밀번호 확인</S.InfoTitle>
              <S.RedDot>*</S.RedDot>
            </S.InfoBox>
            <S.PassInputBox>
              <S.PassInput
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
            </S.PassInputBox>
            <S.InfoBox>
              <S.InfoTitle>닉네임</S.InfoTitle>
              <S.RedDot>*</S.RedDot>
            </S.InfoBox>
            <S.DuplicationBox>
              <S.DupInput
                type="text"
                placeholder="닉네임을 입력해주세요."
              ></S.DupInput>
              <S.DupButton>중복확인</S.DupButton>
            </S.DuplicationBox>
            <S.InfoSubtitle>
              RunGether에서 사용할 닉네임을 입력해주세요.
            </S.InfoSubtitle>
            <S.Footer>
              <S.NextButton onClick={() => router.push("/joinB")}>다음</S.NextButton>
            </S.Footer>
          </S.JoinContainer>
        </S.JoinWrapper>
      </S.Container>
    </>
  );
}
