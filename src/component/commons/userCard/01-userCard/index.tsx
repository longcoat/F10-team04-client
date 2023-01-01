import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";
import { EnvironmentOutlined } from "@ant-design/icons";


export default function UserCard(props) {
  return(
    <Wrapper>
        <Img></Img>
        <Name>{props.el.nickName}</Name>
        <UserInfo>
            <Item>#축구</Item>
            <Item>#{props.el.age}</Item>
            <Item>#Pro</Item>
        </UserInfo>
        <LocationWrap>
        <EnvironmentOutlined style={{fontSize: "28px"}} />
        <Location>{props.el.region}</Location>
        </LocationWrap>
        <Button>메시지</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding-top: 30px;
    width: 237px;
    height: 341px;
    border-radius: 16px;
    background-color: #F6F6F6;
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
border-radius:100% ;
border: 1px solid black;
`
const Name = styled.div`
font-size: 24px;
font-weight: 400;
line-height: 34px;
letter-spacing: -0.47999998927116394px;
text-align: left;
padding-top:18px;
`
const UserInfo = styled.div`
padding-top: 4px;
`
const Item = styled.span`
margin-right: 7px;
color: #BBBBBB;
font-size: 14qpx;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.47999998927116394px;
text-align: left;
`
const LocationWrap = styled.div`
    padding-top: 13px;  
    padding-bottom: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #BBBBBB;
`
const Location = styled.div`
margin-left: 6px;
font-size: 12px;
font-weight: 400;
line-height: 34px;
letter-spacing: -0.47999998927116394px;
text-align: left;
`
const Button = styled.button`
width: 184px;
height: 35px;
color: #FAFAFA;
background-color: #0B0B0B;
border-radius: 16px;
cursor: pointer;
`