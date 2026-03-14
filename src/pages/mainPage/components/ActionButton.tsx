import IcSchool from "@/assets/icons/main/school-icon.svg";
import IcMail from "@/assets/icons/main/mail-icon.svg";
import IcMemo from "@/assets/icons/main/memo-icon.svg";
import IcCall from "@/assets/icons/main/call-icon.svg";
import IcShare from "@/assets/icons/main/share-icon.svg";

export type ActionButtonVariant = "school" | "mail" | "memo" | "call" | "share";

interface ActionButtonProps {
  variant: ActionButtonVariant;
  label: string;
  onClick?: () => void;
}

const iconMap: Record<ActionButtonVariant, string> = {
  school: IcSchool,
  mail: IcMail,
  memo: IcMemo,
  call: IcCall,
  share: IcShare,
};

const ActionButton = ({ variant, label, onClick }: ActionButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-24.5 h-22.5 flex flex-col items-center gap-2.75 cursor-pointer hover:opacity-70 active:scale-95 transition-opacity duration-150"
    >
      <div className="flex items-center justify-center w-15 h-15 rounded-full bg-sub-blue">
        <img src={iconMap[variant]} alt={label} className="w-6 h-6" />
      </div>
      <span className="text-h5-r text-body">{label}</span>
    </button>
  );
};

export default ActionButton;
