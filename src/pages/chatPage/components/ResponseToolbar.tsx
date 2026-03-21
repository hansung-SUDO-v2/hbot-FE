import clsx from "clsx";
import IconButton from "@/components/button/IconButton";
import { TOOLBAR_BUTTONS } from "@/constants/chat";
import { useToolbarActions } from "@/pages/chatPage/hooks/useToolbarActions";

interface ResponseToolbarProps {
  className?: string;
  content: string;
}

const ResponseToolbar = ({ className, content }: ResponseToolbarProps) => {
  const { handleCopy } = useToolbarActions(content);

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      {TOOLBAR_BUTTONS.map(({ action, icon, alt }) => (
        <IconButton
          key={action}
          icon={icon}
          alt={alt}
          size={20}
          {...(action === "copy" && { onClick: handleCopy })}
        />
      ))}
    </div>
  );
};

export default ResponseToolbar;
