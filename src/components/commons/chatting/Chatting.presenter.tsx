import * as CH from "./Chatting.styles";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function ChattingUI(props) {
  // const yourMsg = (el) => {
  //   if (el.includes(props.nickName)) return

  //   if (!el.includes(props.nickName)) return el
  // }
  // const myMsg = (el) => {
  //   if (!el.includes(props.nickName)) return

  //   if (el.includes(props.nickName)) return el
  // }
  // const AA = (el) => {
  //   let B
  //   B = JSON.parse(el)
  //   console.log(B)
  //   return B
  // }

  return (
    <>
      <CH.ListWrapper>
        <div className="UsersWrapper">
          <div className="headerWrapper">
            <div className="chatHeader">
              <div className="commandUser">
                <img src="/images/badge1.png" />
              </div>
              <span>채팅 목록</span>
            </div>
            <div className="menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="chatContainer">
            <div className="userWrapper">
              {/* {props.fetchMyChatInfo?.fetchMyRoomInfo.map((el) => ( */}
              <div
                className="user"
                // key={uuidv4()}
                // id={String(el.roomName)}
                // onClick={props.joinChatRoom}
              >
                <div className="userImg">
                  <img src="/images/profileDefault.png" />
                </div>
                <div className="contentWrapper">
                  <div
                    className="userName"
                    // key={uuidv4()}
                  >
                    {/* {el.userName} */}
                  </div>

                  <div
                    className="userContent"
                    // onClick={props.joinChatRoom}
                  >
                    채팅방에 입장하려면 클릭하세요!
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
          <div className="chatSendBox"></div>
        </div>
      </CH.ListWrapper>
      <CH.Kkang>
        <div className="wrapper">
          <div className="headerWrapper">
            <div className="chatHeader"></div>
            <div className="menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="chatContainer">
            <div className="date">2022년 04월 05일</div>

            {/* {props.chat?.map((el, i) => */}
            {/* AA(el).userName !== props.nickName ? ( */}
            <div
              className="applied"
              // key={i + 'asd'}
            >
              <div className="appliedText">
                <div className="speechBubble">{/* {AA(el).message} */}</div>
              </div>
            </div>
            {/* ) : ( */}
            <div
              className="command"
              // key={"msg" + i}
            >
              <div className="commandUser">
                <img src="/images/profileDefault.png" />
              </div>

              <div className="commandText">
                <span>{/* {AA(el).userName} */}</span>
                <div className="speechBubble">
                  <div>{/* {AA(el).message} */}</div>
                </div>
              </div>
            </div>
            {/* ) */}
            {/* )} */}

            <div className="chatSendBox">
              <input
                className="chatInput"
                name="message"
                placeholder="Type message"
                // ref={props.inputRef}
                // value={props.msg}
                // onChange={(e) => {
                //   props.setMsg(e.target.value)
                // }}
                // onKeyPress={(e) => {
                //   if (e.key === 'Enter') {
                //     props.sendMessage()
                //   }
                // }}
              />
              <button
                className="sendButton"
                // onClick={() => {
                //   props.sendMessage()
                //   props.setMsg('')
                // }}
              >
                전송
              </button>
            </div>
          </div>
        </div>
      </CH.Kkang>
    </>
  );
}
