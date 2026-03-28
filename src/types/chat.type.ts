import type { PageResponse } from "./api.type";

// 1. 베이스 타입 (재사용을 위한 공통 구조)
type BaseServerEntity = { id: number; createdAt: string; updatedAt: string };
type BaseChildEntity = { id: number; chatId: number };
type BaseMessage = { id: number; content: string };

export type SenderType = "USER" | "AI";

// 2. 서버 엔티티 (DB/API 로우 데이터)
export type SuggestedQuestionEntity = BaseChildEntity & { question: string };
export type LinkEntity = BaseChildEntity & { url: string };

export type ChatEntity = BaseServerEntity & {
  chatroomId: number;
  content: string;
  senderType: SenderType;
  suggestedQuestions: SuggestedQuestionEntity[];
  links: LinkEntity[];
};

// 채팅방 엔티티 (목록 및 상세에서 공통 사용)
export interface ChatroomEntity {
  id: number;
  title: string;
}

// 3. API 요청/응답 타입

// [GET] /chat/rooms (목록 조회)
export type ChatListResponse = PageResponse<ChatroomEntity>;

// [POST] /chat (메시지 전송)
export type SendMessageRequest = {
  chatRoomId: number | null;
  message: string;
};

export type SendMessageResponse = {
  chatRoomId: number;
  response: string;
  suggestedQuestions: string[];
  title: string;
  newRoom: boolean;
};

// [GET] /chat/rooms/{chatRoomId} (상세 조회)
export type ChatRoomMessageEntity = {
  id: number;
  senderType: SenderType;
  content: string;
  createdAt: string;
  suggestedQuestions?: SuggestedQuestionEntity[];
};

export type GetChatRoomDetailResponse = {
  id: number;
  title: string;
  createdAt: string;
  messages: ChatRoomMessageEntity[];
  suggestedQuestions?: string[];
};

// 4. 프론트엔드 UI 상태 타입
export type TailQuestion = { id: number; text: string };

export type UserMessage = BaseMessage;

export type AIMessage = BaseMessage & {
  isLoading?: boolean;
  tailQuestions: TailQuestion[];
  tailLoading?: boolean;
  error?: boolean;
};

export type ChatMessage = UserMessage | AIMessage;
