import styled from "@emotion/styled";
import * as M from "../../../../../commons/styles/mediaQueries";

export const Wrapper = styled.img`
  overflow: hidden;
  width: 100%;
  height: 350px;

  background-size: cover;
  background-position-y: 43%;

  ${M.mediaL} {
    overflow: hidden;
    height: 350px;
  }

  ${M.mediaM} {
    overflow: hidden;
    height: 350px;
  }
`;
