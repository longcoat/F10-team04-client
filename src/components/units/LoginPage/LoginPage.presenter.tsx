import { CheckOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import * as S from "./LoginPage.styles";
export default function LoginUIPage(props: any) {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Container>
        <S.LoginWrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.Title onClick={() => router.push("/")}>RunGether</S.Title>
          <S.Main>
            <S.LoginText>로그인</S.LoginText>
            <S.InputWrapper>
              <S.HeadWrapper>
                <S.HeadTitle>아이디</S.HeadTitle>
                {!props.emailAct && <S.Dot>*</S.Dot>}
              </S.HeadWrapper>

              <S.Middle>
                <S.MiddleInput
                  type="text"
                  maxLength={50}
                  name="email"
                  {...props.register("email")}
                  placeholder="example@naver.com"
                  onChange={props.onChangeEmail}
                />
              </S.Middle>
              <div style={{ color: "red" }}>
                {props.formState.errors.name?.message}
              </div>
              {/* <S.Bottom>인증하기 버튼을 눌러주세요</S.Bottom> */}
            </S.InputWrapper>
            <S.InputWrapper>
              <S.HeadWrapper>
                <S.HeadTitle>비밀번호</S.HeadTitle>
                {!props.pwAct && <S.Dot>*</S.Dot>}
              </S.HeadWrapper>

              <S.Middle>
                <S.MiddleInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  maxLength={16}
                  name="password"
                  {...props.register("password")}
                  onChange={props.onChangePw}
                />
              </S.Middle>
              <S.Bottom2>
                <S.BottomItem>
                  영문
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct1 && "#EC0E2A",
                    }}
                  />
                </S.BottomItem>
                <S.BottomItem>
                  숫자
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct2 && "#EC0E2A",
                    }}
                  />
                </S.BottomItem>
                <S.BottomItem>
                  특수문자
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct3 && "#EC0E2A",
                    }}
                  />
                </S.BottomItem>
                <S.BottomItem>
                  8자리 이상
                  <CheckOutlined
                    style={{
                      paddingLeft: "4px",
                      color: props.pwAct4 && "#EC0E2A",
                    }}
                  />
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
