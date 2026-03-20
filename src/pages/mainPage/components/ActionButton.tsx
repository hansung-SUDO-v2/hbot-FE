import type React from "react";
import IcCall from "@/assets/icons/main/call-icon.svg?react";
import IcMail from "@/assets/icons/main/mail-icon.svg?react";
import IcMemo from "@/assets/icons/main/memo-icon.svg?react";
import IcSchool from "@/assets/icons/main/school-icon.svg?react";
import IcShare from "@/assets/icons/main/share-icon.svg?react";

export type ActionButtonVariant = "school" | "mail" | "memo" | "call" | "share";

interface ActionButtonProps {
  variant: ActionButtonVariant;
  label: string;
  onClick?: () => void;
}

const iconMap: Record<
  ActionButtonVariant,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  school: IcSchool,
  mail: IcMail,
  memo: IcMemo,
  call: IcCall,
  share: IcShare,
};

const ActionButton = ({ variant, label, onClick }: ActionButtonProps) => {
  const Icon = iconMap[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-24.5 h-22.5 max-laptop:w-19.6 max-laptop:h-17.95 flex flex-col items-center gap-2.75 max-laptop:gap-2.25 cursor-pointer hover:opacity-70 active:scale-95 transition-opacity duration-150"
    >
      <div className="flex items-center justify-center w-15 h-15 max-laptop:w-12 max-laptop:h-12 rounded-full bg-sub-blue">
        <Icon className="w-6 h-6" aria-label={label} />
      </div>
      <span className="text-h5-r max-laptop:text-h6-r text-body">{label}</span>
    </button>
  );
};

export default ActionButton;
