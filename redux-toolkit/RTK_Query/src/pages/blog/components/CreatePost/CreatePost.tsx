import { Fragment, useEffect, useMemo, useState } from "react";
import type { Post } from "../../../../types/blog.type";
import {
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../../../service/blog.service";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import { isEntityError } from "../../../../ultils/helpers";
import classNames from "classnames";

const initialState: Omit<Post, "id"> = {
  description: "",
  featuredImage: "",
  publishDate: "",
  published: false,
  title: "",
};

type FormError =
  | {
      [key in keyof typeof initialState]: string;
    }
  | null;

export default function CreatePost() {
  const [formData, setFormData] = useState<Omit<Post, "id">>(initialState);
  const postId = useSelector((state: RootState) => state.blogReducer.postId);
  const [addPost, addPostResult] = useAddPostMutation();
  const { data, refetch } = useGetPostQuery(postId, {
    skip: !postId,
    refetchOnMountOrArgChange: 5,
    pollingInterval: 1000,
  });
  const [updatePost, updatePostResult] = useUpdatePostMutation();

  /**
   * Lỗi có thể đến từ 'addPostResult' hoặc 'updatePostResult'
   * Vậy chúng ta sẽ dựa vào điều kiện có postID hoặc không có (tức đang tỏng chế độ edit hay không) để show lỗi
   * Chúng ta cũng không cần thiết phải tạo một state errorForm
   * Vì errorForm phụ thuộc vào 'addPostResult' , 'updatePostResult' và postId có thể dùng một biến để tính toán
   */
  const errorForm: FormError = useMemo(() => {
    const errorResult = postId ? updatePostResult.error : addPostResult.error;
    /**
     * Vì errorForm có thể là FetchBaseQueryError | SerializedError | undefined, mỗi kiểu lại có cấu trúc khác nhau nên chúng ta cần kiểm tra lại cho đúng
     */
    if (isEntityError(errorResult)) {
      /**
       * Có thể ép kiểu một cách an toàn chỗ này, vì chúng ta đã kiểm tra chắc chắn rồi
       * Nếu không muốn ép kiểu thì có thể khai báo cái interface `EntityError` sao cho data.error tương đồng với FormError là được
       */
      return errorResult.data.error as FormError;
    }
    return null;
  }, [postId, updatePostResult, addPostResult]);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (postId) {
        await updatePost({ body: formData, id: postId });
      } else {
        await addPost(formData).unwrap();
      }
      setFormData(initialState);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
        onClick={() => refetch()}
      >
        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          Force Fetch
        </span>
      </button>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Title"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="featuredImage"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Featured Image
        </label>
        <input
          type="text"
          id="featuredImage"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Url image"
          value={formData.featuredImage}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, featuredImage: e.target.value }))
          }
        />
      </div>
      <div className="mb-6">
        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Description
          </label>
          <textarea
            id="description"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            placeholder="Your description..."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          ></textarea>
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="publishDate"
          className="mb-2 block text-sm font-medium  text-gray-900 dark:text-gray-300"
        >
          Publish Date
        </label>
        <input
          type="datetime-local"
          id="publishDate"
          className={classNames(
            "block w-56 rounded-lg border  p-2.5 text-sm  focus:border-blue-500 focus:outline-none focus:ring-blue-500",
            {
              "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-blue-500":
                Boolean(errorForm?.publishDate),
              "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500":
                Boolean(errorForm?.publishDate),
            }
          )}
          placeholder="Title"
          value={formData.publishDate}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, publishDate: e.target.value }))
          }
        />
        {errorForm?.publishDate && (
          <p className="mt-2 text-sm text-red-600">
            <span className="font-medium">Lỗi! </span>
            {errorForm.publishDate}
          </p>
        )}
      </div>
      <div className="mb-6 flex items-center">
        <input
          id="publish"
          type="checkbox"
          className="h-4 w-4 focus:ring-2 focus:ring-blue-500"
          checked={formData.published}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, published: e.target.checked }))
          }
        />
        <label
          htmlFor="publish"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Publish
        </label>
      </div>
      <div>
        {Boolean(!postId) && (
          <button
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
            type="submit"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              Publish Post
            </span>
          </button>
        )}

        {Boolean(postId) && (
          <Fragment>
            <button
              type="submit"
              className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                Update Post
              </span>
            </button>
            <button
              type="reset"
              className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                Cancel
              </span>
            </button>
          </Fragment>
        )}
      </div>
    </form>
  );
}
