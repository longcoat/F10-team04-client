import styled from "@emotion/styled";
import { Modal, Select } from "antd";
import {
  globalContainer,
  OneEllipsis,
} from "../../../../commons/styles/commonStyles";
import * as M from "../../../../commons/styles/mediaQueries";

export const Wrapper = styled(globalContainer)`
  padding: 48px 80px;
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
  padding: 62px 30px;
  display: flex;
  justify-content: space-between;
`;
export const MenuWrap = styled.div`
  padding-top: 30px;
  padding: 62px 30px;
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
  cursor: pointer;
  border-bottom: ${(props: { isActive: boolean }) =>
    props.isActive ? "2px solid #C71515" : "none"};
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
  cursor: pointer;
  color: #0b0b0b;

  border-bottom: ${(props: { isActive: boolean }) =>
    props.isActive ? "2px solid #C71515" : "none"};
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
  flex-direction: row;
`;
export const Item = styled(OneEllipsis)`
  /* width: calc(25% - 20px); */
  width: 24%;
  margin-top: 15px;
  margin-right: 1.3%;
  margin-bottom: 20px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 9px rgba(153, 153, 151, 0.25);
  border-radius: 12px;
  &:nth-of-type(4n) {
    margin-right: 0;
  }

  ${M.mediaL} {
    width: 32%;
    margin-right: 2%;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    &:nth-of-type(4n) {
      margin-right: 2%;
    }
  }

  ${M.mediaM} {
    width: 48%;
    margin-right: 4%;
    &:nth-of-type(4n) {
      margin-right: 4%;
    }
    &:nth-of-type(3n) {
      margin-right: 4%;
    }
    &:nth-of-type(2n) {
      margin-right: 0%;
    }
  }
  /* &:nth-of-type(4n) {
    margin-right: 0; */
`;
export const Img = styled.div`
  background-size: cover;
  width: 100%;
  height: 204px;
  border-radius: 12px;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 18px;
`;
export const Title2 = styled(OneEllipsis)`
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
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */
  display: flex;
  letter-spacing: -0.0024em;
  color: #0b0b0b;
  width: 30%;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  .ant-modal-content {
    margin: 60px 0;
    padding-top: 20px;
    border-radius: 20px;
  }
  .ant-modal-wrap {
  }

  .ant-modal-body {
    padding: 30px;
  }

  .ant-modal-centered .ant-modal {
    padding-top: 200px;
  }

  .ant-modal-centered {
  }
  .ant-modal-header {
    padding: 0px 24px 16px 24px;
    background-color: white;
    color: white;
    text-align: center;
    border-radius: 2px 2px 0 0;
    height: 80px;
  }
  .ant-modal-body {
    padding-top: 10px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
  }
  .ant-modal-footer > .ant-btn-primary {
    display: none;
  }
  .ant-modal-footer > .ant-btn-default {
    display: none;
  }
  .ant-modal-close-x {
    display: none;
  }
`;

export const SearchWrap = styled.div`
  padding: 19px 80px 35px 80px;
  width: 100%;
  margin: 0px auto;
  box-shadow: 2px 2px 8px 0px #0000000f;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  ${M.mediaM} {
    padding: 19px 30px 35px 30px;
  }
`;
export const SelectSide = styled.div`
  display: flex;
  width: 83%;
  justify-content: space-between;
  overflow: hidden;
`;
export const Category = styled.div`
  width: 20%;
`;
export const InputWrap = styled.div`
  width: 55%;
`;
export const Input = styled.input`
  width: 100%;
  color: #8b8b8b;
  height: 36px;
  position: relative;
  background-color: rgba(25, 29, 35, 0.05);
  border: none;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding-left: 20px;

  :focus {
    outline: none;
  }
`;
export const Ctg_title = styled.div`
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: 0.2933332920074463px;
  text-align: left;
  padding-bottom: 15px;
  padding-left: 13px;
  padding-top: 10px;
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
    height: 36px;
    position: relative;
    background-color: rgba(25, 29, 35, 0.05);
    border: none;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .css-18xu70h {
    width: 100%;
    border: none;
    color: #8b8b8b;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    font-size: 14px;
    padding: 3px 0 0 3px;
  }
`;
export const SelectArea = styled(Select)`
  width: 100%;
  color: #8b8b8b;
`;
export const ButtonSide = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 33px;
`;
export const SearchButton = styled.button`
  width: 100%;
  height: 36px;
  background-color: #0b0b0b;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;
export const ResultWrap = styled.div`
  margin: 0px auto;
  padding: 62px 0;
  width: 100%;
  /* width: 1200px; */
  display: flex;
  flex-direction: column;
`;
export const ResultTitle = styled.div`
  /* padding: 0 3%; */
  font-size: 44px;
  width: 100%;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: -0.002em;
  padding-bottom: 90px;

  ${M.mediaM} {
    padding-bottom: 40px;
  }
`;
export const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: flex-start; */
  margin-bottom: 200px;
  ${M.mediaL} {
    width: 100%;
  }
`;
export const TabMenu = styled.div`
  /* padding-left: 33px; */
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${M.mediaM} {
    padding-left: 23px;
  }
`;
export const Menu1 = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-between;

  ${M.mediaM} {
    width: 30%;
  }
`;
export const Item1 = styled.div`
  border-bottom: ${(props: { isActive: boolean }) =>
    props.isActive ? "2px solid #C71515" : "none"};
  /* padding: 0px 15px 10px 15px; */
  font-size: 17px;
  font-weight: 400;
  width: 100%;
  line-height: 22px;
  letter-spacing: -0.002em;
  text-align: center;
  color: ${(props) => (props.isActive ? "#C71515" : "rgba(0, 0, 0, 0.85)")};
  cursor: pointer;
  ${M.mediaM} {
  }
`;
export const SpoDate = styled.div`
  padding-top: 30px;
  padding-bottom: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Date = styled.div``;
export const Tag = styled.div``;
export const Level = styled.div`
  padding-top: 8px;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: -0.0024em;

  color: #8b8b8b;
`;
export const ResultWrite = styled.div`
  padding-right: 13px;
  display: flex;
  justify-content: space-between;
`;
