import type { AxiosInstance } from "axios";
import axios from "axios";
import {
  onRequestFulfilled,
  onResponseFulfilled,
  onResponseRejected,
} from "./interceptors";

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("VITE_API_BASE_URL is not set");
}

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
  baseURL: BASE_URL,
});

// 인터셉터 등록
[defaultInstance, multiInstance].forEach((instance) => {
  instance.interceptors.request.use(onRequestFulfilled);
  instance.interceptors.response.use(onResponseFulfilled, onResponseRejected);
});
