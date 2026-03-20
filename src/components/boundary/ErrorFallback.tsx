import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-body">
      <p className="text-h5-b">오류가 발생했습니다</p>
      <p className="text-m-16 text-description">
        {error instanceof Error
          ? error.message
          : "알 수 없는 오류가 발생했습니다"}
      </p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="px-4 py-2 rounded-lg bg-primary text-bg-white text-m-16 cursor-pointer"
      >
        다시 시도
      </button>
    </div>
  );
};

export default ErrorFallback;
