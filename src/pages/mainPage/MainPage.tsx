import { ChatInput } from "@/components/input/ChatInput";
import ActionButton from "./components/ActionButton";
import HomePageButton from "./components/HomePageButton";
import SuggestChipGroup from "./components/SuggestChipGroup";
import { ACTION_BUTTONS } from "@/constants/actionButtons";
import { useIsMobile } from "@/hooks/useIsMobile";

const MainPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center gap-6 p-6.25 max-mobile:px-0 text-center">
      <section className="flex flex-col gap-2 items-center">
        <p className="text-h4-b max-laptop:text-h5-b max-mobile:text-h5-m text-header-blue">
          HANSUNG AI ASSISTANT
        </p>
        <p className="text-h1-b max-laptop:text-h2-b max-mobile:text-h4-b text-body">
          한성대 AI 워크스페이스
        </p>
      </section>
      <p className="text-r-28 max-laptop:text-r-22 max-mobile:text-h5-r text-body mt-7.75 max-laptop:mt-5 max-mobile:mt-2.75 mb-5.75 max-laptop:mb-4 max-mobile:mb-0 animate-dissolve">
        안녕하세요, 무엇을 도와드릴까요?
      </p>

      {/* 추천 문장 */}
      <SuggestChipGroup />

      <div className="w-full main-chat-pl main-chat-pr">
        <ChatInput />
      </div>

      {!isMobile && (
        <>
          <section className="flex gap-4 max-laptop:gap-3.25 pt-4 max-laptop:pt-2">
            {ACTION_BUTTONS.map(({ variant, label }) => (
              <ActionButton
                key={variant}
                variant={variant}
                label={label}
                onClick={() => {}}
              />
            ))}
          </section>

          <HomePageButton />
        </>
      )}
    </div>
  );
};

export default MainPage;
