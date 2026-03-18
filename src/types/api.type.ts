type ApiBase = {
  isSuccess: boolean;
  code: string;
  httpStatus: number;
  message: string;
  timeStamp: string;
};

// 항상 데이터가 있는 응답
export interface ApiEnvelope<T> extends ApiBase {
  data: T;
}

// 데이터가 없을 수도 있는 응답
export interface ApiEnvelopeNullable<T> extends ApiBase {
  data: T | null;
}

// 페이지네이션 구조
export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  size: number;
}
