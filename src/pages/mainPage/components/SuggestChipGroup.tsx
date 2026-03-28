import { useIsMobile } from "@/hooks/useIsMobile";
import { useVisualViewport } from "@/hooks/useVisualViewport";
import SuggestChip from "./SuggestChip";

const SUGGEST_CHIPS = [
  {
    id: "suggest-1",
    variant: 1,
    label: "1학기 디자인대학 서면신청 언제야?",
  },
  { id: "suggest-2", variant: 2, label: "1학기 학점교류에 대해 알려줘!" },
  { id: "suggest-3", variant: 3, label: "수강신청 언제야?" },
  { id: "suggest-4", variant: 4, label: "수업평가 우수강좌 알려줘" },
  { id: "suggest-5", variant: 5, label: "상상력교양대학 서면신청 언제야?" },
  { id: "suggest-6", variant: 6, label: "헤이영 어떻게 사용해?" },
] as const;

interface SuggestChipGroupProps {
  onChipClick: (label: string) => void;
}

const SuggestChipGroup = ({ onChipClick }: SuggestChipGroupProps) => {
  const isMobile = useIsMobile();
  const { isKeyboardOpen } = useVisualViewport(isMobile);

  const topChips = SUGGEST_CHIPS.slice(0, 3);
  const bottomChips = SUGGEST_CHIPS.slice(3, 6);

  const renderMarqueeRow = (
    chips: (typeof SUGGEST_CHIPS)[number][],
    rowId: string
  ) => (
    <div className="relative flex w-full overflow-hidden py-1">
      <div className="flex w-max animate-marquee gap-4 px-4 will-change-transform">
        {[...chips, ...chips, ...chips].map((chip, index) => {
          const copyIndex = Math.floor(index / chips.length);
          const uniqueKey = `${rowId}-${chip.id}-copy${copyIndex}`;

          return (
            <div key={uniqueKey} className="shrink-0">
              <SuggestChip
                variant={chip.variant}
                label={chip.label}
                onClick={() => onChipClick(chip.label)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="w-full overflow-hidden flex flex-col gap-4 py-4 transition-all duration-500">
        {isKeyboardOpen ? (
          /* 키보드 활성 시: 6개 1줄 마키 애니메이션 */
          <div key="kb-container" className="animate-fadeIn">
            {renderMarqueeRow([...SUGGEST_CHIPS], "kb")}
          </div>
        ) : (
          /* 평상시: 3개씩 2줄 마키 애니메이션 */
          <div
            key="normal-container"
            className="flex flex-col gap-4 animate-fadeIn"
          >
            {renderMarqueeRow([...topChips], "top")}
            {renderMarqueeRow([...bottomChips], "bot")}
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="flex gap-6 max-laptop:gap-4 max-tablet:gap-3">
      {topChips.map((chip) => (
        <SuggestChip
          key={chip.id}
          variant={chip.variant}
          label={chip.label}
          onClick={() => onChipClick(chip.label)}
        />
      ))}
    </section>
  );
};

export default SuggestChipGroup;
