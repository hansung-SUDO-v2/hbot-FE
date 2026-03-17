import { ChatInput } from "@/components/input/ChatInput";
import ActionButton from "./components/ActionButton";
import HomePageButton from "./components/HomePageButton";
import SuggestChipGroup from "./components/SuggestChipGroup";
import { ACTION_BUTTONS } from "@/constants/actionButtons";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useVisualViewport } from "@/hooks/useVisualViewport";

const MainPage = () => {
  const isMobile = useIsMobile();
  const { viewportHeight, offsetTop } = useVisualViewport(isMobile);

  return (
    <div
      className={`w-full text-center flex flex-col items-center overflow-hidden ${
        isMobile ? "pt-28" : "gap-6 pt-[10dvh]"
      }`}
      style={
        isMobile
          ? {
              height: viewportHeight,
              top: offsetTop,
              position: "fixed",
              left: 0,
              right: 0,
            }
          : { height: "100%" }
      }
    >
      {/* 상단 고정 텍스트 */}
      <div className="w-full flex flex-col items-center shrink-0">
        <section className="flex flex-col gap-2 items-center">
          <p className="text-h4-b max-laptop:text-h5-b max-mobile:text-h5-m text-header-blue">
            HANSUNG AI ASSISTANT
          </p>
          <p className="text-h1-b max-laptop:text-h2-b max-mobile:text-h4-b text-body">
            한성대 AI 워크스페이스
          </p>
        </section>
        <p className="text-r-28 max-laptop:text-r-22 max-mobile:text-h5-r text-body mt-7.75 max-laptop:mt-6 max-mobile:mt-5.25 mb-5.75 max-laptop:mb-4 max-mobile:mb-2 animate-dissolve">
          안녕하세요, 무엇을 도와드릴까요?
        </p>
      </div>

      {/* 추천 문장 */}
      <div
        className={`w-full flex flex-col items-center ${
          isMobile ? "flex-1 min-h-0 overflow-y-auto no-scrollbar py-2" : ""
        }`}
      >
        <SuggestChipGroup />
      </div>

      <div
        className={`w-full main-chat-pl main-chat-pr shrink-0 max-mobile:px-4 ${
          isMobile ? "pb-4" : "pb-10"
        }`}
      >
        <ChatInput />
        {!isMobile && (
          <>
            <section className="flex justify-center gap-4 max-laptop:gap-3.25 pt-10 max-laptop:pt-8">
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
    </div>
  );
};

export default MainPage;
