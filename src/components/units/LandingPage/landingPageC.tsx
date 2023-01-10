import { useRouter } from "next/router";
import * as S from "./landingPage.styles";

export default function LandingPageC() {
  const router = useRouter();
  return (
    <S.Wrapper_2>
      <S.TitleBox2>
        <S.Title_3>COMMUNITY</S.Title_3>
      </S.TitleBox2>
      <S.MainContents2>
        <S.ContentsBox2>
          <S.COMMUNITY>COMMUNITY</S.COMMUNITY>
          <S.Contents_title>
            서로 의욕을 복돋아주는 엑티브한 커뮤니티
          </S.Contents_title>
          <S.Contents_2>
            서로의 열정을 북돋아주는 커뮤니티 커뮤니티 안에서 대화기능을 통해
            멤버에 합류하여 즐겁게 소통해나가는 Rungether입니다.
          </S.Contents_2>
          <S.MemberBtn>
            <S.Btn onClick={() => router.push("/community")}>COMMUNITY</S.Btn>
          </S.MemberBtn>
        </S.ContentsBox2>
        <S.ImgBox></S.ImgBox>
      </S.MainContents2>
    </S.Wrapper_2>
  );
}
