import { HeartOutlined, HomeFilled } from "@ant-design/icons";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "../../../commons/mouseScroll/mouseScroll";
import PhotoReviewCard from "../../../commons/photoReviewCard";
import * as S from "./Review.styles";
import styled from "@emotion/styled";
import ReviewWrite from "../ReviewDetail/ReviewDetail.container";
import { Modal } from "antd";

let a = [
  {
    h: "축구",
    a: "10대",
    l: "서울",
    n: "가",
  },
  {
    h: "야구",
    a: "20대",
    l: "대구",
    n: "라",
  },
  {
    h: "농구",
    a: "30대",
    l: "부산",
    n: "다",
  },
  {
    h: "축구",
    a: "20대",
    l: "대전",
    n: "라",
  },
  {
    h: "축구",
    a: "30대",
    l: "포항",
    n: "차",
  },
  {
    h: "축구",
    a: "10대",
    l: "대전",
    n: "아",
  },
  {
    h: "축구",
    a: "20대",
    l: "울산",
    n: "자",
  },
];

export default function ReviewUI(props) {

  return (
    <>
     {props.isModalOpen && <CusModal  width="1100px" open={true} onOk={props.handleOk} onCancel={props.handleCancel}>
            <ReviewWrite/>
      </CusModal>}
      <S.Wrapper>
        <S.SideBar>
          <S.Logo>Rungether</S.Logo>
          <S.DDD>
            <S.ItemWrap>
              <HomeFilled style={{ fontSize: "20px" }} />
              <S.Item>HOME</S.Item>
            </S.ItemWrap>
            <S.ItemWrap>
              <HomeFilled style={{ fontSize: "20px" }} />
              <S.Item>팔로잉</S.Item>
            </S.ItemWrap>
            <S.ItemWrap>
              <HomeFilled style={{ fontSize: "20px" }} />
              <S.Item>팔로워</S.Item>
            </S.ItemWrap>
          </S.DDD>
        </S.SideBar>

        <S.Contents >
            {a.map((el) => (
              <S.ImgBox onClick={props.onClickMore} key={el.n}
              style={{backgroundColor:"gray"}}
                >
                
              </S.ImgBox>
            ))}
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
const Contents = styled.div`
height: 90%;
display: column;

`
const Wrapper = styled.div`
margin-bottom: 20px;
    margin-right: 40px;
    width: 400px;
    height: 600px;
    border: 1px solid #D3D3D3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 4px 4px 10px 0px #00000021;

`
const NameWrap =styled.div`
display: flex;
height: 7%;
align-items: center;
padding-left: 10px;
`
const Name =styled.div`
font-size:16px;
`
const ImgBox =styled.div`
width: 100%;
height: 65%;
background-color: gray;
`
const IconWrap = styled.div`
padding-left: 10px;
align-items: center;
height: 6%;
    display: flex;
` 
const Heart = styled(HeartOutlined)`
font-size: 15px;
:hover{
    cursor: pointer;
    transition: 0.2s linear;
    color: #EC0E2A;
}
`
const HeartCount =styled.div`
margin-left:10px;
`
const TagWrap = styled.div`
padding-left: 10px;
align-items: center;
height: 5%;
    display: flex;
` 
const TagList = styled.div``
const RemarkWrap =styled.div`
    padding-left:10px ;
    display: flex;
    align-items: center;
`
const Remark = styled.div`
    height: 5%;
`
const MoreWrap = styled.div`
       padding-left:10px ;
       color: #BBBBBB;
       cursor: pointer;
       `
const CreatedAt = styled.div`
padding-top: 10px;
   `
   const CusModal = styled(Modal)`
 
    .ant-modal-body {
    height: 700px;
    padding: 24px;
    padding-top: 40px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
}
.ant-modal-footer {
    height: 0px;
    border: none;
}
.ant-btn {
    visibility: hidden;
}
.ant-modal-content {
    position: relative;
    background-clip: padding-box;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
}
.css-1j9e1jp .ant-modal-body {
    height: 700px;
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
    background-color: white;
    opacity: 0.2;
}

    
   `