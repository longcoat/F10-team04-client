import styled from "@emotion/styled";
import { Modal, Select } from "antd";

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
cursor: pointer;
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
  flex-direction: row;
`;
export const Item = styled.div`
  width: calc(25% - 20px);
  margin-top: 15px;
  margin-right:26px;
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
  .ant-modal-header {
    padding: 0px 24px 16px 24px;
    background-color: black;
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
padding: 19px 80px;
width: 90%;
margin: 0px auto;
box-shadow: 2px 2px 8px 0px #0000000F;
border-radius: 8px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  padding: 19px 25px;
  }
`
export const SelectSide = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  width: 75%;
  }
`
export const Category = styled.div`
width: 20%;
@media only screen and (max-width: 1024px) {
  width: 20%;
  }
`
export const InputWrap = styled.div`
width: 55%;
@media only screen and (max-width: 1024px) {
  width: 20%;
  }
`
export const Input = styled.input`
    width: 100%;
    color: #8B8B8B;
    height: 30px;
    position: relative;
    background-color: rgba(25, 29, 35, 0.05);
    border: none;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding-left: 20px;

  :focus{
    outline: none;
  }
`
export const Ctg_title = styled.div`
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
export const ButtonSide = styled.div`
width: 15%;
display: flex;
justify-content: flex-end;
align-items: center;
@media only screen and (max-width: 1024px) {
  width: 18%;
  }
`
export const SearchButton = styled.button`
width: 100%;
height: 46px;
background-color: #0B0B0B;
border: none;
color: #FDF1F2;
border-radius: 16px;
cursor: pointer;

`
export const ResultWrap = styled.div`
margin: 0px auto;
padding: 62px 30px;
width: 1200px;
display: flex;
flex-direction: column;
@media only screen and (max-width: 768px) {
  padding: 20px 30px;
  }
`
export const ResultTitle = styled.div`
padding-left: 30px;
font-size: 44px;
font-weight: 400;
line-height: 62px;
letter-spacing: -0.002em;
padding-bottom: 90px;
@media only screen and (max-width: 768px) {
  font-size: 30px;
  padding-bottom: 30px;
  }
`
export const Items =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
margin-bottom: 200px;
`
export const TabMenu = styled.div`
padding-left: 33px;
padding-right: 33px;
display: flex;
width: 100%;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  padding-left: 27px;
  width: 17%;
  }
`
export const Menu1 =styled.div`
display: flex;
width: 15%;
justify-content: space-between;
`
export const Item1 = styled.div`
border-bottom: ${(props) => (props.isActive ? "2px solid #C71515" : "none")};
padding: 0px 15px 10px 15px;
font-size: 17px;
font-weight: 400;
line-height: 22px;
letter-spacing: -0.002em;
text-align: center;
color: ${(props) => (props.isActive ? "#C71515" : "rgba(0, 0, 0, 0.85)")};
cursor: pointer;
`
export const SpoDate = styled.div`
padding-top: 30px;
padding-bottom: 13px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Date= styled.div`

`
export const Tag = styled.div``
export const Level = styled.div`
 padding-top: 8px;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: -0.0024em;

  color: #8b8b8b;`
  export const ResultWrite = styled.div`
  padding-right: 13px;
  display: flex;
  justify-content: space-between;
  `