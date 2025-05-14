import {
  createAction,
  createReducer,
  createSlice,
  current,
  nanoid,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Post } from "../../types/blog.type";
import { initialPost } from "../../constants/blog";

interface BlogState {
  postList: Post[];
  editingPost: Post | null;
}
const initialState: BlogState = {
  postList: initialPost,
  editingPost: null,
};

// export const addPost = createAction(
//   "blog/addPost",
//   function (post: Omit<Post, "id">) {
//     //cú pháp Omit dùng để sử dụng kiểu dữ liệu mà mình truyền vào và tham số id chính là kiểu dữ liệu đó loại bỏ đi id
//     return {
//       payload: {
//         ...post,
//         id: nanoid(),
//       },
//     };
//   }
// );
// export const deletePost = createAction<string>("blog/deletePost");
// export const editingPost = createAction<string>("/blog/editingPost");
// export const cancel = createAction("blog/cancel");
// export const updatingPost = createAction<Post>("blog/updatingPost");

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const foundIndex = state.postList.findIndex((post) => post.id === postId);
      if (foundIndex !== -1) {
        state.postList.splice(foundIndex, 1);
      }
    },
    editingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const foundPost =
        state.postList.find((post) => post.id === postId) || null;
      state.editingPost = foundPost;
    },
    cancel: (state) => {
      state.editingPost = null;
    },
    updatingPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id;
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload;
          return true;
        }
        return false;
      });
      state.editingPost = null;
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const post = action.payload;
        state.postList.push(post);
      },
      prepare: (post: Omit<Post, "id">) => {
        //cú pháp Omit dùng để sử dụng kiểu dữ liệu mà mình truyền vào và tham số id chính là kiểu dữ liệu đó loại bỏ đi id
        return {
          payload: {
            ...post,
            id: nanoid(),
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes("cancel"),
        (state, action) => {
          console.log(current(state));
        }
      )
      .addDefaultCase((state, action) =>
        console.log(`action : ${action.type}`, current(state))
      );
  },
});

export const { addPost, editingPost, deletePost, updatingPost, cancel } =
  blogSlice.actions;

const blogReducer = blogSlice.reducer;
export default blogReducer;

// export const blogReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addPost, (state, action) => {
//       state.postList.push(action.payload);
//     })
//     .addCase(deletePost, (state, action) => {
//       const postId = action.payload;
//       const foundIndex = state.postList.findIndex((post) => post.id === postId);
//       if (foundIndex !== -1) {
//         state.postList.splice(foundIndex, 1);
//       }
//     })
//     .addCase(editingPost, (state, action) => {
//       const postId = action.payload;
//       const foundPost =
//         state.postList.find((post) => post.id === postId) || null;
//       state.editingPost = foundPost;
//     })
//     .addCase(cancel, (state) => {
//       state.editingPost = null;
//     })
//     .addCase(updatingPost, (state, action) => {
//       const postId = action.payload.id;
//       state.postList.some((post, index) => {
//         if (post.id === postId) {
//           state.postList[index] = action.payload;
//           return true;
//         }
//         return false;
//       });
//       state.editingPost = null;
//     })
//     .addMatcher(
//       (action) => action.type.includes("cancel"),
//       (state, action) => {
//         console.log(current(state));
//       }
//     );
// .addDefaultCase((action, state) => {
//   console.log("anh canh");
// });
// });
