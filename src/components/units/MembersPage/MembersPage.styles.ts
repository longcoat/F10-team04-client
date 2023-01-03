import styled from "@emotion/styled";
import { Select } from "antd";


export const Wrapper = styled.div`
padding: 48px 0px;
margin: 0px auto;
width: 1400px;
@media only screen and (max-width: 1024px) {
  width: 1000px;
  }
@media only screen and (max-width: 768px) {
  padding: 48px 0px;
  width: 700px;
  }
`
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
width: 22%;
@media only screen and (max-width: 1024px) {
  width: 20%;
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
export const Button = styled.button`
width: 100%;
height: 46px;
background-color: #0B0B0B;
border: none;
color: #FDF1F2;
border-radius: 16px;
cursor: pointer;

`
export const NoSearch = styled.div`
padding-top: 150px;
margin: 0px auto;
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 200px;
`
export const IconBox = styled.div`
border-radius: 100% ;
width: 319px;
height: 319px;
background-color: rgba(217, 217, 217, 0.36);
display: flex;
justify-content: center;
align-items: center;
`
export const H1 = styled.h1`
padding-top: 40px;
display: block;
color: #8B8B8B;
font-size: 48px;
font-weight: 400;
text-align: left;
@media only screen and (max-width: 1024px) {
  font-size: 40px;
  }
  @media only screen and (max-width: 768px) {
  font-size: 30px;
  }
`
export const  P = styled.p`
display: block;
color: #8B8B8B;
font-size: 20px;
font-weight: 400;
position: relative;
bottom: 30px;
text-align: left;
@media only screen and (max-width: 1024px) {
  padding-top: 5px;
  font-size: 15px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 10px;
    font-size: 15px;
  }
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
display: flex;
width: 18%;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  padding-left: 27px;
  width: 17%;
  }
`
export const Item = styled.div`
border-bottom: ${(props) => (props.isActive ? "2px solid #C71515" : "none")};
padding: 0px 15px 10px 15px;
font-size: 17px;
font-weight: 400;
line-height: 22px;
letter-spacing: -0.002em;
text-align: center;
color: ${(props) => (props.isActive ? "#C71515" : "")};
cursor: pointer;
`