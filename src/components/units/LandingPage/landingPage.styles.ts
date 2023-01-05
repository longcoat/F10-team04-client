import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 100%;
  background-image: url("https://s3-alpha-sig.figma.com/img/c9d6/5741/997431524e28a88bcba6dcf44fc0d96f?Expires=1673222400&Signature=YQJZ-dVcvTQIqNd29GauY8QoC2hNHo3lUn6zOYhCLzVVro2foX41aTG0GmMmZGX1SR9e6M0CZKStXIsl4e1dum1jkuIDd1TUrjHA9ZYt7GdkoOOipPVcpUAPUdWuFiJ15Ob5Aq9Wj7MiG0JcsuR-vqxvmSqZ5xYhYt7suUbJcVMdIr6WLRr7iPjCmEfirlDp5yDnH5Q7FYM7RxZyTnmmSmfzKt4UIWY8JPVShReAq7Fo2qP9bhkkL42-XStPgNEfGHyYe67wMIM~BmU1iCIe1vaiaCOba-Tpe3fC4ZyFYwWmKVRbIx4L9ViWRff-CmATTCsCfJO9~~-dScQcmAM8mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    background-position-x: -130px;
  }
`;
export const MainTextBox = styled.div`
  padding-top: 20%;
  @media only screen and (max-width: 1024px) {
    padding-top: 20%;
  }
`;
export const Title = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  font-size: 92px;
  font-weight: 600;
  line-height: 67px;
  letter-spacing: -0.011em;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 82px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 72px;
  }
`;
export const contents = styled.p`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.019em;
  text-align: center;
  color: white;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Wrapper_2 = styled.div`
  margin: 0px auto;
  width: 1400px;
  height: 100vh;
  @media only screen and (max-width: 1024px) {
    width: 1000px;
  }
  @media only screen and (max-width: 768px) {
    width: 700px;
  }
`;

export const TitleBox = styled.div``;
export const Title_2 = styled.h1`
  font-size: 120px;
  font-weight: 850;
  line-height: 91px;
  letter-spacing: -0.011em;
  text-align: left;
  padding-top: 50px;
  padding-left: 80px;
  padding-bottom: 50px;
  @media only screen and (max-width: 1024px) {
    font-size: 80px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
export const MEMBERS = styled.div`
  font-size: 170px;
  font-weight: 850;
  line-height: 91px;
  letter-spacing: -0.011em;
  text-align: left;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #d3d3d3;
  position: relative;
  right: 200px;
  top: 10px;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    font-size: 120px;
    right: 150px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 90px;
    right: 110px;
  }
`;
export const MainContents = styled.div`
  display: flex;
  padding-right: 80px;
  display: flex;
  justify-content: space-between;
`;
export const ImgBox = styled.div`
  width: 55%;
  height: 500px;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    width: 50%;
    background-position-x: -320px;
  }
  @media only screen and (max-width: 768px) {
    background-position-x: -400px;
  }
`;
export const ContentsBox = styled.div`
  margin: auto 0px;
  width: 35%;
  height: 294px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    width: 40%;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export const Contents_title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 1024px) {
    line-height: 50px;
    font-size: 36px;
  }
  @media only screen and (max-width: 768px) {
    line-height: 40px;
    font-size: 30px;
  }
`;
export const Btn = styled.button`
  background-color: #c71515;
  border: none;
  padding: 3px 7px;
  cursor: pointer;
`;
export const Contents_2 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 50px;
`;
export const MemberBtn = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;

export const TitleBox2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Title_3 = styled.h1`
  font-size: 120px;
  font-weight: 850;
  line-height: 91px;
  letter-spacing: -0.011em;
  text-align: left;
  padding-right: 80px;
  padding-top: 50px;
  padding-bottom: 70px;
  @media only screen and (max-width: 1024px) {
    font-size: 80px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
export const MainContents2 = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
`;
export const ContentsBox2 = styled.div`
  margin: auto 0px;
  width: 25%;
  height: 294px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    width: 48%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
export const COMMUNITY = styled.div`
  font-size: 170px;
  font-weight: 850;
  line-height: 91px;
  letter-spacing: -0.011em;
  text-align: left;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #d3d3d3;
  position: relative;
  right: 110px;
  top: 30px;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    font-size: 110px;
    top: 20px;
    right: 10px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 90px;
    right: 30px;
  }
`;
