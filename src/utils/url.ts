// 주소가 외부 URL(http/https)인지 확인
export const isExternalUrl = (path: string) => {
  return typeof path === "string" && /^(http|https):\/\//.test(path);
};
