UseReducer trong React là một hooks giúp chúng ta có thể gom nhiều setState lại. Tức là với useState thì ta chri có thể biến đổi state một lần theo ý muốn, nhưng với useReducer ta có thể biến đổi state với nhiều option khác nhau và gọi nó theo điều kiện
Ví dụ:

- Đối với useState khi muốn cập nhật state chúng ta gọi setState
- Đối với useReducer chúng ta cũng cập nhật lại state với các tham số sau:

* Cú pháp : const [state, dispatch] = useReducer(reducer, initalState, init)

- cách hoạt động của nó như sau:

* khi gọi dispatch để cập nhật state thì truyèn vào dispatch một object hoặc string hoặc function, dispatch sẽ gọi đến reducer.

- Cú pháp của reducer: function reducer(state,action)
- reducer sẽ nhận vào state (chính là giá trị state ban đầu của chúng ta) và action(là những hàm thực hiện logic biến đổi state)

- initalState chính là giá trị state ban đầu khởi tạo
- init (có thể truyền vào hoặc không) là một hàm nhận vào tham số là initalState và biến đổi , thực hiện logic gì đó mà chúng ta muốn để biến đổi initalState thành giá trị mà chúng ta mong muốn
