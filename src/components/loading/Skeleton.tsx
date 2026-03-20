interface SkeletonProps {
  /* 형태: rect(기본 사각형), circle(원형), text(둥근 모서리 사각형) */
  variant?: "rect" | "circle" | "text";
  className?: string;
}

export const Skeleton = ({
  variant = "rect",
  className = "",
}: SkeletonProps) => {
  const baseStyles = {
    rect: "rounded-md",
    circle: "rounded-full",
    text: "rounded",
  };

  return (
    <div
      className={`
        animate-pulse bg-gray-200 
        ${baseStyles[variant]} 
        ${className}
      `}
    />
  );
};
