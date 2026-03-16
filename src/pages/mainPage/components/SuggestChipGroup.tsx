import SuggestChip from "./SuggestChip";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useVisualViewport } from "@/hooks/useVisualViewport";

// 임시 추천 문장 데이터
const SUGGEST_CHIPS = [
  { variant: 1, label: "올해 미디어 디자인 트랙 졸업 요건이 뭐야?" },
  { variant: 2, label: "세미나실 이용하려면 어떻게 해?" },
  { variant: 3, label: "학점은행제가 뭐야?" },
  { variant: 4, label: "도서관 운영 시간 언제까지야?" },
  { variant: 5, label: "이번주 학생식당 메뉴 알려줘" },
  { variant: 6, label: "셔틀버스 시간표 보여줘" },
] as const;

const SuggestChipGroup = () => {
  const isMobile = useIsMobile();
  const { isKeyboardOpen } = useVisualViewport(isMobile);

  const topChips = SUGGEST_CHIPS.slice(0, 3);
  const bottomChips = SUGGEST_CHIPS.slice(3, 6);

  if (isMobile) {
    // 키보드가 올라왔을 때: 6개 1줄
    if (isKeyboardOpen) {
      return (
        <div className="w-full overflow-x-auto no-scrollbar flex gap-3 px-4 py-2">
          {SUGGEST_CHIPS.map(({ variant, label }) => (
            <div key={`kb-${variant}`} className="whitespace-nowrap shrink-0">
              <SuggestChip variant={variant} label={label} />
            </div>
          ))}
        </div>
      );
    }

    // 모바일: 3개씩 2줄 마키 애니메이션
    return (
      <div className="w-full overflow-hidden flex flex-col gap-4 py-4">
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {topChips.map(({ variant, label }) => (
            <SuggestChip
              key={`top-f-${variant}`}
              variant={variant}
              label={label}
            />
          ))}
          {topChips.map(({ variant, label }) => (
            <SuggestChip
              key={`top-s-${variant}`}
              variant={variant}
              label={label}
            />
          ))}
        </div>
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {bottomChips.map(({ variant, label }) => (
            <SuggestChip
              key={`bot-f-${variant}`}
              variant={variant}
              label={label}
            />
          ))}
          {bottomChips.map(({ variant, label }) => (
            <SuggestChip
              key={`bot-s-${variant}`}
              variant={variant}
              label={label}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="flex gap-6 max-laptop:gap-4 max-tablet:gap-3">
      {topChips.map(({ variant, label }) => (
        <SuggestChip key={variant} variant={variant} label={label} />
      ))}
    </section>
  );
};

export default SuggestChipGroup;
