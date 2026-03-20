import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useNavigation from "@/hooks/useNavigation";

export const useInitialMessage = (onSubmit: (text: string) => void) => {
  const { state, pathname } = useLocation();
  const { goTo } = useNavigation();
  const submittedRef = useRef(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 마운트 시 한 번만 실행
  useEffect(() => {
    if (state?.initialMessage && !submittedRef.current) {
      submittedRef.current = true;
      goTo(pathname, { replace: true, state: null });
      onSubmit(state.initialMessage);
    }
  }, []);
};
