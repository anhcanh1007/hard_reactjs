import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BlogType {
  postId: string;
}

const initialBlog: BlogType = {
  postId: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialBlog,
  reducers: {
    startEdit: (state, action: PayloadAction<string>) => {
      state.postId = action.payload;
    },
    cancelEdit: (state) => {
      state.postId = "";
    },
  },
});

const blogReducer = blogSlice.reducer;
export const { cancelEdit, startEdit } = blogSlice.actions;
export default blogReducer;
