import { CheckOutlined } from "@ant-design/icons";
import * as S from "./LoginPage.styles";
export default function LoginUIPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LoginWrapper>
          <S.Title>RunGether</S.Title>
          <S.Main>
            <S.LoginText>로그인</S.LoginText>
            <S.InputWrapper>
              <S.HeadWrapper>
                <S.HeadTitle>아이디</S.HeadTitle>
                <S.Dot>*</S.Dot>
              </S.HeadWrapper>

              <S.Middle>
                <S.MiddleInput placeholder="example@naver.com" />
              </S.Middle>
              <S.Bottom>인증하기 버튼을 눌러주세요</S.Bottom>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.HeadWrapper>
                <S.HeadTitle>비밀번호</S.HeadTitle>
                <S.Dot>*</S.Dot>
              </S.HeadWrapper>

              <S.Middle>
                <S.MiddleInput placeholder="비밀번호를 입력해주세요." />
              </S.Middle>
              <S.Bottom2>
                <S.BottomItem>
                  영문
                  <CheckOutlined style={{ paddingLeft: "4px" }} />
                </S.BottomItem>
                <S.BottomItem>
                  숫자
                  <CheckOutlined style={{ paddingLeft: "4px" }} />
                </S.BottomItem>
                <S.BottomItem>
                  특수문자
                  <CheckOutlined style={{ paddingLeft: "4px" }} />
                </S.BottomItem>
                <S.BottomItem>
                  8자리 이상
                  <CheckOutlined style={{ paddingLeft: "4px" }} />
                </S.BottomItem>
              </S.Bottom2>
            </S.InputWrapper>
          </S.Main>
          <S.Footer>
            <S.LoginButton>로그인</S.LoginButton>
          </S.Footer>
        </S.LoginWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
