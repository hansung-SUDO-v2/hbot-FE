import { useIsMobile } from "@/hooks/useIsMobile";
import { DesktopChatInput } from "./DesktopChatInput";
import { MobileChatInput } from "./MobileChatInput";

interface ChatInputProps {
  onSubmit?: (text: string) => void;
  isLoading?: boolean;
}

export const ChatInput = ({ onSubmit, isLoading }: ChatInputProps) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileChatInput onSubmit={onSubmit} isLoading={isLoading} />
  ) : (
    <DesktopChatInput onSubmit={onSubmit} isLoading={isLoading} />
  );
};
