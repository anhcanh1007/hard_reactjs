import axios, { AxiosError } from "axios";
import { useSearchParams } from "react-router-dom";

// hàm này dùng để lấy paramstừ url
export const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries([...searchParams]);
  return searchParamsObj;
};

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}
