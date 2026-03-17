import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

// A. 요청 핸들러
const onRequestFulfilled = (
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

// B. 응답 에러 핸들러
const onResponseRejected = (error: AxiosError): Promise<never> => {
  if (error.response?.status === 401) {
    console.warn("인증이 만료되었습니다.");
    // logout() 로직 호출
  }
  return Promise.reject(error);
};

// --- 인스턴스 생성 ---

// 공통 설정을 위한 인터페이스
const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

// 1. 인증 미필요 인스턴스
export const publicInstance: AxiosInstance = axios.create(axiosConfig);

// 2. 인증 필요 인스턴스 (Default)
export const defaultInstance: AxiosInstance = axios.create(axiosConfig);

// 3. 인증 필요 인스턴스 (Multipart/FormData)
export const multiInstance: AxiosInstance = axios.create({
  ...axiosConfig,
  headers: {},
});

// 인터셉터 등록
[defaultInstance, multiInstance].forEach((instance) => {
  instance.interceptors.request.use(onRequestFulfilled);
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    onResponseRejected
  );
});
