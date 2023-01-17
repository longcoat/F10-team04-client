import { ChangeEvent, useState } from "react";
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
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";

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

  const [loginUser] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const onClickSubmit = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result?.data.login;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인을 먼저 해주세요." });
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({ content: "로그인을 성공하였습니다." });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setEmailAct(true);
    } else {
      setEmailAct(false);
    }
  };
  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
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
  return (
    <LoginUIPage
      onClickSubmit={onClickSubmit}
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
