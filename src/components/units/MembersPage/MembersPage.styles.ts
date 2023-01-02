import styled from "@emotion/styled";
import { Select } from "antd";

export const Wrapper = styled.div`
  padding: 48px 0px;
  margin: 0px auto;
  width: 1400px;
`;
export const SearchWrap = styled.div`
  padding: 19px 80px;
  width: 90%;
  margin: 0px auto;
  box-shadow: 2px 2px 8px 0px #0000000f;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;
export const SelectSide = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
export const Category = styled.div`
  width: 22%;
`;
export const Ctg_title = styled.div`
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: 0.2933332920074463px;
  text-align: left;
  padding-bottom: 15px;
  padding-left: 17px;
`;
// export const Select = styled.select`
// color: #8B8B8B;
// font-size: 20px;
// font-weight: 400;
// line-height: 34px;
// letter-spacing: -0.47999998927116394px;
// text-align: left;
// padding: 7px 14px;
// width: 100%;
// height: 40px;
// border-radius: 16px;
// border: none;
// background-color: rgba(25, 29, 35, 0.05);
// cursor: pointer;
// `
export const Selectbar = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    /* width: 40px; */
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: #8b8b8b;
    position: relative;
    background-color: rgba(25, 29, 35, 0.05);
    border: none;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .css-18xu70h {
    width: 100%;
    border: none;
    color: #8b8b8b;
  }
`;
export const SelectArea = styled(Select)`
  width: 100%;
  border: 2px solid #d9d9d9;
  color: #8b8b8b;
`;
export const ButtonSide = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Button = styled.button`
  width: 165px;
  height: 46px;
  background-color: #0b0b0b;
  border: none;
  color: #fdf1f2;
  border-radius: 16px;
  cursor: pointer;
`;
export const NoSearch = styled.div`
  padding-top: 300px;
  margin: 0px auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 300px;
`;
export const IconBox = styled.div`
  border-radius: 100%;
  width: 319px;
  height: 319px;
  background-color: rgba(217, 217, 217, 0.36);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const H1 = styled.h1`
  padding-top: 40px;
  display: block;
  color: #8b8b8b;
  font-size: 48px;
  font-weight: 400;
  text-align: left;
`;
export const P = styled.p`
  display: block;
  color: #8b8b8b;
  font-size: 20px;
  font-weight: 400;
  position: relative;
  bottom: 30px;
  text-align: left;
`;
export const ResultWrap = styled.div`
  margin: 0px auto;
  padding: 62px 30px;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const ResultTitle = styled.div`
  padding-left: 30px;
  font-size: 44px;
  font-weight: 400;
  line-height: 62px;
  letter-spacing: -0.002em;
  padding-bottom: 90px;
`;
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 200px;
`;
