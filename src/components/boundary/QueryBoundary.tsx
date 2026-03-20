import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import Spinner from "../loading/Spinner";

interface QueryBoundaryProps {
  children: ReactNode;
  loadingFallback?: ReactNode;
}

const QueryBoundary = ({ children, loadingFallback }: QueryBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <Suspense fallback={loadingFallback ?? <Spinner />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default QueryBoundary;
