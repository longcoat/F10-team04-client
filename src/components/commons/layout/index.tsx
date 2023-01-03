import { useRouter } from "next/router";
import LayoutBanner from "./banner/01";
import LayoutBanner2 from "./banner/02";
import LayoutHeader from "./header/header";
import LayoutNav from "./nav/nav.container";
import styled from "@emotion/styled";

import LayoutFooter from "./footer/footer";

const BodyWrapper = styled.div``;
const HIDDEN_LAYOUT = ["/login", "/join", "/"];
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHidden = router.asPath.includes("members");
  const isMypage = router.asPath.includes("mypage");
  const isHidden2 = router.asPath.includes("community");
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {isHidden2 && <LayoutBanner2 />}
      {isMypage && <LayoutBanner />}
      {isHidden && <LayoutBanner />}
      <div>{props.children}</div>
      {!isHiddenLayout && <LayoutFooter />}
    </>
  );
}
