import { useCallback } from "react";
import type { NavigateOptions } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isExternalUrl } from "@/utils/url";

interface GoToOptions extends NavigateOptions {
  isNewTab?: boolean;
}

const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = useCallback(
    (path: string, options: GoToOptions = {}) => {
      const { isNewTab = false, ...navOptions } = options;

      if (isExternalUrl(path)) {
        if (isNewTab) {
          const newWindow = window.open(path, "_blank", "noopener,noreferrer");
          if (newWindow) newWindow.opener = null;
        } else {
          window.location.href = path;
        }
        return;
      }

      navigate(path, navOptions);
    },
    [navigate]
  );

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return { goTo, goBack };
};

export default useNavigation;
