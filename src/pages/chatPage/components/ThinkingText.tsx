const THINKING_TEXT = "답변 생성중...";
const CHARS = THINKING_TEXT.split("");
const STAGGER_MS = 80;

const ThinkingText = () => (
  <p className="text-r-20 max-mobile:text-mb-r text-header-blue">
    {CHARS.map((char, i) => (
      <span
        // biome-ignore lint/suspicious/noArrayIndexKey: 고정 문자열, 순서 변경 없음
        key={`${char}-${i}`}
        className="inline-block animate-thinking-char"
        style={{ animationDelay: `${i * STAGGER_MS}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </p>
);

export default ThinkingText;
