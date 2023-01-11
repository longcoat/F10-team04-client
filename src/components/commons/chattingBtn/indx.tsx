import styled from "@emotion/styled";
import { useState } from "react";

import Chatting from "../chatting/Chatting.container";
import ChattingRoom from "../chattingroom/ChattingRoom.container";

export default function ChattingBtn() {
  const [openChat, setOpenChat] = useState(false);
  const onClickOpenChat = () => {
    setOpenChat((prev) => !prev);
  };
  return (
    <>
      <Button onClick={onClickOpenChat}>메시지</Button>
      {openChat ? (
        <>
          <Chatting />
          <ChattingRoom />
        </>
      ) : (
        ""
      )}
    </>
  );
}

const Button = styled.button`
  width: 75%;
  height: 35px;
  color: #fafafa;
  background-color: #0b0b0b;
  border-radius: 16px;
  cursor: pointer;
`;
