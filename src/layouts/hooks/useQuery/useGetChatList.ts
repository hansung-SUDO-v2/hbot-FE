import { useSuspenseQuery } from "@tanstack/react-query";
import { getChatListApi } from "@/apis/chatApi";
import { CHAT_QUERY_KEYS } from "@/constants/queryKeys";
import type { ChatListResponse } from "@/types/chat.type";

export const useGetChatList = (page = 0, size = 30, keyword?: string) => {
  return useSuspenseQuery<ChatListResponse>({
    queryKey: CHAT_QUERY_KEYS.list({ page, size, keyword }),
    queryFn: () => getChatListApi(page, size, keyword),
    staleTime: 60 * 3000, // 3분
  });
};
