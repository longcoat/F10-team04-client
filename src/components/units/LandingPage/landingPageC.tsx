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
          <S.ContentsBox3>
            <S.COMMUNITY>COMMUNITY</S.COMMUNITY>
            <S.Contents_title1>
              서로의 열정을 북돋아주는 커뮤니티
            </S.Contents_title1>
            <div>
              <S.Contents_3>
                <div> Rungether의 다양한 기능을 통해 </div>
                <div>멤버들과 즐겁게 소통해보세요! </div>
              </S.Contents_3>
            </div>
          </S.ContentsBox3>
          <S.BtnBox1>
            <S.MemberBtn>
              <S.Btn onClick={() => router.push("/community")}>COMMUNITY</S.Btn>
            </S.MemberBtn>
          </S.BtnBox1>
        </S.ContentsBox2>

        <S.ImgBox1
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/0b01/1b94/53c63c38a57e0c7ba3c25ef1d9afcfea?Expires=1673222400&Signature=Ht~LHolsZJt8-pkYHNh~BpLN3stllv2ApKLuySXjpvWfwwQ5EamPPrL6BImNkarWxyM~Z6FeTTSDhcbO4sbPBILua1jmlVSNMHhPKjHZyMbami~l8XR8ewyWdI-ygehoO9r5EfoEngCOYoCunHchmauQg7gwdbZH6Hs5a7VbSbj0-MEWTzTFPz2jWmZ5S1a7lfQkhfYXTJ1fAIEanmINRs-~93l4qbbgb2QQaKg1GuTO6d2ZUUVStVdFj2dokxp2HJwqGW7nxsMh~YP5jNtS~4LkhqRrnH3WoWc-GUnjAX7AanxzsNf-oJa9WGmunVSOqeDzLp5WQW~yQMRbuNQ5mQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
          }}
        ></S.ImgBox1>

      </S.MainContents2>
    </S.Wrapper_2>
  );
}
