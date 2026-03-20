import { useSuspenseQuery } from "@tanstack/react-query";
import { getChatRoomDetail } from "@/apis/chatApi";
import type { GetChatRoomDetailResponse } from "@/types/chat";
import { CHAT_QUERY_KEYS } from "@/constants/queryKeys";

export const useChatRoomDetail = (chatId: string | undefined) =>
  useSuspenseQuery<GetChatRoomDetailResponse | null>({
    queryKey: CHAT_QUERY_KEYS.detail(chatId),
    queryFn: chatId
      ? () => getChatRoomDetail(Number(chatId))
      : () => Promise.resolve(null),
  });
