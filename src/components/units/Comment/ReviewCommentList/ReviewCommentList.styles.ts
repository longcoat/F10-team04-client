import styled from "@emotion/styled";
import {
  OneEllipsis,
  TwoEllipsis,
} from "../../../../commons/styles/commonStyles";
import * as M from "../../../../commons/styles/mediaQueries";

export const Wrap = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  margin-top: 30px;
`;
export const IconWrap = styled.div`
padding-top: 7px;
  width: 35px;
  height: 35px;
  ${M.mediaM} {
    margin-bottom: 39px;
  }
  ${M.mediaM} {
    display: none;
  }
`;
export const ContentWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  ${M.mediaL} {
    padding: 10px 0 10px 10px;
  }

  ${M.mediaM} {
    width: 87%;
    padding-left: 0px;
  }
`;
export const MainWrap = styled.div`
  display: flex;
`;
export const SecondLine = styled.div`
  display: flex;
  font-size: 12px;
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
  width: 100px;
  font-weight: 600;
  ${M.mediaM} {
    width: 90px;
  }
`;
export const content = styled(TwoEllipsis)`
  color: rgb(38, 38, 38);
  /* width: calc(100% - 110px); */
  width: 140px;
  ${M.mediaL} {
    width: 160px;
  }
  ${M.mediaM} {
    width: 126px;
  }
`;
export const firstLine = styled.div`
  display: flex;
  padding-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;
export const ImageProfile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100px;
`