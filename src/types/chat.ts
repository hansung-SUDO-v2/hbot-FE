// 베이스 타입
type BaseServerEntity = { id: number; createdAt: string; updatedAt: string };
type BaseChildEntity = { id: number; chatId: number };
type BaseMessage = { id: number; content: string };

// 서버 엔티티
export type SenderType = "USER" | "AI";
export type SuggestedQuestionEntity = BaseChildEntity & { question: string };
export type LinkEntity = BaseChildEntity & { url: string };
export type ChatEntity = BaseServerEntity & {
  chatroomId: number;
  content: string;
  senderType: SenderType;
  suggestedQuestions: SuggestedQuestionEntity[];
  links: LinkEntity[];
};
export type ChatroomEntity = BaseServerEntity & { title: string };

// API 요청/응답 타입
export type SendMessageRequest = { chatRoomId: number | null; message: string };
export type SendMessageResponse = {
  chatRoomId: number;
  response: string;
  suggestedQuestions: string[];
  title: string;
  isNewRoom: boolean;
};
export type GetChatHistoryResponse = ChatEntity[];
export type GetChatroomListResponse = ChatroomEntity[];

// 프론트 UI state 타입
export type TailQuestion = { id: number; text: string };
export type UserMessage = BaseMessage;
export type AIMessage = BaseMessage & {
  isLoading?: boolean;
  tailQuestions: TailQuestion[];
  tailLoading?: boolean;
};
export type ChatMessage = UserMessage | AIMessage;
