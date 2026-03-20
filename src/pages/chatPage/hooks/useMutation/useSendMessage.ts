import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "@/apis/chat";
import type { SendMessageRequest, SendMessageResponse } from "@/types/chat";
import { CHAT_QUERY_KEYS } from "@/constants/queryKeys";

export const useSendMessage = () => {
  const queryClient = useQueryClient(); // 인스턴스 가져오기

  return useMutation<SendMessageResponse, Error, SendMessageRequest>({
    mutationFn: sendMessage,
    onSuccess: (_) => {
      // 채팅이 성공적으로 전송되면 chatList 키를 가진 모든 쿼리를 무효화 -> Sidebar 새로고침
      queryClient.invalidateQueries({ queryKey: CHAT_QUERY_KEYS.all });
    },
  });
};
