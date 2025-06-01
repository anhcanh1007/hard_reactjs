import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import blogReducer from "./pages/blog/blog.slice";
import { blogApi } from "./service/blog.service";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorLogger } from "./middleware";

export const store = configureStore({
  reducer: {
    blogReducer,
    [blogApi.reducerPath]: blogApi.reducer, //thêm reducer được tạo từ api slice
  },

  //thêm api middleware để enable các tính năng caching , invalidation , polling của rtk-query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware, rtkQueryErrorLogger),
});

//optional nhưng bắt buộc nếu dùng các tính năng refetchOnFocus/refetchOnReConnect
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<Dispatch>();
