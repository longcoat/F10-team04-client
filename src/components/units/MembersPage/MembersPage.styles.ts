import styled from "@emotion/styled";
import { Select } from "antd";
import { globalContainer } from "../../../commons/styles/commonStyles";
import * as M from "../../../commons/styles/mediaQueries";

export const Wrapper = styled(globalContainer)`
  padding: 48px 100px;

  ${M.mediaL} {
    padding: 48px 50px;
  }
  ${M.mediaM} {
    padding: 48px;
  }
`;
export const SearchWrap = styled.div`
  padding: 19px 80px;
  width: 90%;
  margin: 0px auto;
  box-shadow: 2px 2px 8px 0px #0000000f;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  ${M.mediaM} {
    padding: 19px 25px;
  }
`;
export const SelectSide = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  ${M.mediaM} {
    width: 75%;
  }
`;
export const Category = styled.div`
  width: 22%;
  ${M.mediaL} {
    width: 20%;
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
  padding-left: 23px;

  ${M.mediaM} {
    font-size: 15px;
    padding-left: 10px;
    padding-bottom: 9px;
  }
`;

export const Ctg_title1 = styled.div`
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: 0.2933332920074463px;
  text-align: left;
  padding-bottom: 15px;
  padding-left: 22px;

  ${M.mediaM} {
    font-size: 15px;
    padding-left: 10px;
    padding-bottom: 9px;
  }
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
    border-radius: 10px;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0 20px;
    color: #8b8b8b;
    position: relative;
    background-color: rgba(25, 29, 35, 0.05);
    border: none;
    /* border-radius: 16px; */
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${M.mediaM} {
      font-size: 15px;
      padding: 1px 0 0 7px;
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
  color: #8b8b8b;
`;
// export const ButtonSide = styled.div`
//   width: 15%;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   @media only screen and (max-width: 1024px) {
//     width: 18%;
//   }
// `;
// export const Button = styled.button`
//   width: 100%;
//   height: 46px;
//   background-color: #0b0b0b;
//   border: none;
//   color: #fdf1f2;
//   border-radius: 16px;
//   cursor: pointer;
// `;
export const NoSearch = styled.div`
  padding-top: 150px;
  margin: 0px auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

export const IconBox = styled.div`
  border-radius: 100%;
  width: 319px;
  height: 319px;
  /* background-color: rgba(217, 217, 217, 0.36); */
  background-color: black;
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

  ${M.mediaL} {
    font-size: 40px;
  }
  ${M.mediaM} {
    font-size: 30px;
  }
`;
export const P = styled.p`
  display: block;
  color: #8b8b8b;
  font-size: 20px;
  font-weight: 400;
  position: relative;
  bottom: 30px;
  text-align: left;

  ${M.mediaL} {
    padding-top: 5px;
    font-size: 15px;
  }
  ${M.mediaM} {
    padding-top: 10px;
    font-size: 15px;
  }
`;
export const ResultWrap = styled.div`
  margin: 0px auto;
  padding: 62px 30px;
  width: 1200px;
  display: flex;
  flex-direction: column;

  ${M.mediaM} {
    padding: 30px 30px;
    max-width: 768px;
    width: 100%;
  }
`;
export const ResultTitle = styled.div`
  padding-left: 30px;
  font-size: 44px;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: -0.002em;
  padding-bottom: 90px;

  ${M.mediaL} {
    padding-left: 15px;
  }
  ${M.mediaM} {
    padding-left: 0px;
    padding-bottom: 60px;
  }
`;
export const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 200px;
  ${M.mediaL} {
    padding: 0 10px;
  }
  ${M.mediaM} {
    max-width: 768px;
    padding: 0 0 0 26px;
  }
`;
export const TabMenu = styled.div`
  padding-left: 33px;
  padding-bottom: 40px;
  display: flex;
  width: 18%;
  justify-content: space-between;
  ${M.mediaL} {
    padding-left: 19px;
  }
  ${M.mediaM} {
    padding-left: 5px;
    width: 100%;
    justify-content: flex-start;
  }
`;
export const Item = styled.div`
  border-bottom: ${(props: { isActive: boolean }) =>
    props.isActive ? "2px solid #C71515" : "none"};
  padding: 0px 15px 10px 15px;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.002em;
  text-align: center;
  color: ${(props) => (props.isActive ? "#C71515" : "")};
  cursor: pointer;
`;
