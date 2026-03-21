import IcCopy from "@/assets/icons/chat/content-copy-icon.svg?react";
import IcReplay from "@/assets/icons/chat/replay-icon.svg?react";
import IcShare from "@/assets/icons/chat/share-icon.svg?react";
import IcThumbDown from "@/assets/icons/chat/thumb-down-icon.svg?react";
import IcThumbUp from "@/assets/icons/chat/thumb-up-icon.svg?react";
import IcVolume from "@/assets/icons/chat/volume-up-icon.svg?react";

export const TOOLBAR_BUTTONS = [
  { action: "copy", icon: IcCopy, alt: "복사" },
  { action: "thumbUp", icon: IcThumbUp, alt: "좋아요" },
  { action: "thumbDown", icon: IcThumbDown, alt: "싫어요" },
  { action: "volume", icon: IcVolume, alt: "음성" },
  { action: "replay", icon: IcReplay, alt: "다시 생성" },
  { action: "share", icon: IcShare, alt: "공유" },
] as const;
