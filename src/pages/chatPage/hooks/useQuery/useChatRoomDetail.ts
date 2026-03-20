import { useSuspenseQuery } from "@tanstack/react-query";
import { getChatRoomDetail } from "@/apis/chatApi";
import { CHAT_QUERY_KEYS } from "@/constants/queryKeys";
import type { GetChatRoomDetailResponse } from "@/types/chat.type";

export const useChatRoomDetail = (chatId: string | undefined) =>
  useSuspenseQuery<GetChatRoomDetailResponse | null>({
    queryKey: CHAT_QUERY_KEYS.detail(chatId),
    queryFn: chatId
      ? () => getChatRoomDetail(Number(chatId))
      : () => Promise.resolve(null),
  });
