import styled from "@emotion/styled";
import { Select } from "antd";

export const Container = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 100%;
`;

export const JoinWrapper = styled.div`
  width: 754px;
  margin: 0 auto;
  padding: 50px 120px;
  background: white;
`;
export const JoinForm = styled.div`
  width: 754px;
  margin: 0 auto;
  padding: 50px 120px;
  background: white;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 89px;
  /* align-items: center; */
  /* padding-top: 175px; */
`;

export const JoinTitleBox = styled.div`
  padding-top: 50px;
`;

export const Title = styled.div`
  font-family: "Code Next-Trial";
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 55px;
  cursor: pointer;
  /* identical to box height, or 102% */

  letter-spacing: -0.011em;

  color: #0b0b0b;
`;

export const JoinContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const JoinTitle = styled.div`
  font-family: "AppleSDGothicNeoH00";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 34px;
  /* identical to box height, or 106% */

  letter-spacing: -0.48px;

  color: #000000;
`;

export const InfoTitle = styled.div`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height, or 142% */

  letter-spacing: -0.48px;

  color: #000000;
`;

export const InfoSubtitle = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  /* identical to box height, or 212% */

  letter-spacing: -0.48px;

  color: #8b8b8b;
  padding-left: 10px;
`;

export const DuplicationBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 5px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 37px;
`;
export const InfoBox1 = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 37px;
  justify-content: space-between;
`;

export const RedDot = styled.div`
  color: #eb5757;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  /* identical to box height, or 212% */

  letter-spacing: -0.48px;
  padding-left: 10px;

  color: #8b8b8b;
`;
export const Bottom2 = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Type = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  /* margin-right: 23px; */
  padding-right: 23px;
  /* identical to box height, or 212% */

  letter-spacing: -0.48px;

  color: #8b8b8b;
`;

export const DupButton = styled.button`
  color: #fff;
  width: 20%;

  /* height: 62px; */
  background: #0b0b0b;
  border-radius: 16px;
  cursor: pointer;
  margin-left: 20px;
  border: 0;
`;

export const DupInput = styled.input`
  width: 80%;
  border: 2px solid #d9d9d9;
  border-radius: 16px;
  padding: 14px 0 14px 10px;
`;

export const PassInput = styled.input`
  width: 100%;
  border: 2px solid #d9d9d9;
  border-radius: 16px;
  padding: 14px 0 14px 10px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
export const NextButton = styled.button`
  width: 100%;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 34px;
  /* identical to box height, or 121% */
  background-color: #000000;
  border: 0;
  letter-spacing: -0.48px;
  padding: 10px 0;
  border-radius: 10px;

  color: #fafafa;
  cursor: pointer;
`;

export const PassInputBox = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const ProfileImg = styled.img``;

export const ProfileText = styled.div`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  /* identical to box height, or 170% */

  text-align: center;
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  color: #0b0b0b;
`;

export const ProfileTextBox = styled.div`
  padding-top: 40px;
`;

export const GrayLine = styled.div`
  border: 1px solid #d9d9d9; ;
`;

export const Line = styled.div`
  padding-top: 46px;
`;
export const Wrap = styled.div`
  display: flex;
`;

export const CommonInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 14px 0 14px 20px;
  border: 2px solid #d9d9d9;
  font-size: 20px;
`;

export const CommonSelect = styled.select`
  width: 100%;
  border-radius: 10px;
  padding: 14px 0 14px 20px;
  border: 2px solid #d9d9d9;
  font-size: 20px;
`;

export const SexButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px 0;
`;

export const SexButton1 = styled.button`
  /* background: #0b0b0b;
  border-radius: 9px;
  cursor: pointer;
  border: 0;
  width: 50%;
  padding: 14px 0;
  color: white;
  font-size: 20px; */
  border: ${(props: { isActive: boolean }) =>
    props.isActive ? "2px solid black" : "2px solid #d9d9d9"};
  background-color: ${(props) => (props.isActive ? "#0b0b0b" : "white")};
  border-radius: 9px;
  cursor: pointer;
  width: 50%;
  padding: 14px 0;
  color: ${(props) => (props.isActive ? "white" : "#d9d9d9")};
  font-size: 20px;
`;

export const SexButton2 = styled.button`
  border: ${(props: { isActive: boolean }) =>
    props.isActive ? "2px solid black" : "2px solid #d9d9d9"};
  background-color: ${(props) => (props.isActive ? "#0b0b0b" : "white")};
  border-radius: 9px;
  cursor: pointer;
  width: 50%;
  margin-left: 20px;
  padding: 14px 0;
  color: ${(props) => (props.isActive ? "white" : "#d9d9d9")};
  font-size: 20px;
`;

export const CommonInputBox = styled.div`
  padding: 5px 0;
  border-radius: 9px;
`;

export const ExerciseButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

export const ExerciseButton1 = styled.button`
  width: 33%;
  border-radius: 9px;
  cursor: pointer;
  padding: 14px 0;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#0b0b0b" : "white"};
  font-size: 20px;
  color: ${(props) => (props.isActive ? "white" : "#d9d9d9")};
  border: ${(props) =>
    props.isActive ? "2px solid black" : "2px solid #d9d9d9"};
  color: #d9d9d9;
`;

export const ExerciseButton2 = styled.button`
  width: 33%;
  margin-left: 20px;
  border-radius: 9px;
  cursor: pointer;
  padding: 14px 0;
  color: white;
  font-size: 20px;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#0b0b0b" : "white"};
  border: ${(props) =>
    props.isActive ? "2px solid black" : "2px solid #d9d9d9"};
  color: ${(props) => (props.isActive ? "white" : "#d9d9d9")};
`;

export const ExerciseButton3 = styled.button`
  width: 33%;
  margin-left: 20px;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#0b0b0b" : "white"};
  border-radius: 9px;
  cursor: pointer;
  border: ${(props) =>
    props.isActive ? "2px solid black" : "2px solid #d9d9d9"};
  padding: 14px 0;
  color: ${(props) => (props.isActive ? "white" : "#d9d9d9")};
  font-size: 20px;
`;
export const CompleteButton = styled.button`
  width: 100%;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 34px;
  /* identical to box height, or 121% */
  background-color: #000000;
  border: 0;
  letter-spacing: -0.48px;
  padding: 14px 0;
  border-radius: 10px;

  color: #fafafa;
  cursor: pointer;
`;

export const CompleteButtonBox = styled.div`
  padding-top: 50px;
`;

export const SelectArea = styled(Select)`
  width: 100%;
  border: none;
  color: #8b8b8b;
`;

export const Selectbar = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    /* width: 40px; */
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 100%;
    border-radius: 10px;
    font-size: 20px;
    height: auto;
    padding: 14px 0 14px 20px;
  }
`;
