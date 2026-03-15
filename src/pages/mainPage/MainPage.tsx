import { ChatInput } from "@/components/input/ChatInput";
import SuggestChip from "./components/SuggestChip";
import ActionButton from "./components/ActionButton";
import HomePageButton from "./components/HomePageButton";
import { ACTION_BUTTONS } from "@/mocks/ActionButtons.data";

// 임시 추천 질문 데이터
const SUGGEST_CHIPS = [
  { variant: 1, label: "올해 미디어 디자인 트랙 졸업 요건이 뭐야?" },
  { variant: 2, label: "세미나실 이용하려면 어떻게 해?" },
  { variant: 3, label: "학점은행제가 뭐야?" },
] as const;

const MainPage = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6.25">
      <section className="flex flex-col gap-2 items-center">
        <p className="text-h4-b max-laptop:text-h5-b text-header-blue">
          HANSUNG AI ASSISTANT
        </p>
        <p className="text-h1-b max-laptop:text-h2-b text-body">
          한성대 AI 워크스페이스
        </p>
      </section>
      <p className="text-r-28 max-laptop:text-r-22 text-body mt-7.75 max-laptop:mt-5 mb-5.75 max-laptop:mb-4 animate-dissolve">
        안녕하세요, 무엇을 도와드릴까요?
      </p>

      <section className="flex gap-6">
        {SUGGEST_CHIPS.map(({ variant, label }) => (
          <SuggestChip key={variant} variant={variant} label={label} />
        ))}
      </section>

      <div className="w-full main-chat-pl main-chat-pr">
        <ChatInput />
      </div>

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
    </div>
  );
};

export default MainPage;
