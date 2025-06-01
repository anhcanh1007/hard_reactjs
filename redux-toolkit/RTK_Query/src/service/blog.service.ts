import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../types/blog.type";
import { CustomError } from "../ultils/helpers";

// Nếu bên slice chúng ta dùng createSlice để tạo slice thì bên RTK query dùng createApi
// Với createApi chúng ta gọi là slice api
// Chúng ta sẽ khai báo baseUrl và các endpoints

// baseQuery được dùng cho mỗi endpoint để fetch api

// fetchBaseQuery là một function nhỏ được xây dựng trên fetch API
// Nó không thay thế hoàn toàn được Axios nhưng sẽ giải quyết được hầu hết các vấn đề của bạn
// Chúng ta có thể dùng axios thay thế cũng được, nhưng để sau nhé

// endPoints là tập hợp những method giúp get, post, put, delete... tương tác với server
// Khi khai báo endPoints nó sẽ sinh ra cho chúng ta các hook tương ứng để dùng trong component
// endpoints có 2 kiểu là query và mutation.
// Query: Thường dùng cho GET
// Mutation: Thường dùng cho các trường hợp thay đổi dữ liệu trên server như POST, PUT, DELETE

/**
 * Mô hình sync dữ liệu danh sách bài post dưới local sau khi thêm 1 bài post
 * Thường sẽ có 2 cách tiếp cận
 * Cách 1:
 * 1. Sau khi thêm 1 bài post thì server sẽ trả về data của bài post đó
 * 2. Chúng ta sẽ tiến hành lấy data đó thêm vào state redux
 * 3. Lúc này UI chúng ta sẽ được sync
 * ===> Rủi ro cách này là nếu khi gọi request add post mà server trả về data không đủ các field đểchúng ta hiển thị thì sẽ gặp lội Nếu có nhiều người cùng add post thì data sẽ sync thiếu
 *
 * Cách 2: đây là cách thường dùng với RTk Query
 * 1. Sau khi thêm 1 bài post thì server sẽ trả về data của bài post đó
 * 2. Chúng ta sẽ tiến hành fetch lại API get posts để cập nhật state redux
 * 3. Lúc này Ui chúng ta sẽ được sync
 * ==> cách này giúp data dưới local sẽ luôn mới nhất, luôn đồng bộ với server
 */

export const blogApi = createApi({
  reducerPath: "blogApi",
  tagTypes: ["Posts"], // Những kiểu tag cho phép dùng trong blogApi
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (build) => ({
    // generic type theo thứ tự là kiểu dữ liệu trả về và argument
    getPosts: build.query<Post[], void>({
      query: () => "posts", //method không có argument, method này trả về "post" tức khi nó được gọi "post" sẽ được gán lên baseUrl

      /**
       * providesTags có thể là array hoặc callback return array
       * Nếu có bất kỳ một invalidatesTag nào match với providesTags này
       * thì sẽ làm cho getPosts method chạy lại
       * và cập nhật lại danh sách các bài post cũng như các tags phía dưới
       */
      providesTags: (result) => {
        /**
         * Cái callback này sẽ chạy mỗi khi getPosts chạy
         * Mong muốn là sẽ return về một mảng kiểu
         * ```ts
         * interface Tags: {
         *    type: "Posts";
         *    id: string;
         *  }[]
         *```
         * vì thế phải thêm as const vào để báo hiệu type là Read only, không thể mutate
         */
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: "Posts" as const, id })),
            { type: "Posts" as const, id: "LIST" },
          ];
          return final;
        }
        const final = [{ type: "Posts" as const, id: "LIST" }];
        return final;
      },
    }),
    // đây là method nhận vào argument, generictype ở đây theo thứ tự là Post: là kiểu dữ liệu trả về, và Omit<Post, "id"> là kiểu của tham số truyền vào
    addPost: build.mutation<Post, Omit<Post, "id">>({
      query: (body) => {
        try {
          return {
            url: "posts",
            method: "POST",
            body,
          };
        } catch (error: any) {
          throw new CustomError(error.message);
        }
      },
      /**
       * invalidatesTags cung cấp các tag để báo hiệu cho những method nào có providesTags
       * match với nó sẽ bị gọi lại
       * Trong trường hợp này getPosts sẽ chạy lại
       */
      invalidatesTags: (result, error, body) =>
        error ? [] : [{ type: "Posts", id: "LIST" }],
    }),
    getPost: build.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
    updatePost: build.mutation<Post, { id: string; body: Omit<Post, "id"> }>({
      query: (data) => {
        return {
          url: `posts/${data.id}`,
          body: data.body,
          method: "PUT",
        };
      },
      invalidatesTags: (result, error, data) =>
        error ? [] : [{ type: "Posts", id: data.id }],
    }),
    deletePost: build.mutation<{ "": "" }, string>({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = blogApi;
