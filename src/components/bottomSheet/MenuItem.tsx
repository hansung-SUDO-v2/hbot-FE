import type { FC, SVGProps } from "react";

interface MenuItemProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
}

const MenuItem = ({ icon: Icon, label }: MenuItemProps) => (
  <button
    type="button"
    className="flex items-center gap-4 px-2 py-[0.81rem] rounded-lg cursor-pointer hover:bg-bg transition-colors"
  >
    <Icon className="w-6 h-6 shrink-0" />
    <span className="text-mb-r text-body">{label}</span>
  </button>
);

export default MenuItem;
