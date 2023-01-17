import { useRouter } from "next/router";
import LayoutBanner from "./banner/01";
import LayoutBanner2 from "./banner/02";
import LayoutHeader from "./header/header";
import styled from "@emotion/styled";

import LayoutFooter from "./footer/footer";

import { FETCH_USER_LOGGED_IN } from "./header/header";
import { useToasts } from "react-toast-notifications";
import { Socket, io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

const BodyWrapper = styled.div``;
const HIDDEN_LAYOUT = ["/login", "/join", "/", "/photoReview"];
interface ILayoutProps {
  children: JSX.Element;
}
const url = "https://backsol2.shop/chat";
const socket: Socket = io(url, { transports: ["websocket"] });

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHidden =
    router.asPath.includes("members") || router.asPath.includes("photoReview");
  const isMypage = router.asPath.includes("mypage");

  const isHidden2 = router.asPath.includes("community");
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  const { data: Userdata } = useQuery(FETCH_USER_LOGGED_IN);
  const [userId, setUserId] = useState("");
  // const { addToast } = useToasts();

  const disconnect = () => {
    socket.off();
  };

  useEffect(() => {
    setUserId(Userdata?.fetchUserLoggedIn?.id);
    router.events.on("routeChangeComplete", disconnect);
    return () => {
      router.events.off("routeChangeComplete", disconnect);
    };
  }, [Userdata, router]);

  useEffect(() => {
    socket.on(userId, (data) => {
      return addToast(`${data[0]}님에게 채팅 왔어요! ${data[1]} `, {
        appearance: "info",
      });
    });
  }, [userId]);

  return (
    <>
      <LayoutHeader />
      {isHidden2 && <LayoutBanner2 />}
      {isMypage && <LayoutBanner />}
      {isHidden && <LayoutBanner />}
      <Contents>{props.children}</Contents>
      {!isHiddenLayout && <LayoutFooter />}
    </>
  );
}

const Contents = styled.div`
  overflow: hidden;
`;

function addToast(arg0: string, arg1: { appearance: string }): void {
  throw new Error("Function not implemented.");
}
