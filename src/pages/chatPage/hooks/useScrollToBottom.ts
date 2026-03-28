import { useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@/types/chat.type";

const BOTTOM_THRESHOLD = 10;

interface UseScrollToBottomProps {
  messages: ChatMessage[];
  isSubmitting: boolean;
}

export const useScrollToBottom = ({
  messages,
  isSubmitting,
}: UseScrollToBottomProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastUserRef = useRef<HTMLDivElement>(null);
  const lastAIRef = useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const checkShouldShow = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isOverflowing = container.scrollHeight > container.clientHeight;
    const isAtBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight <=
      BOTTOM_THRESHOLD;

    setShowScrollBtn(isOverflowing && !isAtBottom);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: checkShouldShow only references stable refs and state setter
  useEffect(() => {
    const content = contentRef.current;
    const container = scrollContainerRef.current;
    if (!content || !container) return;

    const observer = new ResizeObserver(checkShouldShow);
    observer.observe(content);
    container.addEventListener("scroll", checkShouldShow, { passive: true });
    checkShouldShow();

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", checkShouldShow);
    };
  }, []);

  const prevIsSubmitting = useRef(isSubmitting);
  const isInitialRender = useRef(true);

  useEffect(() => {
    // 최초 진입 시
    if (isInitialRender.current && messages.length > 0) {
      lastAIRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
      isInitialRender.current = false;
    }
    // 유저 메시지 전송 시 → 유저 메시지 시작 지점으로
    else if (!prevIsSubmitting.current && isSubmitting) {
      lastUserRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // AI 응답 완료 시 → AI 답변 시작 지점으로
    else if (prevIsSubmitting.current && !isSubmitting) {
      lastAIRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // 상태 동기화
    prevIsSubmitting.current = isSubmitting;
  }, [isSubmitting, messages.length]);

  const scrollToBottom = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  };

  return {
    scrollContainerRef,
    contentRef,
    lastUserRef,
    lastAIRef,
    showScrollBtn,
    scrollToBottom,
  };
};
