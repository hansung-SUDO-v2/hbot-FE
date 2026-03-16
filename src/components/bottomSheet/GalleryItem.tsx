import clsx from "clsx";
import IcSelect from "@/assets/icons/chat/bottomSheet/select-icon.svg?react";

interface GalleryItemProps {
  src: string;
  index: number;
  selected: boolean;
  onToggle: () => void;
}

const GalleryItem = ({ src, index, selected, onToggle }: GalleryItemProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="relative w-24 h-24 rounded-xl shrink-0 overflow-hidden"
  >
    <img
      src={src}
      alt={`갤러리 ${index + 1}`}
      className="w-full h-full object-cover"
    />
    <IcSelect
      className={clsx(
        "absolute top-2 right-2 w-6 h-6",
        selected && "[&_circle:last-child]:fill-white"
      )}
    />
  </button>
);

export default GalleryItem;
