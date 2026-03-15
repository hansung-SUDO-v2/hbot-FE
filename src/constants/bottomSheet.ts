import IcAttach from "@/assets/icons/chat/attach-file-icon.svg?react";
import IcCall from "@/assets/icons/chat/bottomSheet/call-icon.svg?react";
import IcCamera from "@/assets/icons/chat/bottomSheet/camera_alt-icon.svg?react";
import IcChromeReader from "@/assets/icons/chat/bottomSheet/chrome_reader_mode-icon.svg?react";
import IcImage from "@/assets/icons/chat/bottomSheet/image-icon.svg?react";
import IcMail from "@/assets/icons/chat/bottomSheet/mail_outline-icon.svg?react";
import IcSchool from "@/assets/icons/chat/bottomSheet/school-icon.svg?react";
import IcShare from "@/assets/icons/chat/bottomSheet/share-icon.svg?react";
import image1 from "@/assets/images/bottomSheet/image1.webp";
import image2 from "@/assets/images/bottomSheet/image2.webp";

export const MEDIA_ITEMS = [
  { icon: IcCamera, label: "카메라" },
  { icon: IcImage, label: "사진" },
] as const;

export const CONTENTS_ITEMS = [
  { icon: IcSchool, label: "학사 일정" },
  { icon: IcMail, label: "메일 작성" },
  { icon: IcChromeReader, label: "메모지에 추가" },
  { icon: IcCall, label: "문의하기" },
] as const;

export const FUNCTION_ITEMS = [
  { icon: IcAttach, label: "파일 추가" },
  { icon: IcShare, label: "공유하기" },
] as const;

export const MOCK_GALLERY_IMAGES = [
  { id: "gallery-1", src: image1 },
  { id: "gallery-2", src: image2 },
  { id: "gallery-3", src: image1 },
  { id: "gallery-4", src: image2 },
  { id: "gallery-5", src: image1 },
] as const;

export const MENU_SECTIONS = [
  { label: "contents", items: CONTENTS_ITEMS, className: "mt-[1.63rem]" },
  { label: "function", items: FUNCTION_ITEMS, className: "mt-[1.44rem]" },
] as const;
