import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
width: 90%;
margin: 0px auto;
height: 100%;
display: flex;
`
export const LeftSide = styled.div`
width: 60%;
height: 100%;
background-color: gray;
`
export const RightSide = styled.div`
width:40%;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom: 0px;
`
export const DDD = styled.div`
padding-left: 10px;
display: flex;
flex-direction: column;
height: 80%;

`
export const UserWrap = styled.div`
display:flex;
align-items: center;
height: 5%;
border-bottom: 1px solid #D3D3D3;
padding-bottom: 10px;
`
export const Name = styled.div`
`
export const Contents = styled.div``
export const TagList = styled.div`
padding-top:20px;
`
export const Remark = styled.div`
padding-top:20px;`
export const Content = styled.input`
margin-top:40px;
width: 100%;
border: none;
border-bottom: 1px solid #D3D3D3;

:focus{
    outline: none;
}
`
export const CreatedAt = styled.div`
padding-top: 20px;
`
export const IconWrap =styled.div`
padding-top: 5px;
padding-left: 10px;
height: 10%;

`
export const HeartLine =styled.div``
export const CountLine =styled.div``

export const CusEditModal = styled(Modal)`
 
.ant-modal-body {
height: 500px;
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
.ant-modal-close-x {
    display: none;
  }
`
export const imagesBox = styled.div`
width: 10%;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
export const Img = styled.div`
border: 1px solid #D3D3D3;
margin: 5px 0px;
width: 50%;
`
export const ButtonWrap =styled.div`
width: 50%;
margin: 0px auto;
display: flex;
justify-content: space-between;
`
export const Button = styled.button`
background-color: #151515;
color: white;
width: 40%;
border-radius: 8px;
cursor: pointer;
`