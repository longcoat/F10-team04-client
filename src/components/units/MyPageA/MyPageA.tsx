import UserCard from "../../commons/userCard/01-userCard";
import * as S from "./MyPage.styles";
import { BiUserPlus } from "react-icons/bi";
import { FaRegHeart } from "react-icons/bi";
import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
// const aaa = [
//   {
//     nickName: "asd",
//     age: "10대",
//     region: "서울",
//   },
// ];

export default function MyPageA(props) {
  const [color1, setColor1] = useState(true);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);

  const onClickColorfirst = (e) => {
    if (!color1) {
      if (color2) {
        setColor1((prev) => !prev);
        setColor2((prev) => !prev);
      } else if (color3) {
        setColor1((prev) => !prev);
        setColor3((prev) => !prev);
      } else {
        setColor1((prev) => !prev);
      }
    }
  };

  const onClickColorSecond = (e) => {
    if (!color2) {
      if (color1) {
        setColor1((prev) => !prev);
        setColor2((prev) => !prev);
      } else if (color3) {
        setColor2((prev) => !prev);
        setColor3((prev) => !prev);
      } else {
        setColor2((prev) => !prev);
      }
    }
  };

  const onClickColorThird = (e) => {
    if (!color3) {
      if (color1) {
        setColor1((prev) => !prev);
        setColor3((prev) => !prev);
      } else if (color2) {
        setColor2((prev) => !prev);
        setColor3((prev) => !prev);
      } else {
        setColor3((prev) => !prev);
      }
    }
  };
  return (
    <S.Containerbox>
      {/* <S.MyPageImageBox>
        <S.MyPageImage src="/mypage.png" />
      </S.MyPageImageBox> */}
      <S.Container>
        <S.Wrapper>
          <S.ProfileBox>
            <S.ProfileImageAvatarBox>
              <S.ImageAvatar src="/profile.png" />
            </S.ProfileImageAvatarBox>
            <S.InfoBox>
              <S.NickInfoBox>
                <S.Nickname>춘식이님</S.Nickname>
                <S.Nim>님</S.Nim>
                <S.Modify>회원정보수정</S.Modify>
              </S.NickInfoBox>
              <S.InformationBox>
                <S.FriendHeartBox>
                  <S.FriendBox>
                    <S.IconBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.IconBox>
                    <S.FriendTextBox>
                      <S.FriendText>팔로잉 200</S.FriendText>
                    </S.FriendTextBox>
                  </S.FriendBox>
                  <S.HeartBox1>
                    <S.RightIconDownBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.RightIconDownBox>
                    <S.FameTextBox>
                      <S.FameText>팔로우 200</S.FameText>
                    </S.FameTextBox>
                  </S.HeartBox1>
                  <S.HeartBox>
                    <S.RightIconUpBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.RightIconUpBox>
                    <S.FameTextBox>
                      <S.FameText>인기도 200</S.FameText>
                    </S.FameTextBox>
                  </S.HeartBox>
                </S.FriendHeartBox>
                <S.FollowFollowingBox></S.FollowFollowingBox>
              </S.InformationBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.Wrapper>
        <S.BoardCategoryWrapper>
          <S.BoardBox>
            <S.FriendListBox>
              <S.FriendList>
                <S.FriendListText isActive={color1} onClick={onClickColorfirst}>
                  친구목록
                </S.FriendListText>
              </S.FriendList>
            </S.FriendListBox>
            <S.ChatListBox>
              <S.ChatList>
                <S.ChatListText onClick={onClickColorSecond} isActive={color2}>
                  대화목록
                </S.ChatListText>
              </S.ChatList>
            </S.ChatListBox>
            <S.PickListBox>
              <S.PickList>
                <S.PickListText onClick={onClickColorThird} isActive={color3}>
                  내가 찜한 게시글목록
                </S.PickListText>
              </S.PickList>
            </S.PickListBox>
          </S.BoardBox>
        </S.BoardCategoryWrapper>
        <S.ListContainer>
          {color2 ? (
            <S.BoardListWrapper>
              <S.BoardList>
                <S.ImageListProfileBox>
                  <S.ImageListProfile src="/profile.png" />
                </S.ImageListProfileBox>
                <S.InfoTextWrapper>
                  <S.InfoTextBox>
                    <S.Title>제목제목제목</S.Title>
                    <S.Section>지역지역지역</S.Section>
                    <S.Time>시간시간시간</S.Time>
                  </S.InfoTextBox>
                  <S.Content>
                    <div>내용내용내용</div>
                  </S.Content>
                </S.InfoTextWrapper>
                <S.ThumbnailBox>
                  <S.ThumbnailImage src="/thumbnailsample.png" />
                </S.ThumbnailBox>
              </S.BoardList>
            </S.BoardListWrapper>
          ) : (
            ""
          )}
          {/* {color3 ? (
            <S.Item>
              <S.Img src="./images/list/1.png"></S.Img>
              <S.Main>
                <S.Title2>당산 게이트볼</S.Title2>
                <S.Contents>
                  당산역 근처 게이트볼 하실 분 구합니다. <br></br># 50대 #19시 #
                  Beginner #16일
                </S.Contents>
                <S.Sports>게이트볼</S.Sports>
                <S.Footer>
                  <S.Location>
                    <S.Icon src="./images/list/map.png"></S.Icon>
                    <S.LocaionText>서울특별시</S.LocaionText>
                  </S.Location>
                  <RightOutlined style={{ paddingRight: 10 }} />
                </S.Footer>
              </S.Main>
            </S.Item>
          ) : (
            ""
          )} */}

          {/* <S.Items> */}
          {/* {props.data?.fetchUsers.map((el) => ( */}
          {/* <UserCard key={el.id} el={el} /> */}
          {/* ))} */}
          {/* </S.Items> */}
          {/* <UserCard aaaa={aaa} /> */}
        </S.ListContainer>
        {/* 보드리스트 게시글목록 할 때 부분 */}
      </S.Container>
    </S.Containerbox>
  );
}
