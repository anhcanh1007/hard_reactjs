import type { Student, Students } from "../types/students.type";
import http from "../ultils/http";

export const getStudents = (page: number | string, limit: number | string) => {
  return http.get<Students>("students", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

export const addStudent = (student: Omit<Student, "id">) =>
  http.post<Student>("students", student);
export const getStudent = (id: number | string) =>
  http.get<Student>(`students/${id}`);

export const updateStudent = (id: string | number, student: Student) =>
  http.put<Student>(`students/${id}`, student);

export const deleteStudent = (id: string | number) => {
  return http.delete<"">(`students/${id}`);
};
