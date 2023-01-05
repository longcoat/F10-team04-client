import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.form`
  padding: 48px 0px;
  margin: 0px auto;
  width: 1400px;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 62px;
  /* identical to box height, or 141% */

  text-align: center;
  letter-spacing: -0.002em;

  color: #000000;
`;
export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const MenuWrap = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
`;
export const Menu = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.002em;
  color: #0b0b0b;
  padding: 0 16px 10px 16px;

  border-bottom: ${(props) => (props.isActive ? "2px solid #C71515" : "none")};
  color: ${(props) => (props.isActive ? "#C71515" : "none")};
`;
export const Menu2 = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.002em;
  padding: 0 16px 10px 16px;

  color: #0b0b0b;

  border-bottom: ${(props) => (props.isActive ? "2px solid #C71515" : "none")};
  color: ${(props) => (props.isActive ? "#C71515" : "none")};
`;
export const Button = styled.button`
  width: 170px;
  height: 61px;
  left: 1374px;
  top: 677px;
  color: #fff;
  background: #0b0b0b;
  border-radius: 8px;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  cursor: pointer;
`;
export const ItemWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid red;
`;
export const Item = styled.div`
  width: 19%;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 9px rgba(153, 153, 151, 0.25);
  border-radius: 12px;
  border: 1px solid red;
  &:nth-of-type(5n) {
    margin-right: 0;
  }
`;
export const Img = styled.img`
  background-size: cover;
  width: 100%;
  height: 204px;
  border-radius: 12px;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding:0px 18px;
`;
export const Title2 = styled.div`
  padding-top: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 39px;
  /* identical to box height */

  letter-spacing: -0.0024em;

  color: #0b0b0b;
`;
export const Contents = styled.div`
  padding-top: 8px;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: -0.0024em;

  color: #8b8b8b;
`;
export const Sports = styled.div`
  padding-top: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  letter-spacing: -0.0024em;

  color: #0b0b0b;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 23px; 
  align-items: center;
`;
export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
export const LocaionText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 34px;
  /* identical to box height, or 283% */
  padding-left: 6px;
  letter-spacing: -0.48px;
  color: #8b8b8b;
`;
export const ModalCustom = styled(Modal)`
  .ant-modal-header {
    padding: 16px 24px;
    padding-top: 30px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    height: 80px;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .ant-modal-footer > .ant-btn-primary {
    width: 161px;
    height: 63px;
    background-color: #000;
    color: #fff;
    border: none;
  }
  .ant-modal-footer > .ant-btn-default {
    width: 161px;
    height: 63px;
    background-color: #f6f6f6;
    color: #8b8b8b;
    border: none;
  }
`;