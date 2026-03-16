// 모바일에서 키보드가 올라올 때 변하는 실제 화면 높이와 키보드 활성화 상태를 감지하여 반환하는 훅
import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  const vv = window.visualViewport;
  if (!vv) return () => {};

  const handleUpdate = () => {
    // 인풋 포커스로 인해 브라우저가 레이아웃을 밀어올릴 때 즉시 0으로 고정
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
    callback();
  };

  vv.addEventListener("resize", handleUpdate);
  vv.addEventListener("scroll", handleUpdate);

  // 인풋 포커스 시 발생하는 강제 스크롤 방지
  window.addEventListener("scroll", handleUpdate);

  return () => {
    vv.removeEventListener("resize", handleUpdate);
    vv.removeEventListener("scroll", handleUpdate);
    window.removeEventListener("scroll", handleUpdate);
  };
};

const getSnapshot = () => {
  const vv = window.visualViewport;
  if (!vv) return "100dvh|false";

  if (vv.offsetTop > 0) {
    window.scrollTo(0, 0);
  }

  const height = `${vv.height}px`;
  const isKeyboardOpen = vv.height < window.innerHeight * 0.8;

  return `${height}|${isKeyboardOpen}`;
};

const getServerSnapshot = () => "100dvh|false";

export const useVisualViewport = (isMobile: boolean) => {
  const snapshot = useSyncExternalStore(
    isMobile ? subscribe : () => () => {},
    isMobile ? getSnapshot : getServerSnapshot,
    getServerSnapshot
  );

  const [viewportHeight, isKeyboardOpenStr] = snapshot.split("|");

  return {
    viewportHeight,
    isKeyboardOpen: isKeyboardOpenStr === "true",
  };
};
