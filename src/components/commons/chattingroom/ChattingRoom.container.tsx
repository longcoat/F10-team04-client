import { useMutation, useQuery } from '@apollo/client'
import { IMutation } from '../../../commons/types/generated/types'
// import ChattingUI from './Chatting.presenter'
import {
  CREATE_ROOM,
  FETCH_MY_ROOM_INFO,
  FETCH_ROOMS,
  FETCH_USER,
} from './ChattingRoom.queries'
import { notification } from 'antd'
import { useRouter } from 'next/router'
import {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  MouseEvent,
} from 'react'

import { io } from 'socket.io-client'
import dynamic from 'next/dynamic'

const ChattingUI = dynamic(() => import('./ChattingRoom.presenter'), {
  ssr: false,
})

const refreshToken = document.cookie
let socketOptions = {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `${refreshToken}`,
      },
    },
  },
}

const socket = io('http://localhost:5000', socketOptions).connect()

export default function ChattingRoom() {
  const router = useRouter()
  const [createRoom] = useMutation(CREATE_ROOM)

  const { data: fetchChatRooms } = useQuery(FETCH_ROOMS)
  const { data: fetchUserData } = useQuery(FETCH_USER)
  const { data: fetchMyChatInfo } = useQuery(FETCH_MY_ROOM_INFO)

  const inputRef = useRef<HTMLInputElement>(null)
  const [connected, setConnected] = useState<boolean>(false)
  const [chat, setChat] = useState([])
  const [msg, setMsg] = useState(null)
  const [roomName, setRoomName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [roomLog, setRoomLog] = useState([])
  const [prevChat, setPrevChat] = useState(false)
  const onChangeRoomName = (e) => {
    setRoomName(e.target.value)
  }

  const joinChatRoom = (e: MouseEvent<HTMLDivElement>) => {
    setRoomName(e.currentTarget.id)
    socket.emit('join room', {
      roomNum: e.currentTarget.id,
    })
  }
  const inputTag = () => {
    setMsg('')
  }
  const sendMessage = () => {
    const message = {
      message: msg,
      roomNum: roomName,
    }
    setMsg('')
    socket.emit('client message', {
      message: message.message,
      roomNum: message.roomNum,
    })
    inputRef?.current?.focus
  }

  useEffect((): any => {
    if (socket.connected) setConnected(true)
    let message = {}
    socket.on('server message', (msg) => {
      chat.push(msg)
      message = JSON.parse(msg)
      setChat([...chat])
    })
    socket.on('join', function (data) {
      console.log(data)
    })
    socket.on('room logs', function (data) {
      setRoomLog(data)
    })
    socket.on('login expired', () => {
      alert('토큰 만료')
    })
  }, [])

  const createChatRoom = async () => {
    try {
      const result = await createRoom({
        variables: {
          roomName,
        },
      })
      setRoomId(result?.data?.createRoom.roomId)
      notification.success({
        message: '채팅방 개설을 완료했어요!',
        top: 80,
      })
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }

  const nickName = fetchUserData?.fetchUser.name

  const loadPrevChat = () => {
    setPrevChat((prev) => !prev)
  }

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
        loadPrevChat={loadPrevChat}
        prevChat={prevChat}
        inputTag={inputTag}
      />
    </>
  )
}
