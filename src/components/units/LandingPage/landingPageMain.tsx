import styled from "@emotion/styled";
import LayoutFooter from "../../commons/layout/footer/footer";

import LandingPageA from "./landingPageA";
import LandingPageB from "./landingPageB";
import LandingPageC from "./landingPageC";

export default function LandingPageMain() {
  return (
    <Wrapper>
      <LandingPageA />
      <LandingPageB />
      <LandingPageC />
      <LayoutFooter />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  & > div {
    scroll-snap-align: start;
    height: 100vh;
  }
`;
