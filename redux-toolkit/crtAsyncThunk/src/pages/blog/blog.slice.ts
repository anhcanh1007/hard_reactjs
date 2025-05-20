import {
  createAsyncThunk,
  createSlice,
  type AsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { Post } from "../../types/blog.type";
import http from "../../ultils/http";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;
interface BlogState {
  postList: Post[];
  editingPost: Post | null;
  loading: boolean;
  currentRequestId: undefined | string;
}
const initialState: BlogState = {
  postList: [],
  editingPost: null,
  loading: false,
  currentRequestId: undefined,
};

export const getPostList = createAsyncThunk(
  "blog/getPostList",
  async (_, thunkApi) => {
    const respose = await http.get<Post[]>("posts", {
      signal: thunkApi.signal,
    });
    return respose.data;
  }
);

export const addPost = createAsyncThunk(
  "blog/addPost",
  async (body: Omit<Post, "id">, thunkApi) => {
    try {
      const response = await http.post<Post>("posts", body, {
        signal: thunkApi.signal,
      });
      return response.data;
    } catch (error: any) {
      if (error.name === "AxiosError" && error.response.status === 422) {
        return thunkApi.rejectWithValue(error.response.data);
      }
      throw error;
    }
  }
);

export const deletePost = createAsyncThunk(
  "blog/deletePost",
  async (postId: string, thunkApi) => {
    const response = await http.delete<Post>(`posts/${postId}`, {
      signal: thunkApi.signal,
    });
    return response.data;
  }
);

export const updatePost = createAsyncThunk(
  "blog/updatePost",
  async ({ postId, body }: { postId: string; body: Post }, thunkApi) => {
    try {
      const response = await http.put<Post>(`posts/${postId}`, body, {
        signal: thunkApi.signal,
      });
      return response.data;
    } catch (error: any) {
      if (error.name === "AxiosError" && error.response.status === 422) {
        return thunkApi.rejectWithValue(error.response.data);
      }
      throw error;
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    editingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const foundPost =
        state.postList.find((post) => post.id === postId) || null;
      state.editingPost = foundPost;
    },
    cancel: (state) => {
      state.editingPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePost.fulfilled, (state, action) => {
        state.postList.find((post, index) => {
          if (post.id === action.payload.id) {
            state.postList[index] = action.payload;
            return true;
          }
          return false;
        });
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const postId = action.meta.arg;
        const poseDelete = state.postList.findIndex((state) => {
          if (state.id === postId) {
            return true;
          }
          return false;
        });
        if (poseDelete !== -1) {
          state.postList.splice(poseDelete, 1);
        }
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.postList.push(action.payload);
      })
      .addCase(getPostList.fulfilled, (state, action) => {
        state.postList = action.payload;
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.loading = true;
          state.currentRequestId = action.meta.requestId;
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) =>
          action.type.endsWith("/rejected") ||
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          if (
            state.loading &&
            state.currentRequestId === action.meta.requestId
          ) {
            state.loading = false;
            state.currentRequestId = undefined;
          }
        }
      );
    // .addDefaultCase((state, action) =>
    //   console.log(`action : ${action.type}`, current(state))
    // );
  },
});

export const { editingPost, cancel } = blogSlice.actions;

const blogReducer = blogSlice.reducer;
export default blogReducer;
