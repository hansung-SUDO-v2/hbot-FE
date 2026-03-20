export const URLS = {
  HOME: "/",
  LOGIN: "/", // 임시
  HOMEPAGE: "https://www.hansung.ac.kr/hansung/index.do",
} as const;

export const API_PATH = {
  CHAT: {
    SEND: "/chat",
    ROOMS: "/chat/rooms",
    ROOM_DETAIL: (chatRoomId: number | string) => `/chat/rooms/${chatRoomId}`,
  },
} as const;
