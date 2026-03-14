import IcAdd from "@/assets/icons/add-icon.svg";
import IcAttachFile from "@/assets/icons/attach-file-icon.svg";
import { SendButton } from "./SendButton";

interface ChatToolboxProps {
  isDisabled: boolean;
  onSubmit: () => void;
}

export const ChatToolbox = ({ isDisabled, onSubmit }: ChatToolboxProps) => {
  return (
    <div className="flex items-center justify-between mt-2 py-4">
      <div className="flex items-center gap-4.5">
        <button type="button" className="hover:opacity-80 transition-opacity">
          <img src={IcAdd} alt="추가 기능" className="w-6 h-6" />
        </button>
        <button type="button" className="hover:opacity-80 transition-opacity">
          <img src={IcAttachFile} alt="파일 첨부" className="w-6 h-6" />
        </button>
      </div>

      <SendButton isDisabled={isDisabled} onClick={onSubmit} />
    </div>
  );
};
