import { API_PATH } from "@/constants/urls";
import type {
  GetChatRoomDetailResponse,
  SendMessageRequest,
  SendMessageResponse,
} from "@/types/chat.type";
import type { ChatListResponse } from "@/types/chat.type";
import { publicInstance } from "./axios/instance";

// 메시지 전송 (POST)
export const sendMessage = (
  req: SendMessageRequest
): Promise<SendMessageResponse> =>
  publicInstance
    .post<SendMessageResponse>(API_PATH.CHAT.SEND, req)
    .then((res) => res.data);

// 채팅방 상세 조회 (GET)
export const getChatRoomDetail = (
  chatRoomId: number
): Promise<GetChatRoomDetailResponse> =>
  publicInstance
    .get<GetChatRoomDetailResponse>(API_PATH.CHAT.ROOM_DETAIL(chatRoomId))
    .then((res) => res.data);

// 채팅방 목록 조회 (GET)
export const getChatListApi = (
  page: number = 0,
  size: number = 30,
  keyword?: string
): Promise<ChatListResponse> =>
  publicInstance
    .get<ChatListResponse>(API_PATH.CHAT.ROOMS, {
      params: { page, size, keyword },
    })
    .then((res) => res.data);
