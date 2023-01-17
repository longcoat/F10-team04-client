import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 80px 20px 80px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;

    .menu {
      color: #151515;
    }
    .logo {
      color: #151515;
    }
    .sidemenu {
      color: #151515;
    }
  }
`;

export const LeftSide = styled.div``;

export const Logo = styled.div`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.011em;
  text-align: left;
  color: white;
  cursor: pointer;

  ${M.mediaL} {
    font-size: 25px;
  }
`;
export const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${M.mediaL} {
    justify-content: flex-end;
  }
`;
export const Menu = styled.div`
  font-family: "Code Next-Trial";
  font-size: 25px;
  font-weight: 400;
  letter-spacing: -0.011em;
  text-align: center;
  color: white;
  cursor: pointer;

  ${M.mediaL} {
    font-size: 20px;
    display: none;
  }
`;
export const Menu2 = styled.div`
  display: none;
  font-family: Code Next-Trial;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.011em;
  text-align: center;
  color: white;
  cursor: pointer;

  ${M.mediaL} {
    display: block;
  }
`;
export const SidebarWrap = styled.div`
  display: none;

  ${M.mediaL} {
    display: block;
  }
`;
