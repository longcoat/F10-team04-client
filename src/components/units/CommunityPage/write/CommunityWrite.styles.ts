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
  justify-content: space-between;
`;
export const InputWrap2 = styled.div`
  display: flex;
  height: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const InputWrap3 = styled.div`
  display: flex;
  height: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
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
  border: none;
  border-radius: 16px;
  width: 100%;
  background-color: rgba(25, 29, 35, 0.05);
  height: 32px;
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
export const Category = styled.div`
width: 30%;
@media only screen and (max-width: 1024px) {
  width: 20%;
  }
`
export const Ctg_title = styled.div`
width: 242px;
color: #8B8B8B;
font-size: 16px;
font-weight: 400;
line-height: 9px;
letter-spacing: 0.2933332920074463px;
text-align: left;
padding-bottom: 15px;
padding-left: 13px;
@media only screen and (max-width: 768px) {
  font-size: 12px;
  padding-left: 10px;
  padding-bottom: 9px;
  }
`
export const Selectbar = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    width: 100%;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: #8B8B8B;
    position: relative;
    background-color: rgba(25, 29, 35, 0.05);
    border: none;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media only screen and (max-width: 768px) {
      font-size: 10px;
  }
}
.css-18xu70h {
    width: 100%;
    border:  none;
    color: #8B8B8B;
}
`;
export const SelectArea = styled(Select)`
  width: 100%;
  border: 2px solid #d9d9d9;
  color: #8B8B8B;
`;
export const Ctg_title2 = styled.div`
width: 100%;
color: #8B8B8B;
font-size: 16px;
font-weight: 400;
line-height: 9px;
letter-spacing: 0.2933332920074463px;
text-align: left;
padding-bottom: 15px;
padding-left: 13px;

`
export const InputWrapper1 = styled.div`
padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ButtonWrap = styled.div`
padding-top: 20px;
font-size: 16px;
display: flex;
justify-content: space-between;
`
export const Button1 = styled.button`
   width: 161px;
    height: 63px;
    background-color: #f6f6f6;
    color: #8b8b8b;
    border: none;
    cursor: pointer;
`
export const Button2 = styled.button`
    width: 161px;
    height: 63px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
`
