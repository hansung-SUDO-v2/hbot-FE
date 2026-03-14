import { useEffect, useRef, useState } from "react";
import { ChatInput } from "@/components/input/ChatInput";
import { mockChatMessages } from "@/mocks/mockChat";
import type { AIMessage, ChatMessage } from "@/types/chat";
import AIResponseSection from "./components/AIResponseSection";
import UserMessage from "./components/UserMessage";

const ChatPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idCounterRef = useRef(0);

  const nextId = () => ++idCounterRef.current;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (text: string) => {
    const userMessageId = nextId();
    const aiMessageId = nextId();

    const loadingAIMessage: AIMessage = {
      id: aiMessageId,
      content: "",
      isLoading: true,
      tailQuestions: [],
      tailLoading: true,
    };

    setMessages((prev) => [
      ...prev,
      { id: userMessageId, content: text },
      loadingAIMessage,
    ]);

    // TODO: 실제 API 호출로 교체
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? ({
                id: aiMessageId,
                content: `"${text}"에 대한 답변입니다.`,
                isLoading: false,
                tailQuestions: [],
                tailLoading: false,
              } satisfies AIMessage)
            : msg
        )
      );
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* 채팅 영역 */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-10 chat-pl chat-pr py-10">
          {messages.map((msg) =>
            "tailQuestions" in msg ? (
              <AIResponseSection
                key={msg.id}
                content={msg.content}
                isLoading={msg.isLoading}
                tailQuestions={msg.tailQuestions}
                tailLoading={msg.tailLoading}
                onTailQuestionClick={handleSubmit}
              />
            ) : (
              <UserMessage key={msg.id} content={msg.content} />
            )
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* 입력 영역 */}
      <div className="shrink-0 relative chat-pl chat-pr pb-7">
        <div className="absolute left-0 right-0 top-0 h-12 -translate-y-full bg-linear-to-b from-transparent to-bg pointer-events-none" />
        <ChatInput onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ChatPage;
