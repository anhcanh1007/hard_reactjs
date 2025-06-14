import { Link } from "react-router-dom";
import {
  deleteStudent,
  getStudent,
  getStudents,
} from "../../apis/students.api";
import type { Students } from "../../types/students.type";
import { useQueryParams } from "../../ultils/hookquery";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import classNames from "classnames";
import { Fragment } from "react/jsx-runtime";
import { toast } from "react-toastify";
const LIMIT = 10;
export default function Students() {
  // const [students, setStudents] = useState<Students>([]);
  // const [isLoading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setLoading(true);
  //   getStudents(1, 10)
  //     .then((res) => setStudents(res.data))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  const queryClient = useQueryClient();

  const getParams: { page?: string } = useQueryParams();
  const page = Number(getParams.page) || 1;
  const studentQueryRes = useQuery({
    queryKey: ["students", page],
    queryFn: () => getStudents(page, LIMIT),
  });
  const totalStudents =
    Number(studentQueryRes.data?.headers["x-total-count"]) || 0;
  const totalPage = Math.ceil(totalStudents / LIMIT);

  const deleteStudentQuery = useMutation({
    mutationFn: (id: string | number) => {
      return deleteStudent(id);
    },
    onSuccess: (_, id) => {
      toast.success(`Delete thanh cong voi id la ${id}!`);
      queryClient.invalidateQueries({ queryKey: ["students", page] }); //nó được sử dụng để sau khi xóa một item thfi ngay lập tức gọi lại api getStudents
    },
  });

  const handleDelete = (id: number) => {
    deleteStudentQuery.mutate(id);
  };
  const handlePrefetchStudent = (id: number) => {
    //nó có chức năng khi hover chuột vào vị trí tr thì nó sẽ fetch api trước khi nhấp vào, và khi nhấp vao api đã có sẵn data nên không fetch nữa => tăng trải nhigệm người dùng
    queryClient.prefetchQuery({
      queryKey: ["student", String(id)],
      queryFn: () => getStudent(id),
      staleTime: 10 * 1000,
    });
  };

  //Cancel api => hủy không gọi nữa
  const handleCancelApi = () => {
    queryClient.cancelQueries({ queryKey: ["students"] });
  };

  // Refresh lại api
  const refreshApi = () => {
    studentQueryRes.refetch();
  };
  return (
    <div>
      <h1 className="text-lg">Students</h1>
      <button
        className="bg-red-500 px-2 py-4 text-white rounded-2xl"
        onClick={() => handleCancelApi()}
      >
        Cancel Api
      </button>
      <button
        className="bg-red-500 px-2 py-4 text-white rounded-2xl"
        onClick={() => refreshApi()}
      >
        Refresh Api
      </button>
      <div className="mt-6">
        <Link
          to="/students/add"
          className=" rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
        >
          Add Student
        </Link>
      </div>
      {studentQueryRes.isLoading && (
        <div role="status" className="mt-6 animate-pulse">
          <div className="mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!studentQueryRes.isLoading && (
        <Fragment>
          <div className="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    #
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Avatar
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentQueryRes.data?.data.map((student) => (
                  <tr
                    key={student.id}
                    onMouseEnter={() => handlePrefetchStudent(student.id)}
                    className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                  >
                    <td className="py-4 px-6">{student.id}</td>
                    <td className="py-4 px-6">
                      <img
                        src={student.avatar}
                        alt="student"
                        className="h-5 w-5"
                      />
                    </td>
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                    >
                      {student.last_name}
                    </th>
                    <td className="py-4 px-6">{student.email}</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to={`/students/${student.id}`}
                        className="mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="font-medium text-red-600 dark:text-red-500"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-center">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px">
                <li>
                  {page === 1 ? (
                    <span className="cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Previous
                    </span>
                  ) : (
                    <Link
                      className="rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
                      to={`/students?page=${page - 1}`}
                    >
                      Previous
                    </Link>
                  )}
                </li>

                {Array(totalPage)
                  .fill(0)
                  .map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = page === pageNumber;
                    return (
                      <li key={index}>
                        <Link
                          className={classNames(
                            `border border-gray-300 py-2 px-3 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700`,
                            {
                              "bg-gray-100 text-gray-700": isActive,
                              "bg-white": !isActive,
                            }
                          )}
                          to={`/students?page=${pageNumber}`}
                        >
                          {pageNumber}
                        </Link>
                      </li>
                    );
                  })}

                <li>
                  {page === totalPage ? (
                    <span className="cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Next
                    </span>
                  ) : (
                    <Link
                      className="rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
                      to={`/students?page=${page + 1}`}
                    >
                      Next
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </Fragment>
      )}
    </div>
  );
}
