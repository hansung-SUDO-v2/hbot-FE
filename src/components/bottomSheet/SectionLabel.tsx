import clsx from "clsx";

interface SectionLabelProps {
  label: string;
  className?: string;
}

const SectionLabel = ({ label, className }: SectionLabelProps) => (
  <div className={clsx("flex items-center gap-2", className)}>
    <span className="text-h5-m text-list shrink-0">{label}</span>
  </div>
);

export default SectionLabel;
