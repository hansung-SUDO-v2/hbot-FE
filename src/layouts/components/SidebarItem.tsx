import IconButton from "@components/IconButton";

interface SidebarItemProps {
  icon: string;
  label: string;
  isExpanded: boolean;
  onClick?: () => void;
  rightElement?: React.ReactNode;
  className?: string;
}

const SidebarItem = ({
  icon,
  label,
  isExpanded,
  onClick,
  rightElement,
  className = "",
}: SidebarItemProps) => {
  return (
    <div
      className={`
        relative flex items-center w-full h-12.5 rounded-[9px] transition-all duration-200 justify-start
        ${isExpanded ? "px-3.5" : "px-0"} ${className}
      `}
    >
      {onClick && (
        <button
          type="button"
          onClick={onClick}
          className="absolute inset-0 w-full h-full rounded-[9px] cursor-pointer outline-none border-none bg-transparent hover:bg-si-hover hover:ring-1 hover:ring-si-border focus-visible:ring-1 focus-visible:ring-si-border active:bg-si-active active:scale-95 transition-all"
          aria-label={label}
        />
      )}

      <div
        className={`flex items-center w-full pointer-events-none z-10 ${isExpanded ? "gap-2" : ""}`}
      >
        <IconButton src={icon} alt={label} className="p-0" />

        {isExpanded && (
          <div className="flex items-center justify-between w-full animate-fadeIn">
            <span className="text-h5-r text-chat-text whitespace-nowrap">
              {label}
            </span>
            {rightElement && (
              <div className="ml-auto pointer-events-auto">{rightElement}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarItem;
