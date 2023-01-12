import { useEffect, useState, useRef } from "react";
import LivechatUI from "./LivechatPresenter";
import io, { Socket } from "socket.io-client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQuery } from "@apollo/client";
import { accessTokenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import { IFormValueChat, IPropsLiveChat } from "./LivechatTypes";
// import { FETCH_CHAT_HISTORY } from "./LivechatQueries";
// import { IQuery } from '../../../commons/types/generated/types';
// import { IFormValueChat, IPropsLiveChat } from "./LivechatTypes";

const url = "https://backsol2.shop:5000/chat";

export default function Livechat(props: IPropsLiveChat) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [nickname, setNickName] = useState<string | undefined>("");
  const [room, setRoom] = useState<string>("");
  const [userId, setUserId] = useState<string | undefined>("");
  const [resultMsg, setResultMsg] = useState<string[]>([]);
  //   const { data } = useQuery<Pick<IQuery,"fetchChatHistory">>(FETCH_CHAT_HISTORY, {
  //     variables: { boardId: String(router.query.boardId) },
  //   });

  const socket: Socket = io(url, { transports: ["websocket"] });

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });

  useEffect(() => {
    socket.on(room, (data) => {
      setResultMsg((prev: string[]) => [...prev, data]);
    });
  }, [room]);

  useEffect(() => {
    console.log(props.userData?.fetchLoginUser.id);
    setUserId(props.userData?.fetchLoginUser.id);
    setRoom(String(props.boardId));
    setNickName(props.userData?.fetchLoginUser.nickname);
  }, [props.userData]);

  const onClickSubmit = async (data: IFormValueChat) => {
    const message = await data.contents;
    socket.emit("send", room, nickname, message, userId);
    resetField("contents");
    await delay(100);
    return messagesEndRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const onKeyDown = (event: KeyboardEvent) => (data: IFormValueChat) => {
    if (event.key === "Enter") {
      onClickSubmit(data);
    }
  };

  return (
    <LivechatUI
      resultMsg={resultMsg}
      userId={userId}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onKeyDown={onKeyDown}
      // data={data}
      accessToken={accessToken}
      messagesEndRef={messagesEndRef}
    />
  );
}
