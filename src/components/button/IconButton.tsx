import clsx from "clsx";
import type React from "react";

type IconButtonProps = React.HTMLAttributes<HTMLElement> & {
  as?: "button" | "div" | "span"; // 렌더링할 태그
  alt: string;
  size?: number;
  className?: string;
} & (
    | { icon: React.FC<React.SVGProps<SVGSVGElement>>; src?: never }
    | { src: string; icon?: never }
  );

const IconButton = ({
  as: Component = "button",
  src,
  icon: Icon,
  alt,
  size = 24,
  className = "",
  ...props
}: IconButtonProps) => {
  return (
    <Component
      // Component가 button일 때만 type="button" 속성 부여
      {...(Component === "button" ? { type: "button" } : {})}
      className={clsx(
        "flex items-center justify-center cursor-pointer active:scale-[0.94] transition-transform duration-75 ease-out shrink-0",
        className
      )}
      aria-label={alt}
      {...props}
    >
      {Icon ? (
        <Icon width={size} height={size} />
      ) : (
        <img
          src={src}
          alt={alt}
          style={{ width: size, height: size }}
          className="object-contain"
        />
      )}
    </Component>
  );
};

export default IconButton;
