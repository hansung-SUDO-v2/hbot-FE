import { useState } from "react";
import { Drawer } from "vaul";
import {
  MEDIA_ITEMS,
  MENU_SECTIONS,
  MOCK_GALLERY_IMAGES,
} from "@/constants/bottomSheet";
import { Z_INDEX } from "@/constants/zIndex";
import GalleryItem from "./GalleryItem";
import MediaBox from "./MediaBox";
import MenuItem from "./MenuItem";
import SectionLabel from "./SectionLabel";

interface ChatBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ChatBottomSheet = ({
  open,
  onOpenChange,
}: ChatBottomSheetProps) => {
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());

  const toggleSelect = (id: string) => {
    setSelectedImages((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 bg-black/40"
          style={{ zIndex: Z_INDEX.BS_OVERLAY }}
        />
        <Drawer.Content
          className="fixed bottom-0 left-0 right-0 bg-bg-white rounded-t-[1.25rem] outline-none"
          style={{ zIndex: Z_INDEX.BS_CONTENT }}
        >
          <Drawer.Title className="sr-only">추가 기능</Drawer.Title>
          <div className="px-[1.38rem] pb-6">
            {/* 손잡이 */}
            <div className="flex justify-center pt-3">
              <div className="w-12.5 h-1 rounded-full bg-bs-handle" />
            </div>

            {/* 미디어 섹션 */}
            <div className="mt-7 -mx-[1.38rem] overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 pl-[1.38rem]">
                {MEDIA_ITEMS.map((item) => (
                  <MediaBox
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
                {MOCK_GALLERY_IMAGES.map((image, i) => (
                  <GalleryItem
                    key={image.id}
                    src={image.src}
                    index={i}
                    selected={selectedImages.has(image.id)}
                    onToggle={() => toggleSelect(image.id)}
                  />
                ))}
                <div className="w-[1.38rem] shrink-0" aria-hidden="true" />
              </div>
            </div>

            {/* Contents & Function 섹션 */}
            {MENU_SECTIONS.map((section) => (
              <div key={section.label}>
                <SectionLabel
                  label={section.label}
                  className={section.className}
                />
                <div className="flex flex-col gap-2 mt-2">
                  {section.items.map((item) => (
                    <MenuItem
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
