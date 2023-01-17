import { HeartOutlined, SmileOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";
import ReviewCommentWrite from "../../units/Comment/ReviewComment/reviewComment.container";
import ReviewWrite from "../../units/PhotoReview/ReviewDetail/ReviewDetail.container";

export default function PhotoReviewCard(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickMore = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Wrapper>
        <Contents>
          <NameWrap>
            <SmileOutlined style={{ paddingRight: "10px" }} />
            <Name>이름</Name>
          </NameWrap>
          <ImgBox></ImgBox>
          <IconWrap>
            <Heart />
            <HeartCount>좋아요 수</HeartCount>
          </IconWrap>
          <TagWrap>
            <TagList>#태그 #태그</TagList>
          </TagWrap>
          <RemarkWrap>
            <Remark>remarkremarkremarkremarkremarkremark</Remark>
          </RemarkWrap>
          <MoreWrap>
            <Remark onClick={onClickMore}>상세 보기</Remark>
          </MoreWrap>
          <RemarkWrap>
            <CreatedAt>1분전</CreatedAt>
          </RemarkWrap>
        </Contents>
        <ReviewCommentWrite />
      </Wrapper>
    </>
  );
}
const Contents = styled.div`
  height: 90%;
  display: column;
`;
const Wrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 40px;
  width: 400px;
  height: 600px;
  border: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 0px #00000021;
`;
const NameWrap = styled.div`
  display: flex;
  height: 7%;
  align-items: center;
  padding-left: 10px;
`;
const Name = styled.div`
  font-size: 16px;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 65%;
  background-color: gray;
`;
const IconWrap = styled.div`
  padding-left: 10px;
  align-items: center;
  height: 6%;
  display: flex;
`;
const Heart = styled(HeartOutlined)`
  font-size: 15px;
  :hover {
    cursor: pointer;
    transition: 0.2s linear;
    color: #ec0e2a;
  }
`;
const HeartCount = styled.div`
  margin-left: 10px;
`;
const TagWrap = styled.div`
  padding-left: 10px;
  align-items: center;
  height: 5%;
  display: flex;
`;
const TagList = styled.div``;
const RemarkWrap = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
const Remark = styled.div`
  height: 5%;
`;
const MoreWrap = styled.div`
  padding-left: 10px;
  color: #bbbbbb;
  cursor: pointer;
`;
const CreatedAt = styled.div`
  padding-top: 10px;
`;
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
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
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
`;
