import * as S from "./landingPage.styles";

export default function LandingPageB() {
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
          <S.MEMBERS>MEMBERS</S.MEMBERS>
          <S.Contents_title>
            혼자가 아닌 멤버들과 함께 달려 보세요
          </S.Contents_title>
          <S.Contents_2>
            어디서든 여러분과 함께 달리고, 여러분께 필요한 조언을 해주고, 항상
            응원하는 친구가 생겼다고 생각해 보세요. 쉽거나 어려운 운동부터
            activity한 운동까지. 런게더는 아침 또는 낮과 밤을 가리지 않습니다.
            웹에 있는 다양한 가이드 런을 확인해 보세요. 필요한 가이드를 선택하고
            지금 바로, 문 밖으로 나가보세요.{" "}
          </S.Contents_2>
          <S.MemberBtn href="/members">FIND MEMBER</S.MemberBtn>
        </S.ContentsBox>
      </S.MainContents>
    </S.Wrapper_2>
  );
}
