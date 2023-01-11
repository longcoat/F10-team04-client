import styled from "@emotion/styled";

import { HeartFilled, HeartOutlined, UserAddOutlined } from "@ant-design/icons";

import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../units/CommunityPage/detail/CommunityDetail.queries";
import { Modal } from "antd";

import ChattingBtn from "../../chattingBtn/indx";

export const FOLLOW_USER = gql`
  mutation followUser($userId: String!) {
    followUser(userId: $userId)
  }
`;
export const FETCH_FOLLOW_COUNT = gql`
  query fetchFollowCount($userId: String!) {
    fetchFollowCount(userId: $userId) {
      id
      followCount
      followerCount
      user {
        id
      }
    }
  }
`;
export const FETCH_USER = gql`
  query fetchUser($userId: String!) {
    fetchUser(userId: $userId) {
      id
      email
      nickname
      age
      gender
      region
      prefer
      grade
    }
  }
`;
export default function UserCard(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [addActive, setAddActive] = useState(false);
  const { data } = useQuery(FETCH_FOLLOW_COUNT, {
    variables: { userId: props.el.id },
  });
  console.log(data);
  const { data: userData } = useQuery(FETCH_USER, {
    variables: { userId: props.el.id },
  });
  console.log(userData);
  const [followUser] = useMutation(FOLLOW_USER);
  const onClickHeart = () => {
    setIsActive((prev) => !prev);
  };
  const onClickAdd = (userId) => async () => {
    setAddActive((prev) => !prev);
    await followUser({
      variables: { userId: userId },
      refetchQueries: [
        {
          query: FETCH_FOLLOW_COUNT,
          variables: { userId: userId },
        },
      ],
    });
    if (addActive === false) {
      Modal.success({ content: "팔로우 완료!" });
    } else if (addActive === true) {
      Modal.error({ content: "팔로우 취소!" });
    }
  };
  return (
    <Wrapper>
      <Img></Img>
      <Name>{props.el.nickname}</Name>
      <UserInfo>
        <Item>#{props.el.prefer}</Item>
        <Item>#{props.el.age}</Item>
        <Item>#{props.el.region}</Item>
        <Item>#{props.el.grade}</Item>
      </UserInfo>
      <HeartWrap>
        <Level>{data?.fetchFollowCount?.followerCount}팔로워</Level>
        <Level>{data?.fetchFollowCount?.followCount}팔로잉</Level>
      </HeartWrap>
      <ButtonWrap>
        {!addActive ? (
          <UserAddOutlined
            onClick={onClickAdd(props.el.id)}
            style={{
              width: "20%",
              fontSize: "22px",
              paddingTop: "6px",
              height: "35px",
              borderRadius: "16px",
            }}
          />
        ) : (
          <UserAddOutlined
            onClick={onClickAdd(props.el.id)}
            style={{
              width: "20%",
              fontSize: "22px",
              paddingTop: "6px",
              height: "35px",
              borderRadius: "16px",
              color: "#3C59A6",
            }}
          />
        )}
        <ChattingBtn userData={userData} />
      </ButtonWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 30px;
  width: 237px;
  height: 341px;
  border-radius: 16px;
  background-color: #f6f6f6;
  border: none;
  box-shadow: 4px 4px 10px 0px #00000021;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 23px;
  cursor: pointer;
`;
const Img = styled.div`
  width: 103px;
  height: 103px;
  border-radius: 100%;
  border: 1px solid black;
`;
const Name = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: -0.47999998927116394px;
  text-align: left;
  padding-top: 18px;
`;
const UserInfo = styled.div`
  padding-top: 4px;
`;
const Item = styled.span`
  margin-right: 7px;
  color: #bbbbbb;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.47999998927116394px;
  text-align: left;
`;
const HeartWrap = styled.div`
  padding-top: 15px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #bbbbbb;
`;
const Level = styled.div`
  margin-left: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: -0.47999998927116394px;
  text-align: left;
`;
const Button = styled.button`
  width: 75%;
  height: 35px;
  color: #fafafa;
  background-color: #0b0b0b;
  border-radius: 16px;
  cursor: pointer;
`;
const ButtonWrap = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
