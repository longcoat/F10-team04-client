import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";

const SideBarWrap = styled.div`
  display: none;
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100%;
  width: 55%;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

const Menu = styled.li`
  margin: 30px 8px;
  font-family: Code Next-Trial;
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
    <SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
      <CloseOutlined alt="close" onClick={toggleSide} onKeyDown={toggleSide} />
      <ul>
        <Menu>Members</Menu>
        <Menu onClick={() => router.push("/community")}>Community</Menu>
        <Menu>MyMenu</Menu>
      </ul>
    </SideBarWrap>
  );
}

export default Sidebar;
