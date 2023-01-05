import { useRouter } from "next/router";
import * as S from "./footer.styles";
export default function LayoutFooter() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.FooterHead>
        <S.WrapperLeft>
          <S.LeftHead onClick={() => router.push("/")}>CODE CAMP.</S.LeftHead>
          <S.LeftMiddle>FOLLOW US ON</S.LeftMiddle>
          <S.LeftIconWrap>
            <a
              href="https://github.com/code-bootcamp/F10-team04-client"
              target="__blank"
            >
              <S.LeftIcon src="./images/github.png"></S.LeftIcon>
            </a>
          </S.LeftIconWrap>
        </S.WrapperLeft>
        <S.WrapperRight>
          <S.RightTextBox>
            <S.LTextBox>
              <S.LText>MEMBERS</S.LText>
              <S.LText>CLUB</S.LText>
              <S.LText>MESSAGE</S.LText>
              <S.LText>GITHUB</S.LText>
            </S.LTextBox>
            <S.RTextBox>
              <S.RText>ABOUT</S.RText>
              <S.RText>CONTACT</S.RText>
            </S.RTextBox>
          </S.RightTextBox>
        </S.WrapperRight>
      </S.FooterHead>
      <S.FooterLine />
      <S.FooterLast>
        <S.FooterLeft>@BEDLAMS TM, ALL RIGHTS RESERVED</S.FooterLeft>
        <S.LastText>COOKIE POLICY</S.LastText>
        <S.LastText>LEGAL NOTICE</S.LastText>
        <S.LastText>COOKIE CONSENT OPTIONS</S.LastText>
      </S.FooterLast>
    </S.Wrapper>
  );
}
