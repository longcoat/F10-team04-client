import styled from "@emotion/styled";
import {
  OneEllipsis,
  TwoEllipsis,
} from "../../../../commons/styles/commonStyles";
import * as M from "../../../../commons/styles/mediaQueries";

export const Wrap = styled.div`
  display: flex;
  /* align-items: center; */
  padding-left: 50px;
  margin-top: 10px;
  ${M.mediaM} {
    padding-left: 0px;
  }
`;
export const IconWrap = styled.div`
padding-top: 5px;
  width: 30px;
  height: 30px;
  ${M.mediaM} {
    display: none;
  }
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  width: 89%;
  ${M.mediaL} {
    padding-left: 10px;
  }
  ${M.mediaL} {
    width: 90%;
  }
`;
export const MainWrap = styled.div`
  display: flex;
  width: 100%;
  ${M.mediaM} {
    width: 105%;
  }
`;
export const SecondLine = styled.div`
  display: flex;
  font-size: 10px;
  align-items: center;
`;
export const Date = styled.div``;
export const ReplyBtn = styled.button`
  background-color: white;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;
export const user = styled(OneEllipsis)`
  margin-right: 5px;
  font-weight: 600;
  width: 100px;
  ${M.mediaM} {
    width: 90px;
  }
`;
export const content = styled(TwoEllipsis)`
  color: rgb(38, 38, 38);
  width: 100px;
  ${M.mediaL} {
    width: 120px;
  }
`;
export const firstLine = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;
export const ImageProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`