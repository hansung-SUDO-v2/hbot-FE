import { useState } from "react";
import clsx from "clsx";
import IcAdd from "@/assets/icons/chat/add-icon.svg?react";
import IcArrow from "@/assets/icons/chat/arrow-triangle-turn-up-right-circle-fill-icon.svg";
import { ChatBottomSheet } from "@/components/bottomSheet/ChatBottomSheet";
import { useChatInput } from "./useChatInput";

interface MobileChatInputProps {
  onSubmit?: (text: string) => void;
  isLoading?: boolean;
}

export const MobileChatInput = ({ onSubmit, isLoading }: MobileChatInputProps) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const { text, textareaRef, isDisabled, handleChange, handleSubmit, handleKeyDown } =
    useChatInput({ onSubmit, isLoading });

  return (
    <div className="flex items-center gap-1.25">
      <button
        type="button"
        onClick={() => setBottomSheetOpen(true)}
        className="flex items-center justify-center py-[0.76rem] px-[0.825rem] bg-mobile-add-bg rounded-full shrink-0 cursor-pointer hover:opacity-80 transition-opacity relative z-35"
      >
        <IcAdd className="w-6 h-6 [&_path]:fill-mobile-add-icon" />
      </button>

      <ChatBottomSheet open={bottomSheetOpen} onOpenChange={setBottomSheetOpen} />

      <div className="w-full rounded-[1.875rem] p-px bg-linear-to-r from-input-border-from to-input-border-to shadow-mobile-input">
        <div className="flex flex-row items-center bg-bg-white rounded-[calc(1.875rem-1px)] py-2 pl-4 pr-[0.35rem]">
          <textarea
            ref={textareaRef}
            rows={1}
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="무엇이든 물어보세요"
            className="w-full max-h-20 text-mb-r text-chat-text placeholder:text-description bg-transparent border-none outline-none resize-none overflow-hidden flex-1"
          />

          <button
            type="button"
            disabled={isDisabled}
            onClick={handleSubmit}
            className={clsx(
              "flex items-center justify-center py-[0.53rem] px-[0.59rem] rounded-full shrink-0 transition-all duration-200",
              isDisabled
                ? "bg-primary-disabled cursor-not-allowed opacity-70"
                : "bg-mobile-send cursor-pointer hover:opacity-80",
            )}
          >
            <img src={IcArrow} alt="전송" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
