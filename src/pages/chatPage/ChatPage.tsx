import { useEffect } from "react";
import { ChatInput } from "@/components/input/ChatInput";
import AIResponseSection from "./components/AIResponseSection";
import ScrollToBottomButton from "./components/ScrollToBottomButton";
import UserMessage from "./components/UserMessage";
import { useChatMessages } from "./hooks/useChatMessages";
import { useScrollToBottom } from "./hooks/useScrollToBottom";

const ChatPage = () => {
  const { messages, isSubmitting, handleSubmit } = useChatMessages();
  const {
    scrollContainerRef,
    contentRef,
    bottomRef,
    showScrollBtn,
    scrollToBottom,
  } = useScrollToBottom();

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on new message or response complete
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isSubmitting]);

  return (
    <div className="flex flex-col h-full">
      {/* 채팅 영역 */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        <div
          ref={contentRef}
          className="flex flex-col gap-10 chat-pl chat-pr pt-10"
        >
          {messages.map((msg) =>
            "tailQuestions" in msg ? (
              <AIResponseSection
                key={msg.id}
                content={msg.content}
                isLoading={msg.isLoading}
                tailQuestions={msg.tailQuestions}
                tailLoading={msg.tailLoading}
                error={msg.error}
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
        {showScrollBtn && <ScrollToBottomButton onClick={scrollToBottom} />}
        <div className="ml-16 max-mobile:ml-0">
          <ChatInput onSubmit={handleSubmit} isLoading={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
