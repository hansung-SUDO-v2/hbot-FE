import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useInitialMessage = (onSubmit: (text: string) => void) => {
  const { state, pathname } = useLocation();
  const navigate = useNavigate();
  const submittedRef = useRef(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 마운트 시 한 번만 실행
  useEffect(() => {
    if (state?.initialMessage && !submittedRef.current) {
      submittedRef.current = true;
      navigate(pathname, { replace: true, state: null });
      onSubmit(state.initialMessage);
    }
  }, []);
};
