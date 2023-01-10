import { useMutation, useQuery } from "@apollo/client";
// import { IMutation } from '../../../commons/types/generated/types'
// // import ChattingUI from './Chatting.presenter'
// import {
//   CREATE_ROOM,
//   FETCH_MY_ROOM_INFO,
//   FETCH_ROOMS,
//   FETCH_USER,
// } from './Chatting.queries'
import { notification } from "antd";
import { useRouter } from "next/router";
import {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  MouseEvent,
} from "react";
import { GlobalContext } from "../../../../pages/_app";
import { io } from "socket.io-client";
import dynamic from "next/dynamic";
import { A } from "../../../commons/library/getAccessToken";
import { FETCH_USER } from "./Chatting.queries";

const ChattingUI = dynamic(() => import("./Chatting.presenter"), {
  ssr: false,
});

let socketOptions = {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `${A}`,
      },
    },
  },
};

const socket = io("http://localhost:5000", socketOptions).connect();

export default function Chatting() {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  // const [createRoom] = useMutation(CREATE_ROOM)

  // const { data: fetchChatRooms } = useQuery(FETCH_ROOMS)
  const { data: fetchUserData } = useQuery(FETCH_USER)
  // const { data: fetchMyChatInfo } = useQuery(FETCH_MY_ROOM_INFO)

  const [getCookie, setGetCookie] = useState("");
  const cookies = () => {};

  const inputRef = useRef<HTMLInputElement>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState(null);
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomLog, setRoomLog] = useState([]);
  const onChangeRoomName = (e) => {
    setRoomName(e.target.value);
  };

  const joinChatRoom = (e: MouseEvent<HTMLDivElement>) => {
    socket.emit("join room", {
      roomNum: e.currentTarget.id,
    });
    console.log(e.currentTarget.id, "에 입장");
  };

  const sendMessage = async (e) => {
    // build message obj
    const message = {
      message: msg,
      roomNum: roomName,
    };
    socket.emit("client message", {
      message: message.message,
      roomNum: message.roomNum,
    });
    inputRef?.current?.focus();
  };

  useEffect((): any => {
    const refreshToken = document.cookie;
    if (socket.connected) setConnected(true);
    let message = {};
    socket.on("server message", (msg) => {
      chat.push(msg);
      message = JSON.parse(msg);
      setChat([...chat]);
    });
    socket.on("join", function (data) {
      console.log(data);
    });
    socket.on("room logs", function (data) {
      setRoomLog(data);
    });
    socket.on("login expired", () => {
      alert("토큰 만료");
    });
  }, []);

  // const createChatRoom = async () => {
  //   try {
  //     const result = await createRoom({
  //       variables: {
  //         roomName,
  //       },
  //     })
  //     setRoomId(result?.data?.createRoom.roomId)
  //     notification.success({
  //       message: '채팅방 개설을 완료했어요!',
  //       top: 80,
  //     })
  //   } catch (error) {
  //     notification.error({ message: `${error.message}`, top: 80 })
  //   }
  // }

  // const nickName = fetchUserData?.fetchUser.name

  return (
    <>
      <ChattingUI
      inputRef={inputRef}
      msg={msg}
      joinChatRoom={joinChatRoom}
      onChangeRoomName={onChangeRoomName}
      setMsg={setMsg} 
      chat={chat}
      roomLog={roomLog}
      sendMessage={sendMessage}
      nickname={nickName}
      createChatRoom={createChatRoom}
      connected={connected}
      fetchChatRooms={fetchChatRooms}
      fetchMyChatInfo={fetchMyChatInfo}
      />
    </>
  );
}
