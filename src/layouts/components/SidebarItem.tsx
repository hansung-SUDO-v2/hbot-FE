import IconButton from "@components/IconButton";

interface SidebarItemProps {
  icon: string;
  label: string;
  isExpanded: boolean;
  onClick?: () => void;
  active?: boolean;
  rightElement?: React.ReactNode;
}

const SidebarItem = ({
  icon,
  label,
  isExpanded,
  onClick,
  active,
  rightElement,
}: SidebarItemProps) => {
  return (
    <div
      className={`
        relative flex items-center w-full h-12.5 rounded-[9px] transition-all duration-200 justify-start
        ${active ? "bg-[#ffffff85] ring-1 ring-[#c1d6f3]" : "bg-transparent"}
        ${isExpanded ? "px-3.5" : "px-0"}
      `}
    >
      {onClick && (
        <button
          type="button"
          onClick={onClick}
          className="absolute inset-0 w-full h-full rounded-[9px] cursor-pointer outline-none border-none bg-transparent hover:bg-[#ffffff85] hover:ring-1 hover:ring-[#c1d6f3] focus-visible:ring-1 focus-visible:ring-[#c1d6f3] active:scale-[0.96] transition-all"
          aria-label={label}
        />
      )}

      <div
        className={`flex items-center w-full pointer-events-none z-10 ${isExpanded ? "gap-4" : ""}`}
      >
        <IconButton src={icon} alt={label} className="p-0" />

        {isExpanded && (
          <div className="flex items-center justify-between w-full animate-fadeIn">
            <span className="text-[15px] font-medium text-gray-700 whitespace-nowrap">
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
