import styled from "@emotion/styled";
import Slider from "react-slick";
import * as M from "../../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  border: 1px dashed #d3d3d3;
`;
export const LeftSide = styled.div`
  width: 60%;
  height: 100%;
`;
export const RightSide = styled.div`
  width: 40%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0px;

  ${M.mediaL} {
    padding: 30px 30px 30px 0;
  }
`;
export const RightInnerWrap = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  height: 80%;
`;
export const Edit_Del = styled.div`
  padding-right: 5px;
  display: flex;
  justify-content: flex-end;
`;
export const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 10px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const Name = styled.div``;
export const Contents = styled.div``;
export const TagList = styled.div`
  padding-top: 20px;
`;
export const Remark = styled.div`
  padding-top: 20px;
`;
export const Content = styled.div`
  padding-top: 20px;
`;
export const CreatedAt = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d3d3d3;
`;
export const IconWrap = styled.div`
  padding-left: 10px;
`;
export const HeartLine = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  justify-content: space-between;
`;
export const CountLine = styled.div``;
export const bigImg = styled.div`
  width: 90%;
  height: 50%;
  border: 1px solid black;
`;
export const bigImgBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const CusSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-track {
    width: 100%;
    height: 100%;
  }
  .slick-list {
    height: 100%;
    overflow: hidden;
  }
`;
export const Img = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
  margin: auto;
`;
export const Div = styled.div`
  width: 100%;
  height: 633px;
  padding: 0px 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
export const Comment = styled.div`
  width: 100%;
  height: 500px;
  overflow: auto;
`;
