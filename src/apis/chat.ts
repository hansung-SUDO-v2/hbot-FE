import { API_PATH } from "@/constants/urls";
import type {
  GetChatRoomDetailResponse,
  SendMessageRequest,
  SendMessageResponse,
} from "@/types/chat";
import { publicInstance } from "./axios/instance";

export const sendMessage = (
  req: SendMessageRequest
): Promise<SendMessageResponse> =>
  publicInstance
    .post<SendMessageResponse>(API_PATH.CHAT.SEND, req)
    .then((res) => res.data);

export const getChatRoomDetail = (
  chatRoomId: number
): Promise<GetChatRoomDetailResponse> =>
  publicInstance
    .get<GetChatRoomDetailResponse>(API_PATH.CHAT.ROOM_DETAIL(chatRoomId))
    .then((res) => res.data);
