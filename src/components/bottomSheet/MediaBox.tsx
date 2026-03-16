import type { FC, SVGProps } from "react";

interface MediaBoxProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
}

const MediaBox = ({ icon: Icon, label }: MediaBoxProps) => (
  <button
    type="button"
    className="flex flex-col items-center justify-center gap-1 w-24 h-24 bg-bg rounded-xl shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
  >
    <Icon className="w-6 h-6" />
    <span className="text-mb-r text-body-blue">{label}</span>
  </button>
);

export default MediaBox;
