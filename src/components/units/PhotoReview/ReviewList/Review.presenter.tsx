import { HeartOutlined, HomeFilled, UserOutlined } from "@ant-design/icons";
import * as S from "./Review.styles";
import styled from "@emotion/styled";
import { Modal } from "antd";
import ReviewDetail from "../ReviewDetail/ReviewDetail.container";
import InfiniteScroll from "react-infinite-scroller";
import FollowingList from "../../../commons/userCard/02-userCard(following)";
import FollowerList from "../../../commons/userCard/03-userCard(follower)";
import * as M from "../../../../commons/styles/mediaQueries";

export default function ReviewUI(props: any) {
  return (
    <>
      {props.isModalOpen && (
        <CusModal
          width="1000px"
          open={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <ReviewDetail
            reviewId={props.reviewId}
            setIsModalOpen={props.setIsModalOpen}
          />
        </CusModal>
      )}

      <S.Wrapper>
        <S.SideBar>
          <S.Logo>Rungether</S.Logo>
          <S.DDD>
            <S.ItemWrap>
              <HomeFilled style={{ fontSize: "20px" }} />
              <S.Item onClick={props.onClickHome}>HOME</S.Item>
            </S.ItemWrap>
            <S.ItemWrap>
              <UserOutlined style={{ fontSize: "20px" }} />
              <S.Item onClick={props.onClickFollowing}>팔로잉 {props.followingList?.fetchFollowing.length === 0 ? 0 : props.followingList?.fetchFollowing.length}</S.Item>
            </S.ItemWrap>
            <S.ItemWrap>
              <UserOutlined style={{ fontSize: "20px" }} />
              <S.Item onClick={props.onClickFollower}>팔로워 {props.followerList?.fetchFollower.length === 0 ? 0 : props.followerList?.fetchFollower.length}</S.Item>
            </S.ItemWrap>
          </S.DDD>
        </S.SideBar>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.reviewList ? (
            <S.Contents>
              {props.data?.fetchAllReviewBoards.map((el) => (
                <S.ImgBox onClick={props.onClickMore(el.id)} key={el.n}>
                  <S.Img
                    style={{
                      backgroundImage: el.thumbnail
                        ? `url(${el.thumbnail})`
                        : `url(/images/basic.png)`,
                    }}
                  ></S.Img>
                </S.ImgBox>
              ))}
            </S.Contents>
          ) : (
            ""
          )}
          {props.following ? (
            <S.Contents>
              {props.followingList?.fetchFollowing.map((el) => (
                <FollowingList key={el.id} el={el.user2} />
              ))}
            </S.Contents>
          ) : (
            ""
          )}
          {props.follower ? (
            <S.Contents>
              {props.followerList?.fetchFollower.map((el) => (
                <FollowerList key={el.id} el={el.user1} />
              ))}
            </S.Contents>
          ) : (
            ""
          )}
        </InfiniteScroll>
      </S.Wrapper>
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
    /* padding-top: 40px; */
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
    border-radius: 12px;
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

  .ant-modal-close-x {
    display: block;
    width: 54px;
    height: 54px;
    font-size: 16px;
    font-style: normal;
    margin-top: -12px;
    margin-right: -12px;
    line-height: 54px;
    text-align: center;
    color: black;
    text-transform: none;
    text-rendering: auto;
    display: none;
  }

  .ant-modal-footer {
    padding: 0;
  }

  .slick-dots {
    position: absolute;
    bottom: -24px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .css-1mes9sh {
    padding: 24px;
  }

  .css-1wg7eal {
    width: 100%;
    margin: 0px auto;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    /* border: 1px dashed #d3d3d3; */
    border: 0;
    box-shadow: 4px 4px 10px 2px #00000021;
    border-radius: 10px;
  }
`;
