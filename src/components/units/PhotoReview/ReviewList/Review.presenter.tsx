import { HeartOutlined, HomeFilled } from "@ant-design/icons";
import * as S from "./Review.styles";
import styled from "@emotion/styled";
import { Modal } from "antd";
import ReviewDetail from "../ReviewDetail/ReviewDetail.container";

export default function ReviewUI(props) {

  return (
    <>
     {props.isModalOpen && <CusModal  width="1100px" open={true} onOk={props.handleOk} onCancel={props.handleCancel}>
            <ReviewDetail reviewId={props.reviewId}/>
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
            {props.data?.fetchAllReviewBoards.map((el) => (
              <S.ImgBox onClick={props.onClickMore(el.id)} key={el.n}
              style={{backgroundColor:"gray"}}
                >
                  {el.content}
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