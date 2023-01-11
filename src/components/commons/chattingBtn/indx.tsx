import styled from "@emotion/styled";
import { useState } from "react";

import Livechat from "../livechat/LivechatContainer";

export default function ChattingBtn(props) {
  const [openChat, setOpenChat] = useState(false);
  const onClickOpenChat = () => {
    setOpenChat((prev) => !prev);
  };
  return (
    <>
      <Button onClick={onClickOpenChat}>메시지</Button>
      {openChat ? (
        <>
          <Livechat userData={props.userData} />
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
