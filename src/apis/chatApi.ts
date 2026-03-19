import { publicInstance } from "./axios/instance";
import type { ChatListResponse } from "@/types/chat.type";
import { API_PATH } from "@/constants/apiPath";

// 채팅방 목록 조회 (GET)
export const getChatListApi = async (
  page: number = 0,
  size: number = 30,
  keyword?: string
): Promise<ChatListResponse> => {
  const res = await publicInstance.get<ChatListResponse>(API_PATH.CHAT.ROOMS, {
    params: { page, size, keyword },
  });

  return res.data;
};
