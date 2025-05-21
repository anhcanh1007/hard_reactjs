import { createSlice } from "@reduxjs/toolkit";

interface BlogType {
  postId: string;
}

const initialBlog: BlogType = {
  postId: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialBlog,
  reducers: {},
});

const blogReducer = blogSlice.reducer;
export default blogReducer;
