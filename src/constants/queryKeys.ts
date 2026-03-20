export const CHAT_QUERY_KEYS = {
  all: ["chatList"] as const,
  list: (filters: object) => ["chatList", filters] as const,
  detail: (chatId: string | number) => ["chatDetail", chatId] as const,
};
