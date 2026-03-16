import IcAdd from "@/assets/icons/chat/add-icon.svg?react";
import IcAttachFile from "@/assets/icons/chat/attach-file-icon.svg?react";
import IconButton from "@/components/button/IconButton";
import { SendButton } from "./SendButton";

interface ChatToolboxProps {
  isDisabled: boolean;
  onSubmit: () => void;
}

export const ChatToolbox = ({ isDisabled, onSubmit }: ChatToolboxProps) => {
  return (
    <div className="flex items-center justify-between mt-2 py-4">
      <div className="flex items-center gap-4.5">
        <IconButton icon={IcAdd} alt="추가 기능" size={24} />
        <IconButton icon={IcAttachFile} alt="파일 첨부" size={24} />
      </div>

      <SendButton isDisabled={isDisabled} onClick={onSubmit} />
    </div>
  );
};
