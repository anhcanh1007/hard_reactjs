import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./pages/blog/blog.reducer";

export const store = configureStore({
  reducer: { blog: blogReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
