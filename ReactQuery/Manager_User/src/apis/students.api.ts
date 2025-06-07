import type { Students } from "../types/students.type";
import http from "../ultils/http";

export const getStudents = (page: number | string, limit: number | string) => {
  return http.get<Students>("students", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};
