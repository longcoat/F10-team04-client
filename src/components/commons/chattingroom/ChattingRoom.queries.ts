import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      name
    }
  }
`

export const CREATE_ROOM = gql`
  mutation createRoom($roomName: String!) {
    createRoom(roomName: $roomName) {
      roomName
      roomId
      userId
      created
    }
  }
`
export const FETCH_ROOMS = gql`
  query fetchRooms {
    fetchRooms {
      roomName
      roomId
      userId
      created
    }
  }
`
export const FETCH_MY_ROOM_INFO = gql`
  query fetchMyRoomInfo {
    fetchMyRoomInfo {
      roomName
      roomId
      userId
      created
    }
  }
`
