import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 460;
const QUERY = `(max-width: ${MOBILE_BREAKPOINT}px)`;

const subscribe = (callback: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false;

export const useIsMobile = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
