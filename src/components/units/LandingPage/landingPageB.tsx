import { useRouter } from "next/router";
import * as S from "./landingPage.styles";

export default function LandingPageB() {
  const router = useRouter();
  return (
    <S.Wrapper_2>
      <S.TitleBox>
        <S.Title_2>MEMBERS</S.Title_2>
      </S.TitleBox>
      <S.MainContents>
        <S.ImgBox
          style={{
            backgroundImage:
              "url(https://hally.com/wp-content/uploads/2021/08/PHMKGN21-SOI5k10kbl-0721-3-r1.jpg)",
          }}
        ></S.ImgBox>
        <S.ContentsBox>
          <S.ContentBox1>
            <S.MEMBERS>MEMBERS</S.MEMBERS>
            <S.Contents_title
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              파트너와 함께 즐거움을 나눠보세요
            </S.Contents_title>
            <S.Contents_2>
              <div>언제 어디서든 여러분과 함께 달리고,</div>
              <div>
                고민을 나누고 조언을 해주는 운동파트너가 생겼다고 생각해보세요.
              </div>
              <div>
                부담없이 한번 자신과 운동레벨이 비슷한 멤버부터 찾아볼까요?
              </div>
              <div>Running에서 Activity한 운동까지 </div>
              <div>여러분의 도전을 Rungether가 함께합니다.</div>
            </S.Contents_2>
          </S.ContentBox1>
          <S.BtnBox>
            <S.MemberBtn1>
              <S.Btn onClick={() => router.push("/members")}>FIND MEMBER</S.Btn>
            </S.MemberBtn1>
          </S.BtnBox>
        </S.ContentsBox>
      </S.MainContents>
    </S.Wrapper_2>
  );
}
