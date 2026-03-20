import { useIsMobile } from "@/hooks/useIsMobile";
import { useVisualViewport } from "@/hooks/useVisualViewport";
import SuggestChip from "./SuggestChip";

const SUGGEST_CHIPS = [
  { variant: 1, label: "올해 미디어 디자인 트랙 졸업 요건이 뭐야?" },
  { variant: 2, label: "세미나실 이용하려면 어떻게 해?" },
  { variant: 3, label: "학점은행제가 뭐야?" },
  { variant: 4, label: "도서관 운영 시간 언제까지야?" },
  { variant: 5, label: "이번주 학생식당 메뉴 알려줘" },
  { variant: 6, label: "셔틀버스 시간표 보여줘" },
] as const;

interface SuggestChipGroupProps {
  onChipClick: (label: string) => void;
}

const SuggestChipGroup = ({ onChipClick }: SuggestChipGroupProps) => {
  const isMobile = useIsMobile();
  const { isKeyboardOpen } = useVisualViewport(isMobile);

  const topChips = SUGGEST_CHIPS.slice(0, 3);
  const bottomChips = SUGGEST_CHIPS.slice(3, 6);

  if (isMobile) {
    return (
      <div className="w-full overflow-hidden flex flex-col gap-4 py-4 transition-all duration-500">
        {isKeyboardOpen ? (
          /* 키보드 활성 시: 6개 1줄 마키 애니메이션 */
          <div className="flex w-max animate-marquee gap-4 px-4">
            {[...SUGGEST_CHIPS, ...SUGGEST_CHIPS].map(
              ({ variant, label }, index) => (
                <div
                  key={`kb-${variant}-${index < SUGGEST_CHIPS.length ? "orig" : "clone"}`}
                  className="shrink-0"
                >
                  <SuggestChip
                    variant={variant}
                    label={label}
                    onClick={() => onChipClick(label)}
                  />
                </div>
              )
            )}
          </div>
        ) : (
          /* 평상시: 3개씩 2줄 마키 애니메이션 */
          <>
            <div className="flex w-max animate-marquee gap-4 px-4">
              {[...topChips, ...topChips].map(({ variant, label }, index) => (
                <div
                  key={`top-${variant}-${index < topChips.length ? "orig" : "clone"}`}
                  className="shrink-0"
                >
                  <SuggestChip
                    variant={variant}
                    label={label}
                    onClick={() => onChipClick(label)}
                  />
                </div>
              ))}
            </div>
            <div className="flex w-max animate-marquee gap-4 px-4">
              {[...bottomChips, ...bottomChips].map(
                ({ variant, label }, index) => (
                  <div
                    key={`bot-${variant}-${index < bottomChips.length ? "orig" : "clone"}`}
                    className="shrink-0"
                  >
                    <SuggestChip
                      variant={variant}
                      label={label}
                      onClick={() => onChipClick(label)}
                    />
                  </div>
                )
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <section className="flex gap-6 max-laptop:gap-4 max-tablet:gap-3">
      {topChips.map(({ variant, label }) => (
        <SuggestChip
          key={variant}
          variant={variant}
          label={label}
          onClick={() => onChipClick(label)}
        />
      ))}
    </section>
  );
};

export default SuggestChipGroup;
