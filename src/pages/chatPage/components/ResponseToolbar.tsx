import type React from "react";
import IcCopy from "@/assets/icons/chat/content-copy-icon.svg?react";
import IcReplay from "@/assets/icons/chat/replay-icon.svg?react";
import IcShare from "@/assets/icons/chat/share-icon.svg?react";
import IcThumbDown from "@/assets/icons/chat/thumb-down-icon.svg?react";
import IcThumbUp from "@/assets/icons/chat/thumb-up-icon.svg?react";
import IcVolume from "@/assets/icons/chat/volume-up-icon.svg?react";
import IconButton from "@/components/button/IconButton";

interface ResponseToolbarProps {
  className?: string;
}

const TOOLBAR_BUTTONS: { icon: React.FC<React.SVGProps<SVGSVGElement>>; alt: string }[] = [
  { icon: IcCopy, alt: "복사" },
  { icon: IcThumbUp, alt: "좋아요" },
  { icon: IcThumbDown, alt: "싫어요" },
  { icon: IcVolume, alt: "음성" },
  { icon: IcReplay, alt: "다시 생성" },
  { icon: IcShare, alt: "공유" },
];

const ResponseToolbar = ({ className = "" }: ResponseToolbarProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {TOOLBAR_BUTTONS.map(({ icon, alt }) => (
        <IconButton key={alt} icon={icon} alt={alt} size={20} />
      ))}
    </div>
  );
};

export default ResponseToolbar;
