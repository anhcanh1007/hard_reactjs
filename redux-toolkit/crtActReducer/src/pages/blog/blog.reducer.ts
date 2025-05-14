import { createAction, createReducer, current, nanoid } from "@reduxjs/toolkit";
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

export const addPost = createAction(
  "blog/addPost",
  function (post: Omit<Post, "id">) {
    return {
      payload: {
        ...post,
        id: nanoid(),
      },
    };
  }
);
export const deletePost = createAction<string>("blog/deletePost");
export const editingPost = createAction<string>("/blog/editingPost");
export const cancel = createAction("blog/cancel");
export const updatingPost = createAction<Post>("blog/updatingPost");
export const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      state.postList.push(action.payload);
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload;
      const foundIndex = state.postList.findIndex((post) => post.id === postId);
      if (foundIndex !== -1) {
        state.postList.splice(foundIndex, 1);
      }
    })
    .addCase(editingPost, (state, action) => {
      const postId = action.payload;
      const foundPost =
        state.postList.find((post) => post.id === postId) || null;
      state.editingPost = foundPost;
    })
    .addCase(cancel, (state) => {
      state.editingPost = null;
    })
    .addCase(updatingPost, (state, action) => {
      const postId = action.payload.id;
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload;
          return true;
        }
        return false;
      });
      state.editingPost = null;
    })
    .addMatcher(
      (action) => action.type.includes("cancel"),
      (state, action) => {
        console.log(current(state));
      }
    );
  // .addDefaultCase((action, state) => {
  //   console.log("anh canh");
  // });
});
