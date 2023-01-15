import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

export const Back = styled.div`
  padding-left: 10%;
  width: 100%;
  ${M.mediaM} {
    padding-left: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const Arrow = styled.div``;

export const contentsWrap = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const Contents = styled.input`
  padding-left: 20px;
  font-size: 12px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const Count_Btn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Count = styled.div``;

export const Submit = styled.button`
  background-color: white;
  font-size: 12px;
  border: none;
`;
