import { useEffect, useRef, useState, useTransition } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { AIMessage, ChatMessage } from "@/types/chat";
import { toUIMessages } from "../utils/toUIMessages";
import { useInitialMessage } from "./useInitialMessage";
import { useSendMessage } from "./useMutation/useSendMessage";
import { useChatRoomDetail } from "./useSuspenseQuery/useChatRoomDetail";

export const useChatMessages = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, startTransition] = useTransition();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const idCounterRef = useRef(0);
  const nextId = () => ++idCounterRef.current;
  const currentPathRef = useRef(pathname);

  useEffect(() => {
    currentPathRef.current = pathname;
  }, [pathname]);

  const { mutateAsync } = useSendMessage();

  const { data: roomDetail } = useChatRoomDetail(chatId);

  // biome-ignore lint/correctness/useExhaustiveDependencies: roomDetail 변경 시에만 실행
  useEffect(() => {
    if (!roomDetail) return;
    setMessages(toUIMessages(roomDetail.messages, nextId));
  }, [roomDetail]);

  const handleSubmit = async (text: string) => {
    const userMessageId = nextId();
    const aiMessageId = nextId();
    const entryPath = currentPathRef.current;

    setIsSubmitting(true);
    setMessages((prev) => [
      ...prev,
      { id: userMessageId, content: text },
      {
        id: aiMessageId,
        content: "",
        isLoading: true,
        tailQuestions: [],
        tailLoading: true,
      },
    ]);

    try {
      const data = await mutateAsync({
        chatRoomId: chatId ? Number(chatId) : null,
        message: text,
      });

      if (currentPathRef.current !== entryPath) return;

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? ({
                id: aiMessageId,
                content: data.response,
                isLoading: false,
                tailQuestions: data.suggestedQuestions.map((q, i) => ({
                  id: i,
                  text: q,
                })),
                tailLoading: false,
              } satisfies AIMessage)
            : msg
        )
      );

      if (data.newRoom) {
        startTransition(() => {
          navigate(`/chat/${data.chatRoomId}`, { replace: true });
        });
      }
    } catch {
      if (currentPathRef.current !== entryPath) return;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? ({
                ...msg,
                isLoading: false,
                tailLoading: false,
                error: true,
              } as AIMessage)
            : msg
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useInitialMessage(handleSubmit);

  return { messages, isSubmitting, handleSubmit };
};
