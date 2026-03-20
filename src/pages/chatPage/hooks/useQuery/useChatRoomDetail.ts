import { useSuspenseQuery } from "@tanstack/react-query";
import { getChatRoomDetail } from "@/apis/chat";
import type { GetChatRoomDetailResponse } from "@/types/chat";

export const useChatRoomDetail = (chatId: string | undefined) =>
  useSuspenseQuery<GetChatRoomDetailResponse | null>({
    queryKey: chatId ? ["chatRoom", Number(chatId)] : ["chatRoom", "new"],
    queryFn: chatId
      ? () => getChatRoomDetail(Number(chatId))
      : () => Promise.resolve(null),
  });
