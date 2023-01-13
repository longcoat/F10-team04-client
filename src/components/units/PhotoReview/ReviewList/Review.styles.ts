import styled from "@emotion/styled";

export const Wrapper =styled.div`
width: 1400px;
margin: 0px auto;
margin-top: 60px;
display: flex;
padding-bottom: 50px;
`
export const Contents = styled.div`
width: 100%;
margin-left: 40px;
display: flex;
flex-wrap: wrap;
`
export const ImgBox =styled.div`
width: 280px;
height: 280px;
cursor: pointer;
overflow: hidden;
border: 0.5px solid #151515;

`
export const Img = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .4s ease-in-out;
	transition: .4s ease-in-out;

    :hover{
        filter: brightness(70%); 
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}
`
export const SideBar = styled.div`
margin-top: 20px;
border-radius: 8px;
padding: 30px;
padding-top: 60px;
width: 18%;
height: 50vh;
box-shadow: 4px 4px 10px 0px #00000021;
display: flex;
flex-direction: column;

`
export const Logo =styled.div`
    font-size: 30px;
    margin-bottom: 60px;
`
export const ItemWrap =styled.div`
display: flex;
align-items: center;
`
export const Item =styled.div`
font-size: 25px;
margin-left: 10px;
`
export const DDD = styled.div`
height: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
