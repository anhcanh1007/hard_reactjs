Luồng hoạt động khi dùng createAsynThunk

- khi người dùng dispatch một asynThunk thì sẽ gọi api thực hiện logic bất đồng bộ
- asyncThunk có 3 trang thái: pending, rejected, fulfill
- createSlice sẽ bắt các trạng thái đó và xử lí biến đổi state
  => lưu ý: khi trạng thái reject và fulfill đề trả về payload, và nó chính là dữ liệu mà createSlice nhận để xử lí state (khi dùng createAsunThunk thì dùng extraReducer trong createSlice)

- Xử lý skeleton trong addmatcher của extraReducer
- Xử lý lỗi trả về của api với return rejectedWithValue của asynThunk
