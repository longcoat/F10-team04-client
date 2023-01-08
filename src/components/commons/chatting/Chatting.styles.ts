import styled from '@emotion/styled'

export const Kkang = styled.div`
  width: 300px;
  height: 500px;
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    overflow: hidden;

    .headerWrapper {
      width: 100%;
      height: 50px;
      margin: auto;
      background: #ffa24b37;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .chatHeader {
        display: flex;
        align-items: center;
        span {
          margin-left: 10px;
        }
      }

      > div .commandUser {
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;

        img {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .menu {
        width: 22px;
        height: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        span {
          width: 100%;
          height: 1px;
          border: 1px solid black;
          border-radius: 1px;
        }
      }
    }

    .chatContainer {
      width: 100%;
      height: 100%;
      padding: 10px 0 0px;
      position: relative;
      overflow-x: hidden;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;

      .command,
      .applied {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;

        .commandText {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .speechBubble {
            padding: 5px 10px;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            background: #ffa24b37;
            display: flex;
            align-items: center;

            &::before {
              content: '';
              position: absolute;
              bottom: -6px;
              border-top: 6px solid #ffa24b37;
              left: 0;
              border-right: 7px solid transparent;
            }
          }
          > span:last-of-type {
            font-size: 0.8rem;
            margin-left: 5px;
          }
        }

        .appliedText {
          position: relative;
          display: flex;
          align-items: center;
          > span:first-of-type {
            font-size: 0.8rem;
            margin-right: 5px;
          }
          .speechBubble {
            padding: 5px 10px;
            border-radius: 10px;
            border-bottom-right-radius: 0;
            background: #ffa24b37;
            display: flex;
            align-items: center;

            &::before {
              content: '';
              position: absolute;
              bottom: -6px;
              border-top: 6px solid #ffa24b37;
              right: 0;
              border-left: 7px solid transparent;
            }
          }
        }
      }
      .applied {
        justify-content: end;
      }

      .command > .commandUser,
      .applied > .appliedUser {
        width: 30px;
        height: 30px;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        img {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .chatSendBox {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
        background: #ffa24b37;
        /* overflow: hidden; */

        .chatInput {
          width: 75%;
          outline: 0;
          border: 0;
          background: transparent;
        }

        .sendButton {
          width: 50px;
          height: 25px;
          border-radius: 15px;
          border: 0;
          background: none;
          color: #fff;
          background: #ffa24b;
          border: 1px solid #ffa24b;
        }
      }
    }
  }
`
export const ListWrapper = styled.div`
  width: 300px;
  height: 500px;
  .UsersWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    background-color: white;

    .headerWrapper {
      width: 100%;
      height: 50px;
      margin: auto;
      background: #ffa24b37;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .chatHeader {
        display: flex;
        align-items: center;
        span {
          margin-left: 10px;
        }
      }

      > div .commandUser {
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;

        img {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .menu {
        width: 22px;
        height: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        span {
          width: 100%;
          height: 1px;
          border: 1px solid black;
          border-radius: 1px;
        }
      }
    }
    .date {
      border-radius: 10px;
      border: 1px solid black;
      padding: 2px 5px;
      margin: 5px;
    }
    .chatContainer:nth-of-type(2) {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0;
      overflow: hidden;
      overflow-y: auto;

      .userWrapper {
        width: 100%;
        height: 55px;
        padding: 10px;
        border-bottom: 1px solid #e2e2e2;

        &:last-of-type {
          border-bottom: 0;
        }

        .user {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 10px 0;
          :hover {
            background-color: #f0db97;
          }
          .userImg {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .contentWrapper {
            width: 85%;
            overflow: hidden;
            .userName {
              font-size: 0.875rem;
              font-weight: 500;
            }
            .userContent {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 0.8rem;
              color: #bdbdbd;
            }
          }
        }
      }
    }
    .chatSendBox {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 15px;
      background: #ffa24b37;
      overflow: hidden;

      .chatInput {
        width: 75%;
        outline: 0;
        border: 0;
        background: transparent;
      }

      .sendButton {
        width: 50px;
        height: 25px;
        border-radius: 15px;
        border: 0;
        background: none;
        color: #fff;
        background: #ffa24b;
        border: 1px solid #ffa24b;
      }
    }
  }
`
