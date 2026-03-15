import { ChatToolbox } from "./ChatToolBox";
import { useChatInput } from "./useChatInput";

interface DesktopChatInputProps {
  onSubmit?: (text: string) => void;
  isLoading?: boolean;
}

export const DesktopChatInput = ({ onSubmit, isLoading }: DesktopChatInputProps) => {
  const { text, textareaRef, isDisabled, handleChange, handleSubmit, handleKeyDown } =
    useChatInput({ onSubmit, isLoading });

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
