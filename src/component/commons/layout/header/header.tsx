import * as S from "./header.style";

export default function LayoutHeader() {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.Logo>Rungether</S.Logo>
      </S.LeftSide>
      <S.RightSide>
        <S.Menu className="menu">Members</S.Menu>
        <S.Menu className="menu">Community</S.Menu>
        <S.Menu className="menu">Login</S.Menu>
        <S.Menu className="menu">Join</S.Menu>
      </S.RightSide>
    </S.Wrapper>
  );
}
