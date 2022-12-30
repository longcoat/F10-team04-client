import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 80px 20px 80px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;
    color: black;

    .menu {
      color: #151515;
    }
  }
`;
export const LeftSide = styled.div``;
export const Logo = styled.div`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.011em;
  text-align: left;
  color: white;
  cursor: pointer;
`;
export const RightSide = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
export const Menu = styled.div`
  font-family: Code Next-Trial;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.011em;
  text-align: center;
  color: white;
  cursor: pointer;
`;
