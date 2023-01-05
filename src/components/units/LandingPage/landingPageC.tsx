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
        <S.ImgBox
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/0b01/1b94/53c63c38a57e0c7ba3c25ef1d9afcfea?Expires=1673222400&Signature=Ht~LHolsZJt8-pkYHNh~BpLN3stllv2ApKLuySXjpvWfwwQ5EamPPrL6BImNkarWxyM~Z6FeTTSDhcbO4sbPBILua1jmlVSNMHhPKjHZyMbami~l8XR8ewyWdI-ygehoO9r5EfoEngCOYoCunHchmauQg7gwdbZH6Hs5a7VbSbj0-MEWTzTFPz2jWmZ5S1a7lfQkhfYXTJ1fAIEanmINRs-~93l4qbbgb2QQaKg1GuTO6d2ZUUVStVdFj2dokxp2HJwqGW7nxsMh~YP5jNtS~4LkhqRrnH3WoWc-GUnjAX7AanxzsNf-oJa9WGmunVSOqeDzLp5WQW~yQMRbuNQ5mQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
          }}
        ></S.ImgBox>
      </S.MainContents2>
    </S.Wrapper_2>
  );
}
