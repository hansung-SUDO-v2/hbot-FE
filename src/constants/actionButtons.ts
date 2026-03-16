import type { ActionButtonVariant } from "@/pages/mainPage/components/ActionButton";

interface ActionButtonData {
  variant: ActionButtonVariant;
  label: string;
}

export const ACTION_BUTTONS: ActionButtonData[] = [
  { variant: "school", label: "학사 일정" },
  { variant: "mail", label: "메일 작성" },
  { variant: "memo", label: "메모지에 추가" },
  { variant: "call", label: "문의하기" },
  { variant: "share", label: "공유하기" },
];
