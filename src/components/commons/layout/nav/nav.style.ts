import styled from "@emotion/styled";

export const Nav = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  background: white;
  padding-bottom: 20px;
  background-color: #e7e7e7;
  position: fixed;
  z-index: 10;
  opacity: 0.8;
  font-family: "GongGothicMedium";
`;
export const MenuWrapper = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div``;
export const Menu_boards = styled.a`
  font-size: 25px;
  color: ${(props) => (props.isBoards ? "#d70000" : "black")};

  :hover {
    cursor: pointer;
    color: #d70000;
    transition: 0.2s linear;
  }
`;
export const Menu_highlight = styled.a`
  font-size: 25px;
  color: ${(props) => (props.isHighlight ? "#d70000" : "black")};

  :hover {
    cursor: pointer;
    color: #d70000;
    transition: 0.2s linear;
  }
`;
export const Menu_Market = styled.a`
  font-size: 25px;
  color: ${(props) => (props.isMarket ? "#d70000" : "black")};

  :hover {
    cursor: pointer;
    color: #d70000;
    transition: 0.2s linear;
  }
`;

export const Left = styled.div`
  align-items: center;
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
`;
export const Right = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  padding-right: 80px;
`;

export const Img = styled.img`
  width: 270px;
`;
export const Menu_right = styled.div`
  font-size: 25px;
  color: black;
  margin-right: 50px;

  :hover {
    cursor: pointer;
    color: #d70000;
    transition: 0.2s linear;
  }
`;

export const Space = styled.div`
  color: black;
  font-size: 25px;
`;
export const Baskets = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  line-height: 32px;
  text-align: center;
  background-color: #d70000;
`;
