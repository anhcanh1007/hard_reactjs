CreateReducer trong Redux Toolkit giúp chúng ta tạo một reducer .

- Nó nhận vào hai tham số, tham số đầu tiên là initialState, tham số thứ hai là builder callback
- Builder callback nhận vào hai tham số, tham số đầu tiền là tên của action, tham số thứ hai là một callback với hai tham số là action và state, state trong builder callback là initialState, action chính là action.payload mà ta truyền vào

CreateAction trong redux toolkit giúp chúng tạo một action, nó nhận vào 1 tham số chính là string, và payload của nó chính là kiểu dữ liệu trước đó(sau chữ createAction)

- TRường hợp khi chúng ta muốn truyền vào payload một giá trị nhưng muốn nó return về một giá trị khác thì chúng ta truyền thêm vào createAction thêm một tham số là callback function với tham số là biến mà chúng ta muốn tùy chỉnh

Trong Redux Toolkit chúng ta tạo store bằng configureStore, nó nhận vào một object có key là reducer và giá trị là một object có key là tên vắn tắt của dữ liệu mà chúng ta muốn bọc bằng redux, giá trị của key đó chính là reducer chúng ta tạo bằng createReducer
