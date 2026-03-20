export const CHAT_QUERY_KEYS = {
  all: ["chatList"] as const,
  list: (filters: object) => ["chatList", filters] as const,
  details: () => ["chatRoom"] as const,
  detail: (chatId: number | string | undefined) =>
    chatId
      ? (["chatRoom", Number(chatId)] as const)
      : (["chatRoom", "new"] as const),
};
