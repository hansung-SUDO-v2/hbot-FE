import type {
  AIMessage,
  ChatMessage,
  ChatRoomMessageEntity,
} from "@/types/chat.type";

export const toUIMessages = (
  messages: ChatRoomMessageEntity[],
  nextId: () => number
): ChatMessage[] =>
  messages.map((msg) =>
    msg.senderType === "USER"
      ? { id: nextId(), content: msg.content }
      : ({
          id: nextId(),
          content: msg.content,
          isLoading: false,
          tailQuestions: (msg.suggestedQuestions ?? []).map((q) => ({
            id: q.id,
            text: q.question,
          })),
          tailLoading: false,
        } satisfies AIMessage)
  );
