import styled from "@emotion/styled";
import ChattingBtn from "../../src/components/commons/chattingBtn/indx";

export default function TestPage() {
  return (
    <Wrapper>
      <ChattingBtnWrap>
        <ChattingBtn />
      </ChattingBtnWrap>
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
`;
export const ChattingBtnWrap = styled.div`
  margin-top: 70px;
`;
