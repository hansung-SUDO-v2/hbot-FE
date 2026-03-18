export const API_PATH = {
  CHAT: {
    SEND: "/chat",
    ROOMS: "/chat/rooms",
    ROOM_DETAIL: (chatRoomId: number | string) => `/chat/rooms/${chatRoomId}`,
  },
} as const;
