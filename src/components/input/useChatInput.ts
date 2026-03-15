import type { ChangeEvent, KeyboardEvent } from "react";
import { useRef, useState } from "react";

interface UseChatInputParams {
  onSubmit?: (text: string) => void;
  isLoading?: boolean;
}

export const useChatInput = ({ onSubmit, isLoading = false }: UseChatInputParams) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isDisabled = !text.trim() || isLoading;

  const resetHeight = () => {
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    resetHeight();
    requestAnimationFrame(() => {
      if (textareaRef.current)
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    });
  };

  const handleSubmit = () => {
    if (!text.trim() || isLoading) return;
    onSubmit?.(text.trim());
    setText("");
    resetHeight();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (e.nativeEvent.isComposing) return;
      e.preventDefault();
      handleSubmit();
    }
  };

  return { text, textareaRef, isDisabled, handleChange, handleSubmit, handleKeyDown } as const;
};
