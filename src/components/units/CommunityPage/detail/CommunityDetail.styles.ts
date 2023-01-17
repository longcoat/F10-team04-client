import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  width: 100%;
  height: 300px;
`;
export const Img = styled.img`
  width: 100%;
  height: 300px;
`;
export const UserWrap = styled.div`
  display: flex;
`;
export const AttendListBtn = styled.button`
  background-color: white;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  text-decoration: underline;
`;
export const IconWarp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`;
export const Map_Chat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Head = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
`;
export const AvatarWrap = styled.div`
  width: 110px;
  height: 110px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 110px;
  border-radius: 100px;
`;

export const UerInfo = styled.div`
  width: calc(100% - 110px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
`;
export const Left = styled.div``;
export const UserName = styled.div`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 62px;
  /* identical to box height, or 141% */
  letter-spacing: -0.002em;
  color: #0b0b0b;
`;
export const MapWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MapIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 2px 0px 0 0;
`;
export const MapText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #8b8b8b;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  margin-top: -28px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #0b0b0b;
`;
export const Line = styled.div`
  margin-top: 26px;
  width: 100%;
  height: 1px;
  background-color: rgba(189, 189, 189, 0.6);
`;
export const Main = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  margin: 0px auto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* identical to box height */
  letter-spacing: -0.0024em;
  text-transform: uppercase;
  color: #0b0b0b;
`;

export const TitleDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title2 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  /* identical to box height */
  letter-spacing: -0.0024em;
  text-transform: uppercase;
  color: #0b0b0b;
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;
export const Sports = styled.div`
  font-family: "Code Next-Trial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;
  text-decoration-line: underline;

  color: #8b8b8b;
`;
export const Com = styled.div`
  font-family: "Code Next-Trial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;

  color: #8b8b8b;
`;
export const Create = styled.div`
  font-family: "Code Next-Trial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */

  letter-spacing: -0.002em;
  text-decoration-line: underline;

  color: #8b8b8b;
`;
export const Contents = styled.div`
  font-family: "ABeeZee";
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  padding-top: 40px;
  color: #0b0b0b;
`;
// export const MapWrapper = styled.div`
//   margin-top: 200px;
// `;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  font-size: 16px;
`;
export const BtnWrap1 = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  font-size: 16px;
`;
export const Button1 = styled.button`
  width: 161px;
  height: 63px;
  background-color: #f6f6f6;
  color: #8b8b8b;
  border: none;

  border-radius: 12px;
  font-size: 18px;
  color: #000;
  cursor: pointer;
`;

export const Button2 = styled.button`
  width: 161px;
  height: 63px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const Button3 = styled.button`
  width: 161px;
  height: 63px;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? "black" : "#f6f6f6"};
  color: ${(props) => (props.isActive ? "#fff" : "black")};
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
`;
