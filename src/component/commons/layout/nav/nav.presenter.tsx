import Searchbars01 from "../../searchbars/01/Searchbars01.container";
import * as S from "./nav.style";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Divider, Button } from "antd";
import Link from "next/link";

export default function NavUI(props) {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/myPage">
          <a target="_blank" rel="noopener noreferrer">
            마이페이지
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
      disabled: true,
    },
  ];
  return (
    <S.Nav>
      <S.MenuWrapper>
        <S.Left>
          <S.Logo>
            <a href="/boards">
              <S.Img src="/header/logo6.png" />
            </a>
          </S.Logo>
          <S.Menu_highlight
            onClick={props.onClickHighlight}
            isHighlight={props.isHighlight}
          >
            하이라이트
          </S.Menu_highlight>
          <S.Menu_boards
            onClick={props.onClickBoards}
            isBoards={props.isBoards}
          >
            자유게시판
          </S.Menu_boards>
          <S.Menu_Market
            onClick={props.onClickMarket}
            isMarket={props.isMarket}
          >
            중고마켓
          </S.Menu_Market>
        </S.Left>
        <S.Right>
          <Searchbars01 />
          {props.data?.fetchUserLoggedIn.name === undefined ? (
            <S.Menu_right onClick={props.onClickLogin}>로그인</S.Menu_right>
          ) : (
            <>
              <Dropdown
                menu={{ items }}
                dropdownRender={(menu) => (
                  <div className="dropdown-content">
                    {menu}
                    <Divider style={{ margin: 0 }} />
                    <Space style={{ padding: 8 }}>
                      <Button type="primary" onClick={props.onClickLogout}>
                        로그아웃
                      </Button>
                    </Space>
                  </div>
                )}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <S.Space>
                    {props.data?.fetchUserLoggedIn.name}
                    <DownOutlined />
                  </S.Space>
                </a>
              </Dropdown>
              <S.Baskets>{props.BasketsState}</S.Baskets>
            </>
          )}
        </S.Right>
      </S.MenuWrapper>
    </S.Nav>
  );
}
