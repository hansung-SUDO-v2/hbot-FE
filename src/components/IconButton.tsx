interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const IconButton = ({
  src,
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
      <img
        src={src}
        alt={alt}
        style={{ width: size, height: size }}
        className="object-contain"
      />
    </button>
  );
};

export default IconButton;
