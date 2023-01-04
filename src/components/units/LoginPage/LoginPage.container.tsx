import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginUIPage from "./LoginPage.presenter";
import { schema } from "./LoginPage.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./LoginPage.query";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [emailAct, setEmailAct] = useState(false);
  const [pwAct, setPwAct] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [pwAct1, setPwAct1] = useState(false);
  const [pwAct2, setPwAct2] = useState(false);
  const [pwAct3, setPwAct3] = useState(false);
  const [pwAct4, setPwAct4] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const [login] = useMutation(LOGIN);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const onClickLog = async (data) => {
    console.log("sdfsdf");
    console.log(data);
    try {
      //1.로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await login({
        variables: { data },
      });
      const accessToken = result.data?.login;
      // console.log(accessToken);
      //2.받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        Modal.error({ content: "로그인 먼저 해주세요" });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      //3.로그인 성공 페이지로 이동하기
      // console.log(accessToken);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEmail = (e) => {
    if (e.target.value !== "") {
      setEmailAct(true);
    } else {
      setEmailAct(false);
    }
  };
  const onChangePw = (e) => {
    if (e.target.value !== "") {
      setPwAct(true);
    } else {
      setPwAct(false);
    }
    if (e.target.value.match(/^(?=.*[a-zA-Z]).{0,16}$/)) {
      setPwAct1(true);
    } else {
      setPwAct1(false);
    }
    if (e.target.value.match(/^(?=.*[0-9]).{0,16}$/)) {
      setPwAct2(true);
    } else {
      setPwAct2(false);
    }
    if (e.target.value.match(/^(?=.*[!@#$%^*+=-]).{0,16}$/)) {
      setPwAct3(true);
    } else {
      setPwAct3(false);
    }
    if (e.target.value.match(/^.{8,16}$/)) {
      setPwAct4(true);
    } else {
      setPwAct4(false);
    }
  };
  // const onClickLogin = (data) => {
  //   if (data.email !== "" && data.password !== "") {
  //     setIsActive(true);
  //     alert("로그인 완료");
  //   }
  // };
  return (
    <LoginUIPage
      onClickLog={onClickLog}
      formState={formState}
      emailAct={emailAct}
      pwAct={pwAct}
      pwAct1={pwAct1}
      pwAct2={pwAct2}
      pwAct3={pwAct3}
      pwAct4={pwAct4}
      isActive={isActive}
      register={register}
      onChangeEmail={onChangeEmail}
      onChangePw={onChangePw}
      handleSubmit={handleSubmit}
      // onClickLogin={onClickLogin}
    />
  );
}
