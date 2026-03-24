import { useEffect, useRef, useState } from "react";

const BOTTOM_THRESHOLD = 10;

export const useScrollToBottom = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
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

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    scrollContainerRef,
    contentRef,
    bottomRef,
    showScrollBtn,
    scrollToBottom,
  };
};
