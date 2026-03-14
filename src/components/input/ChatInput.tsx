import type React from "react";
import { useRef, useState } from "react";
import { ChatToolbox } from "./ChatToolBox";

interface ChatInputProps {
  onSubmit?: (text: string) => void;
}

export const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isDisabled = text.trim().length === 0;

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    handleResizeHeight();
  };

  const handleSubmit = () => {
    if (isDisabled) return;
    onSubmit?.(text.trim());
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (e.nativeEvent.isComposing) return;
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full rounded-[1.25rem] p-px bg-linear-to-r from-input-border-from to-input-border-to shadow-input">
      <div className="flex flex-col bg-bg-white rounded-[calc(1.25rem-1px)] pt-6 pb-1 px-4">
        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="궁금한 것을 물어보세요. (지금은 학사정보만 답변을 받습니다.)"
          className="w-full max-h-52.5 text-m-20 text-chat-text placeholder:text-description bg-transparent border-none outline-none resize-none overflow-y-auto"
        />

        <ChatToolbox isDisabled={isDisabled} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
