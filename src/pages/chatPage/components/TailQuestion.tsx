import clsx from "clsx";
import IcEast from "@/assets/icons/chat/east-icon.svg?react";

interface TailQuestionProps {
  text: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const TailQuestion = ({
  text,
  isLoading = false,
  onClick,
}: TailQuestionProps) => {
  return (
    <button
      type="button"
      onClick={!isLoading ? onClick : undefined}
      disabled={isLoading}
      className={clsx(
        "w-full text-left flex items-center justify-between px-8 py-4.5 rounded-full bg-linear-to-r from-tail-bg-from to-tail-bg-to",
        isLoading
          ? "tail-outline-loading"
          : "border border-tail-outline-loaded cursor-pointer"
      )}
    >
      {isLoading ? (
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1 h-1 rounded-full bg-primary animate-bounce" />
        </div>
      ) : (
        <span className="text-h5-r max-mobile:text-mb-r text-primary mr-4">
          {text}
        </span>
      )}
      <IcEast className="w-6 h-6 shrink-0" />
    </button>
  );
};

export default TailQuestion;
