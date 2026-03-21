import IcBoogie from "@/assets/icons/chat/boogie-icon.svg?react";
import type { TailQuestion as TailQuestionType } from "@/types/chat.type";
import MarkdownContent from "./MarkdownContent";
import ResponseToolbar from "./ResponseToolbar";
import TailQuestion from "./TailQuestion";
import ThinkingText from "./ThinkingText";

interface AIResponseSectionProps {
  content: string;
  isLoading?: boolean;
  tailQuestions: TailQuestionType[];
  tailLoading?: boolean;
  error?: boolean;
  onTailQuestionClick?: (text: string) => void;
}

const AIResponseSection = ({
  content,
  isLoading = false,
  tailQuestions,
  tailLoading = false,
  error = false,
  onTailQuestionClick,
}: AIResponseSectionProps) => {
  return (
    <div className="flex gap-4 items-start">
      <IcBoogie className="w-12 h-12 shrink-0 max-mobile:hidden" />
      <div className="flex-1 flex flex-col gap-4">
        <div>
          {isLoading ? (
            <ThinkingText />
          ) : error ? (
            <p className="text-r-20 max-mobile:text-mb-r text-header-blue">
              답변을 가져오는 데 실패했습니다. 다시 시도해 주세요.
            </p>
          ) : (
            <MarkdownContent className="text-r-20 max-mobile:text-mb-r">
              {content}
            </MarkdownContent>
          )}
          {!isLoading && !error && (
            <ResponseToolbar className="mt-6" content={content} />
          )}
        </div>
        {!error && tailQuestions.length > 0 && (
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
