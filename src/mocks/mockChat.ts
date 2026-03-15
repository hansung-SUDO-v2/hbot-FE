import type { ChatMessage } from "@/types/chat";

export const mockChatMessages: ChatMessage[] = [
  {
    id: 1,
    content: "학점은행제가 뭐야?",
  },
  {
    id: 2,
    content:
      "학점은행제는 학교뿐만 아니라 학교 밖에서 이루어지는 다양한 형태의 학습과 자격을 학점으로 인정받아, 일정 기준을 충족하면 학위를 취득할 수 있는 제도입니다.\n\n쉽게 말해, '은행'에 돈을 저축하듯 다양한 활동으로 학점을 차곡차곡 모아 대학 졸업장과 동등한 학위를 받는 것이라고 이해하시면 됩니다.",
    tailQuestions: [
      { id: 1, text: "편입 준비는 어떻게 해?" },
      { id: 2, text: "학점은행제로 인정되는 자격증 종류는 뭐야?" },
    ],
  },
  {
    id: 3,
    content: "그럼 학점 인정 요건은 어떻게 돼?",
  },
  {
    id: 4,
    content: "안녕하세요, 궁금한 것들을 물어보세요!",
    isLoading: false,
    tailQuestions: [
      { id: 3, text: "편입 준비는 어떻게 해?" },
      { id: 4, text: "학점은행제로 인정되는 자격증 종류는 뭐야?" },
    ],
    tailLoading: true,
  },
];
