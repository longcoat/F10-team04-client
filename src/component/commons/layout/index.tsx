import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutHeader from "./header/header";
import LayoutNav from "./nav/nav.container";
import styled from "@emotion/styled";
import TodayItems from "./sideBanner";
import LayoutFooter from "./footer/footer";

const BodyWrapper = styled.div``;
const HIDDEN_LAYOUT = ["/login", "/join"];
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHidden =
    router.asPath.includes("log_in") ||
    router.asPath.includes("new") ||
    router.asPath.includes("edit") ||
    router.asPath.includes("sign_up");
  const isHidden2 =
    router.asPath.includes("log_in") ||
    router.asPath.includes("new") ||
    router.asPath.includes("edit") ||
    router.asPath.includes("sign_up") ||
    router.asPath.includes("myPage") ||
    router.asPath.includes("highlights");
  const isHidden3 =
    router.asPath.includes("log_in") ||
    router.asPath.includes("new") ||
    router.asPath.includes("edit") ||
    router.asPath.includes("sign_up") ||
    router.asPath.includes("myPage") ||
    router.asPath.includes("boards") ||
    router.asPath.includes("highlights");
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
      {!isHiddenLayout && <LayoutFooter />}
    </>
  );
}
