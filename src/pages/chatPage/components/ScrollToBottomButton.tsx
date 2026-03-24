import IcArrowDownward from "@/assets/icons/chat/arrow_downward-icon.svg?react";
import IconButton from "@/components/button/IconButton";
import { Z_INDEX } from "@/constants/zIndex";

interface ScrollToBottomButtonProps {
  onClick: () => void;
}

const ScrollToBottomButton = ({ onClick }: ScrollToBottomButtonProps) => {
  return (
    <IconButton
      icon={IcArrowDownward}
      alt="맨 아래로 스크롤"
      className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full max-mobile:hidden filter-[drop-shadow(0_0_15px_rgba(0,0,0,0.10))]"
      style={{
        bottom: "calc(100% + 1.38rem)",
        zIndex: Z_INDEX.SCROLL_TO_BOTTOM,
      }}
      onClick={onClick}
    />
  );
};

export default ScrollToBottomButton;
