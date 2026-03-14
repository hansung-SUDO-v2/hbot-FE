type SuggestChipVariant = 1 | 2 | 3;

interface SuggestChipProps {
  label: string;
  variant: SuggestChipVariant;
  onClick?: () => void;
}

const variantStyles: Record<SuggestChipVariant, string> = {
  1: "border-suggest-1 text-suggest-1",
  2: "border-suggest-2 text-suggest-2",
  3: "border-suggest-3 text-suggest-3",
};

const SuggestChip = ({ variant, label, onClick }: SuggestChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center px-6.25 py-[0.83rem] max-laptop:px-5 max-laptop:py-2.75 rounded-3xl shadow-suggest
        border text-h5-r max-laptop:text-h6-r whitespace-nowrap bg-bg-white
        transition-opacity duration-150
        hover:opacity-70 active:scale-95 cursor-pointer ${variantStyles[variant]}
      `}
    >
      {label}
    </button>
  );
};

export default SuggestChip;
