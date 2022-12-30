import * as S from "./footer.styles";
export default function LayoutFooter() {
  return (
    <S.Wrapper>
      <S.FooterHead>
        <S.WrapperLeft>
          <S.LeftHead>CODE CAMP.</S.LeftHead>
          <S.LeftMiddle>FOLLOW US ON</S.LeftMiddle>
          <S.LeftIconWrap>
            <S.LeftIcon src="./images/github.png"></S.LeftIcon>
          </S.LeftIconWrap>
        </S.WrapperLeft>
        <S.WrapperRight>
          <S.RightText>
            <S.RightSubText>MEMBERS</S.RightSubText>
            <S.RightSubText>CLUB</S.RightSubText>
            <S.RightSubText>MESSAGE</S.RightSubText>
            <S.RightSubText>GITHUB</S.RightSubText>
          </S.RightText>
          <S.RightText2>
            <S.RightSubText>ABOUT</S.RightSubText>
            <S.RightSubText>CONTACT</S.RightSubText>
          </S.RightText2>
        </S.WrapperRight>
      </S.FooterHead>
      <S.FooterLine />
      <S.FooterLast>
        <S.FooterLeft>@BEDLAMS TM, ALL RIGHTS RESERVED</S.FooterLeft>
        <S.FooterRight>
          <S.LastText>COOKIE POLICY</S.LastText>
          <S.LastText>LEGAL NOTICE</S.LastText>
          <S.LastText>COOKIE CONSENT OPTIONS</S.LastText>
        </S.FooterRight>
      </S.FooterLast>
    </S.Wrapper>
  );
}
