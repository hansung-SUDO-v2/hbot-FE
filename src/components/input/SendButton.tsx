import IcArrow from "@/assets/icons/ic_arrow.triangle.turn.up.right.circle.fill.svg";
import { Button } from "../button/Button";

interface SendButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

export const SendButton = ({ isDisabled, onClick }: SendButtonProps) => {
  return (
    <Button
      disabled={isDisabled}
      onClick={onClick}
      className={`
        rounded-[0.625rem] py-3.25 px-5 gap-2.5 text-h5-m text-bg-white
        ${
          isDisabled
            ? "border border-primary bg-primary-disabled cursor-not-allowed"
            : "border border-transparent bg-primary hover:bg-body-blue cursor-pointer"
        }
      `}
    >
      <img
        src={IcArrow}
        alt="전송"
        className={`w-5 h-5 transition-opacity ${isDisabled ? "opacity-70" : "opacity-100"}`}
      />
      <span>전송하기</span>
    </Button>
  );
};
