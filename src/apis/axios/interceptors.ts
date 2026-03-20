import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// A. 요청 핸들러
export const onRequestFulfilled = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  /* authStore 구현 시 주석 해제
  const accessToken = useAuthStore.getState().accessToken; 
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  */
  return config;
};

// B. 응답 핸들러 (성공)
export const onResponseFulfilled = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// C. 응답 에러 핸들러
export const onResponseRejected = (error: AxiosError): Promise<never> => {
  if (error.response?.status === 401) {
    console.warn("인증이 만료되었습니다.");
    // logout() 로직 호출
  }
  return Promise.reject(error);
};
