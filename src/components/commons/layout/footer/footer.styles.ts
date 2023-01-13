import styled from "@emotion/styled";
import { mediaL, mediaM } from "../../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  height: 512px !important;
  position: relative;
  flex-direction: column;
  background-color: #0e0e0e;
`;
export const FooterHead = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 106px;
`;
export const WrapperLeft = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;
export const LeftHead = styled.div`
  width: 100%;
  padding-top: 76px;
  padding-left: 80px;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #fff;
  cursor: pointer;
`;
export const LeftMiddle = styled.div`
  padding-top: 40px;
  padding-left: 80px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;

  color: #ffffff;
`;
export const LeftIconWrap = styled.div`
  padding-top: 20px;
  padding-left: 80px;
  width: 40px;
  height: 40px;
`;
export const LeftIcon = styled.img`
  cursor: pointer;
`;
export const WrapperRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterLine = styled.div`
  height: 1px;
  width: 100%;

  background: #f8f8f8;
`;
export const FooterLast = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  ${mediaL} {
    flex-shrink: 0;
  }
`;
export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  padding-right: 280px;
  ${mediaL} {
    padding-right: 100px;
  }

  ${mediaL} {
    font-size: 18px;
  }
  ${mediaM} {
    padding-right: 78px;
    font-size: 18px;
  }
`;
export const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;
export const LastText = styled.div`
  font-weight: 400;
  padding-right: 20px;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  ${mediaL} {
    font-size: 13px;
  }
  ${mediaM} {
    display: none;
  }

  color: #ffffff;
`;
// MEMBERS 부분

export const RightTextBox = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffffff;
  padding-top: 84px;
  width: 100%;
`;

export const Text = styled.div``;

export const LTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LText = styled.div`
  font-size: 18px;
  padding-right: 270px;
  padding-bottom: 20px;
  ${mediaL} {
    padding-right: 180px;
  }
  ${mediaM} {
    padding-right: 70px;
    padding-left: 60px;
  }
`;

export const RText = styled.div`
  font-size: 18px;
  padding-bottom: 20px;
`;
