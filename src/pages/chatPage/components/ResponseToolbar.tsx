import IcCopy from "@/assets/icons/content-copy-icon.svg?react";
import IcReplay from "@/assets/icons/replay-icon.svg?react";
import IcShare from "@/assets/icons/share-icon.svg?react";
import IcThumbDown from "@/assets/icons/thumb-down-icon.svg?react";
import IcThumbUp from "@/assets/icons/thumb-up-icon.svg?react";
import IcVolume from "@/assets/icons/volume-up-icon.svg?react";
import IconButton from "@/components/button/IconButton";

interface ResponseToolbarProps {
  className?: string;
}

const ResponseToolbar = ({ className = "" }: ResponseToolbarProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <IconButton icon={IcCopy} alt="복사" size={20} />
      <IconButton icon={IcThumbUp} alt="좋아요" size={20} />
      <IconButton icon={IcThumbDown} alt="싫어요" size={20} />
      <IconButton icon={IcVolume} alt="음성" size={20} />
      <IconButton icon={IcReplay} alt="다시 생성" size={20} />
      <IconButton icon={IcShare} alt="공유" size={20} />
    </div>
  );
};

export default ResponseToolbar;
