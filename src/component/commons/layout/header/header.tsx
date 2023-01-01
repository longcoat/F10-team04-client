import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./header.style";
import Sidebar from "./sidebar";

export default function LayoutHeader() {
  const router = useRouter();
  // 햄버거 메뉴
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.Logo onClick={() => router.push("/")} className="logo">
          Rungether
        </S.Logo>
      </S.LeftSide>
      <S.RightSide>
        <S.Menu onClick={() => router.push("/members")} className="menu">Members</S.Menu>
        <S.Menu onClick={() => router.push("/community")} className="menu">
          Community
        </S.Menu>
        <S.Menu onClick={() => router.push("/login")} className="menu">
          Login
        </S.Menu>
        <S.Menu className="menu">Join</S.Menu>
        <S.Menu2>
          <MenuOutlined className="sidemenu" onClick={toggleSide} />
        </S.Menu2>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </S.RightSide>
    </S.Wrapper>
  );
}
