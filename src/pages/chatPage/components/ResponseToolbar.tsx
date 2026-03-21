import clsx from "clsx";
import IconButton from "@/components/button/IconButton";
import { TOOLBAR_BUTTONS } from "@/constants/chat";

interface ResponseToolbarProps {
  className?: string;
  content: string;
}

const ResponseToolbar = ({ className, content }: ResponseToolbarProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      {TOOLBAR_BUTTONS.map(({ icon, alt }) => (
        <IconButton
          key={alt}
          icon={icon}
          alt={alt}
          size={20}
          {...(alt === "복사" && { onClick: handleCopy })}
        />
      ))}
    </div>
  );
};

export default ResponseToolbar;
