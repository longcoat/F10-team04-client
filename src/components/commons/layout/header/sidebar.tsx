import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

const SideBarWrap = styled.div`
  display: none;
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: rgba(254, 254, 254, 0.5);
  height: 100%;
  width: 30%;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }

  ${M.mediaL} {
    display: block;
  }
`;

const Menu = styled.div`
  margin: 30px 8px;
  font-family: "Code Next-Trial";
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.011em;
  text-align: center;
  color: #151515;
`;

const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;
`;

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <SideBarWrap
      id="sidebar"
      ref={outside}
      className={isOpen ? "open" : ""}
      // style={{ zIndex: "999" }}
    >
      <CloseOutlined alt="close" onClick={toggleSide} onKeyDown={toggleSide} />

      <Menu onClick={() => router.push("/login")}>Login</Menu>
      <Menu onClick={() => router.push("/join")}>Join</Menu>
      <Menu>Members</Menu>
      <Menu onClick={() => router.push("/community")}>Community</Menu>
      <Menu>MyMenu</Menu>
    </SideBarWrap>
  );
}

export default Sidebar;
