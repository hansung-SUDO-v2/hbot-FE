import { useRef, useSyncExternalStore } from "react";

const getServerSnapshot = () => "0|false";

export const useVisualViewport = (isMobile: boolean) => {
  const initialHeightRef = useRef(
    typeof window !== "undefined"
      ? (window.visualViewport?.height ?? window.innerHeight)
      : 0
  );

  const stableHeightRef = useRef(initialHeightRef.current);
  const stableOffsetTopRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listenerRef = useRef<(() => void) | null>(null);

  const subscribe = useRef((callback: () => void) => {
    const vv = window.visualViewport;
    if (!vv) return () => {};

    listenerRef.current = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        const height = vv.height;
        if (height && height >= 300) {
          stableHeightRef.current = height;
          stableOffsetTopRef.current = vv.offsetTop ?? 0;
        }
        callback();
      }, 150);
    };

    vv.addEventListener("resize", listenerRef.current);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (listenerRef.current)
        vv.removeEventListener("resize", listenerRef.current);
    };
  }).current;

  const getSnapshot = () => {
    const height = stableHeightRef.current;
    const offsetTop = stableOffsetTopRef.current;
    const isKeyboardOpen = height < initialHeightRef.current * 0.75;
    return `${height}|${isKeyboardOpen}|${offsetTop}`;
  };

  const snapshot = useSyncExternalStore(
    isMobile ? subscribe : () => () => {},
    isMobile ? getSnapshot : getServerSnapshot,
    getServerSnapshot
  );

  const [viewportHeight, isKeyboardOpenStr, offsetTop] = snapshot.split("|");

  return {
    viewportHeight: viewportHeight ? `${viewportHeight}px` : "100dvh",
    isKeyboardOpen: isKeyboardOpenStr === "true",
    offsetTop: offsetTop ? `${offsetTop}px` : "0px",
  };
};
