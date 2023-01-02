import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutHeader from "./header/header";
import LayoutNav from "./nav/nav.container";
import styled from "@emotion/styled";
import TodayItems from "./sideBanner";
import LayoutFooter from "./footer/footer";

const BodyWrapper = styled.div``;
const HIDDEN_LAYOUT = ["/login", "/joinA", "/joinB"];
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHidden =
  router.asPath.includes("members") 
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
     { isHidden && <LayoutBanner />}
      <div>{props.children}</div>
      {!isHiddenLayout && <LayoutFooter />}
    </>
  );
}
