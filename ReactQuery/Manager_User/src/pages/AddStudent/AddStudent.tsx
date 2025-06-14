import { useEffect, useMemo, useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import type { Student } from "../../types/students.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addStudent, getStudent, updateStudent } from "../../apis/students.api";
import { isAxiosError } from "../../ultils/hookquery";
import { toast } from "react-toastify";

type FormType = Omit<Student, "id">;
const initialState: FormType = {
  avatar: "",
  btc_address: "",
  country: "",
  email: "",
  first_name: "",
  gender: "other",
  last_name: "",
};

type FormError =
  | {
      [key in keyof FormType]: string;
    }
  | null;
const gender = {
  male: "Male",
  female: "Female",
  other: "Other",
};
export default function AddStudent() {
  const addMatch = useMatch("/students/add");
  const isMode = Boolean(addMatch);
  const [formState, setFormState] = useState<FormType>(initialState);
  const queryClient = useQueryClient(); //sử dụng nó để cập nhật data sau khi update bằng cách gọi setQueryData

  const addStudentQuery = useMutation({
    mutationFn: (body: FormType) => {
      return addStudent(body);
    },
  });

  const { id } = useParams();

  const updateStudentQuery = useMutation({
    mutationFn: (_) => {
      return updateStudent(id as string, formState as Student);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["student", id], data); //sử dụng nó để cập nhật data sau khi update
    },
  });

  const studentResApi = useQuery({
    queryKey: ["student", id],
    queryFn: () => {
      return getStudent(id as string).then((res) => res.data);
    },
    enabled: id !== undefined,
    // staleTime: 1000 * 10,
  });
  useEffect(() => {
    if (studentResApi.isSuccess && studentResApi.data) {
      setFormState(studentResApi.data);
    }
  }, [studentResApi.data, studentResApi.isSuccess]);

  const errorForm: FormError = useMemo(() => {
    const error = isMode ? addStudentQuery.error : updateStudentQuery.error;
    if (
      isAxiosError<{ error: FormError }>(error) &&
      error.response?.status === 422
    ) {
      return error.response.data.error;
    }
    return null;
  }, [addStudentQuery.error, updateStudentQuery.error, isMode]);

  const handleChange =
    (name: keyof FormType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [name]: e.target.value }));
      if (addStudentQuery.data || addStudentQuery.error) {
        // cho nay nhan data hoac error tu mutation de check neu co thi reset => clean ux
        addStudentQuery.reset();
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isMode) {
      // cach 1 : khong dung async/await
      addStudentQuery.mutate(formState, {
        onSuccess: () => {
          setFormState(initialState);
          toast.success("Add thanh cong!");
        },
      });
    } else {
      updateStudentQuery.mutate(undefined, {
        onSuccess: () => {
          toast.success("Update thanh cong!");
        },
      });
    }

    // cach 2
    // try {
    //   await mutateAsync(formState);
    //   setFormState(initialState);
    // } catch (error) {
    //   console.log(error);
    // }
    //  dung de reset form sau khi submit
    console.log(formState);
  };

  return (
    <div>
      <h1 className="text-lg">{isMode ? "Add" : "Edit"} Student</h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
            placeholder=" "
            required
            value={formState.email}
            onChange={handleChange("email")}
          />
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Email address
          </label>
          {errorForm && (
            <p className="text-red-600">
              <span className="font-bold">Loi: </span>
              {errorForm.email}
            </p>
          )}
        </div>

        <div className="group relative z-0 mb-6 w-full">
          <div>
            <div>
              <div className="mb-4 flex items-center">
                <input
                  id="gender-1"
                  type="radio"
                  name="gender"
                  value={gender.male}
                  checked={formState.gender === gender.male}
                  onChange={handleChange("gender")}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="gender-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  defaultChecked
                  id="gender-2"
                  type="radio"
                  name="gender"
                  value={gender.female}
                  checked={formState.gender === gender.female}
                  onChange={handleChange("gender")}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="gender-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
              </div>
              <div className="flex items-center">
                <input
                  defaultChecked
                  id="gender-3"
                  type="radio"
                  name="gender"
                  value={gender.other}
                  checked={formState.gender === gender.other}
                  onChange={handleChange("gender")}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="gender-3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="text"
            name="country"
            id="country"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
            placeholder=" "
            value={formState.country}
            onChange={handleChange("country")}
            required
          />
          <label
            htmlFor="country"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Country
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="tel"
              name="first_name"
              id="first_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
              placeholder=" "
              required
              value={formState.first_name}
              onChange={handleChange("first_name")}
            />
            <label
              htmlFor="first_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              First Name
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
              placeholder=" "
              required
              value={formState.last_name}
              onChange={handleChange("last_name")}
            />
            <label
              htmlFor="last_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Last Name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="avatar"
              id="avatar"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
              placeholder=" "
              required
              value={formState.avatar}
              onChange={handleChange("avatar")}
            />
            <label
              htmlFor="avatar"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Avatar Base64
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="btc_address"
              id="btc_address"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
              placeholder=" "
              required
              value={formState.btc_address}
              onChange={handleChange("btc_address")}
            />
            <label
              htmlFor="btc_address"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              BTC Address
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
