import SuggestChip from "./SuggestChip";
import { useIsMobile } from "@/hooks/useIsMobile";

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

  const topChips = SUGGEST_CHIPS.slice(0, 3);
  const bottomChips = SUGGEST_CHIPS.slice(3, 6);

  if (isMobile) {
    return (
      <div className="w-full overflow-hidden flex flex-col gap-4 py-4">
        <div className="flex w-max animate-marquee gap-4 pr-4 hover:[animation-play-state:paused]">
          {topChips.map(({ variant, label }) => (
            <SuggestChip
              key={`top-first-${variant}`}
              variant={variant}
              label={label}
            />
          ))}
          {topChips.map(({ variant, label }) => (
            <SuggestChip
              key={`top-second-${variant}`}
              variant={variant}
              label={label}
            />
          ))}
        </div>
        <div className="flex w-max animate-marquee gap-4 pr-4 hover:[animation-play-state:paused]">
          {bottomChips.map(({ variant, label }) => (
            <SuggestChip
              key={`bottom-first-${variant}`}
              variant={variant}
              label={label}
            />
          ))}
          {bottomChips.map(({ variant, label }) => (
            <SuggestChip
              key={`bottom-second-${variant}`}
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
