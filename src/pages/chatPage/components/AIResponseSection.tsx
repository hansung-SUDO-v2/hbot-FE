import IcBoogie from "@/assets/icons/chat/boogie-icon.svg?react";
import type { TailQuestion as TailQuestionType } from "@/types/chat";
import ResponseToolbar from "./ResponseToolbar";
import TailQuestion from "./TailQuestion";

interface AIResponseSectionProps {
  content: string;
  isLoading?: boolean;
  tailQuestions: TailQuestionType[];
  tailLoading?: boolean;
  onTailQuestionClick?: (text: string) => void;
}

const AIResponseSection = ({
  content,
  isLoading = false,
  tailQuestions,
  tailLoading = false,
  onTailQuestionClick,
}: AIResponseSectionProps) => {
  return (
    <div className="flex gap-4 items-start">
      <IcBoogie className="w-12 h-12 shrink-0 max-mobile:hidden" />
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <p className="text-r-20 max-mobile:text-mb-r text-header-blue whitespace-pre-line">
            {isLoading ? "답변 생성중..." : content}
          </p>
          <ResponseToolbar className="mt-6" />
        </div>
        {tailQuestions.length > 0 && (
          <div className="flex flex-col gap-4">
            {tailQuestions.map((q) => (
              <TailQuestion
                key={q.id}
                text={q.text}
                isLoading={tailLoading}
                onClick={() => onTailQuestionClick?.(q.text)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIResponseSection;
