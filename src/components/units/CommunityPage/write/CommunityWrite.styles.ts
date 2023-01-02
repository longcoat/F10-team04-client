import styled from "@emotion/styled";
import { Select } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.div`
  width: 284px;
  height: 284px;
  background: #f6f6f6;
  border-radius: 4px;
  text-align: center;
  margin-right: 80px;
`;
export const InputWrap1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const InputWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;
export const InputWrap3 = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 66px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 14px;
`;
export const InputTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;

  color: #0b0b0b;
  padding-bottom: 11px;
`;
export const InputBox = styled.input`
  border: 1px solid #8b8b8b;
  border-radius: 16px;
  width: 242px;
  height: 63px;
  padding-left: 10px;
`;
export const selectBox = styled.select`
  border: 1px solid #8b8b8b;
  border-radius: 16px;
  width: 242px;
  height: 63px;
  padding-left: 10px;
`;
// export const Selectbar = styled.div`
//   width: 242px;
//   height: 63px;
//   .ant-select:not(.ant-select-customize-input) .ant-select-selector {
//     color: #8b8b8b;
//     position: relative;
//     background-color: rgba(25, 29, 35, 0.05);
//     border: none;
//     height: 63px;
//     transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
//   }
//   .css-18xu70h {
//     width: 100%;
//     border: none;
//     color: #8b8b8b;
//   }
// `;
// export const SelectArea = styled(Select)`
//   width: 100%;
//   height: 63px;
//   border: 2px solid #d9d9d9;
//   color: #8b8b8b;
// `;
export const Main = styled.div`
  display: flex;
  flex-direction: row;
`;
