import { useRouter } from "next/router";
import * as S from "./landingPage.styles";

export default function LandingPageB() {
  const router = useRouter()
  return (
    <S.Wrapper_2>
      <S.TitleBox>
        <S.Title_2>MEMBERS</S.Title_2>
      </S.TitleBox>
      <S.MainContents>
        <S.ImgBox
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/2b16/7506/88081abebe082f271b88a415fe33d347?Expires=1673222400&Signature=OydCThp6fxDTXvogiVR0cC2CIZqntsbzfSWhkgMBjAM7mCTRsvRA2PbUDyltjwglsFUZrE~Q6H1MXZjmNWSPdriyWHTUnX0G3sXu3m3KchycZtPqQbDqgD5FhQ1Xtxjoibk24711mqiOYq2jbZQBja9hPtPDK925wtRtI-ciunQKjjEHRAADVU~0UXdt~eploR58vdOJnBAisl8LVDQNdrlgN4j1tEDxWFaDVPduZokiXaPHTCWCKfn0ZbM5LRdWBTXBXZcpaD-ya9qJSu6DzoW8x7f0VhTWTM0dhd7uk-XiIskwB6x9xIsvntzct8iLDL9J2whLtFiX5VnW7MqZAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
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
          <S.MemberBtn>
            <S.Btn onClick={() => router.push("/members")}>
            FIND MEMBER
            </S.Btn>
            </S.MemberBtn>
        </S.ContentsBox>
      </S.MainContents>
    </S.Wrapper_2>
  );
}
