import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/apis/chat";
import type { SendMessageRequest, SendMessageResponse } from "@/types/chat";

export const useSendMessage = () =>
  useMutation<SendMessageResponse, Error, SendMessageRequest>({
    mutationFn: sendMessage,
  });
