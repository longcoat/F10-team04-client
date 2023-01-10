//import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

interface IGlobalContext {
  socket?: any;
  accessToken?: String;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  checkedCategory?: String;
  setCheckedCategory?: Dispatch<SetStateAction<string>>;
  search?: String;
  setSearch?: Dispatch<SetStateAction<string>>;
  searchButton?: boolean;
  setSearchButton?: Dispatch<SetStateAction<boolean>>;
  keyword?: String;
  setKeyword?: Dispatch<SetStateAction<string>>;
}

import Head from "next/head";
import { io } from "socket.io-client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAccessToken } from "../src/commons/library/getAccessToken";

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");

  const value = {
    accessToken,
    setAccessToken,
  };

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);
  return (
    <div>
      {/* <GlobalContext.Provider value={value}> */}
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
      {/* </GlobalContext.Provider> */}
    </div>
  );
}

export default MyApp;
