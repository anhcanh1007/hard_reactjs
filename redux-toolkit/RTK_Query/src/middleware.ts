import {
  isRejected,
  isRejectedWithValue,
  type Middleware,
  type MiddlewareAPI,
} from "@reduxjs/toolkit";
import type { AnyActionArg } from "react";

import { toast } from "react-toastify";

function isPayloadErrorMessage(payload: unknown): payload is {
  data: {
    error: string;
  };
  status: number;
} {
  return (
    typeof payload === "object" &&
    payload !== null &&
    "data" in payload &&
    typeof (payload as any).data.error === "string"
  );
}

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: AnyActionArg) => {
    /**
     * isRejectedWithValue là một function giúp chúng ta kiểm tra những action có rejectedWithValue = true từ createAsyncThunk
     * RTk Query sử dụng createAsyncThunk bên tỏng nên chúng ta có thể dùng
     * isRejectedWithValue để kiểm trra lỗi
     */

    if (isRejected(action)) {
      if (action.error.name === "CustomError") {
        toast.warn(action.error.message);
      }
    }

    if (isRejectedWithValue(action)) {
      /**
       * Mỗi khi thực hiện query hoặc mutation mà bị lỗi thì nó sẽ chạy vào đây
       * Những lỗi từ server thì action nó mới có rejectedWithValue = true
       * Còn những action liên quan đến việc caching mà bị rejected thì rejectedWithValue = false
       */
      if (isPayloadErrorMessage(action.payload)) {
        toast.warn(action.payload.data.error);
      }
    }
    return next(action);
  };
