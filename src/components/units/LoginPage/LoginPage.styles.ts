import styled from "@emotion/styled";
import { Select } from "antd";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;
export const Container = styled.div`
  margin: 0 auto;
  /* width: 754px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 120px;
`;
export const LoginWrapper = styled.form`
  width: 754px;
  background-color: #fff;
  padding-bottom: 140px;
`;
export const Title = styled.div`
  padding-top: 135px;
  font-weight: 800;
  font-size: 54px;
  line-height: 55px;
  cursor: pointer;
  /* identical to box height, or 102% */
  letter-spacing: -0.011em;
  display: flex;
  justify-content: center;
  color: #0b0b0b;
`;
export const Main = styled.div`
  padding-top: 50px;
  display: flex;
  padding: 0 120px;
  flex-direction: column;
  justify-content: flex-start;
`;
export const LoginText = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 34px;
  /* identical to box height, or 106% */

  letter-spacing: -0.48px;

  color: #000000;
  padding: 50px 0 37px 0;
  ::after {
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 26px;
`;
export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const HeadTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height, or 142% */

  letter-spacing: -0.48px;

  color: #000000;
  padding-bottom: 12px;
`;
export const Dot = styled.div`
  color: #eb5757;
`;
export const Middle = styled.div``;
export const MiddleInput = styled.input`
  width: 100%;
  height: 62px;
  border: 2px solid #d9d9d9;
  border-radius: 16px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
`;
export const Bottom = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  /* identical to box height, or 212% */

  letter-spacing: -0.48px;

  color: #8b8b8b;
`;
export const Bottom2 = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
`;
export const BottomItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  /* identical to box height, or 212% */

  letter-spacing: -0.48px;

  color: #8b8b8b;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 120px 50px 120px;
`;
export const LoginButton = styled.button`
  color: #fff;
  width: 100%;
  height: 62px;
  font-weight: 400;
  font-size: 17px;
  background: #0b0b0b;
  border-radius: 16px;
  cursor: pointer;
`;
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
    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
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
