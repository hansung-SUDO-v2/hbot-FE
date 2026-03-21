export const useToolbarActions = (content: string) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.error("클립보드 복사 실패:", error);
    }
  };

  return { handleCopy };
};
