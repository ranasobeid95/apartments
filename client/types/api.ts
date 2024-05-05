export type Method = "POST" | "GET" | "PUT" | "DELETE";

export interface HttpClientParams {
  url: string;
  method?: Method;
  body?: any;
  cookies?: any;
  headers?: any;
  version?: string;
  json?: boolean;
  revalidate?: number;
  query?: string;
  fullUrl?: boolean;
}
export type Status = 0 | 1; //0: error //1: success

export interface ValidationError {
  message: string;
  members?: string[];
}
export interface ErrorDetails {
  code?: string | number;
  message: string;
  details: string;
  validationErrors: ValidationError[];
}

export interface ErrorResponse {
  data: ErrorDetails | null;
  status: number;
}

export interface ResponseBody {
  data: any;
  error: ErrorResponse;
  status: Status;
}
