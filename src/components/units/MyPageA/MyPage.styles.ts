import styled from "@emotion/styled";
import * as M from "../../../../src/commons/styles/mediaQueries";
import { globalContainer } from "../../../commons/styles/commonStyles";

export const Containerbox = styled(globalContainer)``;

export const Container = styled.div`
  /* overflow: hidden; */
  padding: 48px 0px;
  /* margin: 0px auto; */
  /* max-width: 1640px; */
  /* max-width: 1400px; */
  /* width: 100%; */
  /* @media only screen and (max-width: 1024px) {
    background-color: #ff0000;
  }
  @media only screen and (max-width: 768px) {
    background-color: blue;
  } */

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 100px;
`;

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ProfileImageAvatarBox = styled.div``;

export const ImageAvatar = styled.img``;

export const ImageProfile = styled.img``;

export const ImageHeart = styled.img``;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

export const NickInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const FriendHeartBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Nickname = styled.div`
  font-family: "Code Next-Trial";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 62px;
  /* identical to box height, or 141% */

  text-align: center;
  letter-spacing: -0.002em;
  padding-top: 20px;

  color: #0b0b0b;
`;

export const Modify = styled.div`
  font-family: "Code Next-Trial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #8b8b8b;
  padding: 45px 0 0 15px;
`;

export const FriendBox = styled.div`
  display: flex;
  flex-direction: row;

  ${M.mediaL} {
    display: flex;
    flex-direction: column;
  }
  ${M.mediaM} {
    display: flex;
    flex-direction: column;
  }
`;

export const HeartBox = styled.div`
  display: flex;
  flex-direction: row;

  ${M.mediaL} {
    display: flex;
    flex-direction: column;
  }
  ${M.mediaM} {
    display: flex;
    flex-direction: column;
  }
`;

export const FameText = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
  margin-left: 10px;
  padding-top: 7px;

  ${M.mediaL} {
    padding-right: 20px;
  }
  ${M.mediaM} {
  }
`;

export const FriendText = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
  margin-left: 10px;
  padding-top: 7px;

  ${M.mediaL} {
    margin-left: 3px;
    padding-right: 20px;
  }
  ${M.mediaM} {
  }
`;

export const FriendTextBox = styled.div``;

export const FameTextBox = styled.div`
  color: #8b8b8b;
`;

export const BoardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const FriendList = styled.div`
  padding-right: 90px;
  ${M.mediaL} {
    padding-right: 0px;
  }
  ${M.mediaM} {
  }
`;

export const ChatList = styled.div``;

export const PickList = styled.div`
  margin-right: 90px;
`;

export const FriendListBox = styled.div`
  padding-left: 10px;
`;

export const ChatListBox = styled.div`
  padding-right: 90px;
`;

export const PickListBox = styled.div``;

export const BoardCategoryWrapper = styled.div``;
export const Nim = styled.div`
  font-family: "Code Next-Trial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #8b8b8b;
  padding-top: 45px;
`;

export const InformationBox = styled.div``;

export const FollowFollowingBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FollowingBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FollowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 60px;
`;

export const HeartBox1 = styled.div`
  display: flex;
  flex-direction: row;

  ${M.mediaL} {
    display: flex;
    flex-direction: column;
  }
  ${M.mediaM} {
    display: flex;
    flex-direction: column;
  }
`;
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 200px;
`;

export const ListContainer = styled.div`
  padding-top: 60px;
`;

export const ReactIconBox = styled.div``;

export const IconBox = styled.div`
  color: #8b8b8b;
  ${M.mediaL} {
    padding-left: 5px;
  }
  ${M.mediaM} {
  }
`;
export const RightIconUpBox = styled.div`
  padding-left: 30px;
  color: #8b8b8b;
  ${M.mediaL} {
    padding-left: 5px;
  }
  ${M.mediaM} {
  }
`;
export const RightIconDownBox = styled.div`
  padding-left: 30px;
  color: #8b8b8b;
  ${M.mediaL} {
    padding-left: 5px;
  }
  ${M.mediaM} {
  }
`;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡ보드리스트 부분ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

export const BoardListWrapper = styled.div`
  padding: 50px 200px 0 200px;
`;

export const BoardList = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #8b8b8b;
`;
export const ImageListProfileBox = styled.div`
  padding: 25px 35px 25px 0;
`;

export const ImageListProfile = styled.img`
  width: 64px;
`;

export const InfoTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 25px 0 25px 0;
`;

export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Title = styled.div`
  padding-right: 20px;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
`;

export const Section = styled.div`
  padding-right: 20px;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #8b8b8b;
`;

export const Time = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #8b8b8b;
`;

export const Content = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.0024em;

  padding-top: 15px;

  color: #0b0b0b;
`;
export const ThumbnailBox = styled.div`
  width: 120px;
  height: 90px;
  padding-top: 20px;
  border-radius: 12px;
`;
export const ThumbnailImage = styled.img`
  border-radius: 12px;
`;

export const FriendListText = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.002em;
  color: #0b0b0b;
  padding: 0 16px 10px 16px;

  border-bottom: ${(props) => (props.isActive ? "2px solid #C71515" : "none")};
  color: ${(props) => (props.isActive ? "#C71515" : "none")};
  /* identical to box height */
`;

export const PickListText = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.002em;
  padding: 0 16px 10px 16px;

  color: #0b0b0b;

  border-bottom: ${(props) => (props.isActive ? "2px solid #C71515" : "none")};
  color: ${(props) => (props.isActive ? "#C71515" : "none")};
`;

export const ChatListText = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.002em;
  padding: 0 16px 10px 16px;

  color: #0b0b0b;

  border-bottom: ${(props) => (props.isActive ? "2px solid #C71515" : "none")};
  color: ${(props) => (props.isActive ? "#C71515" : "none")};
`;

export const MyPageImageBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
`;

export const MyPageImage = styled.img``;

// 운동게시글

// export const Item = styled.div`
//   width: 25%;
//   margin-right: 20px;
//   display: flex;
//   flex-direction: column;
//   background: #ffffff;
//   box-shadow: 0px 0px 9px rgba(153, 153, 151, 0.25);
//   border-radius: 12px;
// `;
// export const Img = styled.img`
//   background-size: cover;
//   width: 100%;
//   height: 204px;
//   border-radius: 12px;
// `;
// export const Main = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-left: 18px;
// `;
// export const Title2 = styled.div`
//   padding-top: 15px;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 28px;
//   line-height: 39px;
//   /* identical to box height */

//   letter-spacing: -0.0024em;

//   color: #0b0b0b;
// `;
// export const Contents = styled.div`
//   padding-top: 8px;
//   font-weight: 400;
//   font-size: 15px;
//   line-height: 21px;
//   letter-spacing: -0.0024em;

//   color: #8b8b8b;
// `;
// export const Sports = styled.div`
//   padding-top: 18px;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 17px;
//   /* identical to box height */

//   display: flex;
//   letter-spacing: -0.0024em;

//   color: #0b0b0b;
// `;
// export const Footer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding-top: 23px;
//   padding-bottom: 20px;
//   align-items: center;
// `;
// export const Location = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;
// export const Icon = styled.img`
//   width: 24px;
//   height: 24px;
// `;
// export const LocaionText = styled.div`
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 34px;
//   /* identical to box height, or 283% */
//   padding-left: 6px;
//   letter-spacing: -0.48px;

//   color: #8b8b8b;
// `;
