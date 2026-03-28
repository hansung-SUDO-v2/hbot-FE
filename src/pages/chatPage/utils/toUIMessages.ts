import type {
  AIMessage,
  ChatMessage,
  GetChatRoomDetailResponse,
} from "@/types/chat.type";

export const toUIMessages = (
  roomDetail: GetChatRoomDetailResponse,
  nextId: () => number
): ChatMessage[] => {
  const { messages, suggestedQuestions } = roomDetail;
  const lastAIIndex = messages.findLastIndex((m) => m.senderType === "AI");

  return messages.map((msg, idx) =>
    msg.senderType === "USER"
      ? { id: nextId(), content: msg.content }
      : ({
          id: nextId(),
          content: msg.content,
          isLoading: false,
          tailQuestions:
            idx === lastAIIndex && suggestedQuestions?.length
              ? suggestedQuestions.map((q, i) => ({ id: i, text: q }))
              : (msg.suggestedQuestions ?? []).map((q) => ({
                  id: q.id,
                  text: q.question,
                })),
          tailLoading: false,
        } satisfies AIMessage)
  );
};
