import type React from "react";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  alt: string;
  size?: number;
  className?: string;
} & (
    | { icon: React.FC<React.SVGProps<SVGSVGElement>>; src?: never }
    | { src: string; icon?: never }
  );

const IconButton = ({
  src,
  icon: Icon,
  alt,
  size = 24,
  className = "",
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={`
        flex items-center justify-center cursor-pointer
        active:scale-[0.94] transition-transform duration-75 ease-out
        shrink-0 ${className}
      `}
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
    </button>
  );
};

export default IconButton;
