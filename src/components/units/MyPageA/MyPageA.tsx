import UserCard from "../../commons/userCard/01-userCard";
import * as S from "./MyPage.styles";
import { BiUserPlus } from "react-icons/bi";
// const aaa = [
//   {
//     nickName: "asd",
//     age: "10대",
//     region: "서울",
//   },
// ];

export default function MyPageA(props) {
  return (
    <>
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
                      <S.FriendText>친구 159명</S.FriendText>
                    </S.FriendTextBox>
                  </S.FriendBox>
                  <S.HeartBox>
                    <S.RightIconUpBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.RightIconUpBox>
                    <S.FameTextBox>
                      <S.FameText>인기도 200</S.FameText>
                    </S.FameTextBox>
                  </S.HeartBox>
                </S.FriendHeartBox>
                <S.FollowFollowingBox>
                  <S.FriendBox>
                    <S.IconBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.IconBox>
                    <S.FriendTextBox>
                      <S.FriendText>팔로잉</S.FriendText>
                    </S.FriendTextBox>
                  </S.FriendBox>
                  <S.HeartBox1>
                    <S.RightIconDownBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.RightIconDownBox>
                    <S.FameTextBox>
                      <S.FameText>팔로우</S.FameText>
                    </S.FameTextBox>
                  </S.HeartBox1>
                </S.FollowFollowingBox>
              </S.InformationBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.Wrapper>
        <S.BoardCategoryWrapper>
          <S.BoardBox>
            <S.FriendListBox>
              <S.FriendList>친구목록</S.FriendList>
            </S.FriendListBox>
            <S.ChatListBox>
              <S.ChatList>대화목록</S.ChatList>
            </S.ChatListBox>
            <S.PickListBox>
              <S.PickList>내가 찜한 게시글목록</S.PickList>
            </S.PickListBox>
          </S.BoardBox>
        </S.BoardCategoryWrapper>
        <S.ListContainer>
          <S.Items>
            {props.data?.fetchUsers.map((el) => (
              <UserCard key={el.id} el={el} />
            ))}
          </S.Items>
          {/* <UserCard aaaa={aaa} /> */}
        </S.ListContainer>
        {/* 보드리스트 게시글목록 할 때 부분 */}
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
      </S.Container>
    </>
  );
}
