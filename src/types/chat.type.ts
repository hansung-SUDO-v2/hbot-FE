import type { PageResponse } from "./api.type";

// 채팅방 하나: Sidebar 목록에 표시될 데이터 구조
export interface ChatroomEntity {
  id: number;
  title: string;
}

// 채팅방 목록: 페이지네이션 적용
export type ChatListResponse = PageResponse<ChatroomEntity>;
