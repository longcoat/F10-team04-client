import styled from "@emotion/styled";
import { OneEllipsis } from "../../../../commons/styles/commonStyles";
import * as M from "../../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  overflow: hidden;
  margin: 0px auto;
  margin-top: 60px;
  display: flex;
  padding: 0 80px 60px 80px;
`;
export const Contents = styled(OneEllipsis)`
  width: 100%;
  margin-left: 45px;
  display: flex;
  flex-wrap: wrap;
`;
export const ImgBox = styled.div`
  width: 333px;
  height: 333px;
  cursor: pointer;
  overflow: hidden;
  border: 0.5px solid #151515;

  ${M.mediaL} {
    width: 311px;
    height: 311px;
  }

  ${M.mediaM} {
    width: 366px;
    height: 366px;
  }
`;
export const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;

  :hover {
    filter: brightness(70%);
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`;
export const SideBar = styled.div`
  /* margin-top: 20px; */
  border-radius: 12px;
  padding: 50px 30px;
  width: 197px;
  height: 400px;
  box-shadow: 4px 4px 10px 0px #00000021;
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.div`
  font-size: 30px;
  margin-bottom: 60px;
  font-weight: 700;
`;
export const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Item = styled.div`
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;
export const DDD = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
