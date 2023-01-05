import LayoutHeader from "../../commons/layout/header/header";
import MouseScroll from "../../commons/mouseScrollUI/mouse";
import * as S from "./landingPage.styles";

export default function LandingPageA() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MainTextBox>
          <S.Title>Rungether</S.Title>
          <S.contents>도심 속 스포츠를 사랑하는 당신에게</S.contents>
          <MouseScroll />
        </S.MainTextBox>
      </S.Container>
    </S.Wrapper>
  );
}
