import type {
  GetChatRoomDetailResponse,
  SendMessageRequest,
  SendMessageResponse,
} from "@/types/chat";
import { publicInstance } from "./axios/instance";

export const sendMessage = (req: SendMessageRequest): Promise<SendMessageResponse> =>
  publicInstance.post<SendMessageResponse>("/chat", req).then((res) => res.data);

export const getChatRoomDetail = (chatRoomId: number): Promise<GetChatRoomDetailResponse> =>
  publicInstance.get<GetChatRoomDetailResponse>(`/chat/rooms/${chatRoomId}`).then((res) => res.data);
