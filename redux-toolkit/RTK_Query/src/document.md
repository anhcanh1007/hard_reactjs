1. Các khái niệm cơ bản trong RTK Query

- createApi() : hàm để tạo ra API Slice chứa các định nghĩa endpoint và cách gọi api
- fetchBaseQuery: hàm đơn giản để thực hiện các request bằng fetch . Giống như axios nhưng tích hợp sẵn cache ,headers...
- reducerPath: tên mà Api slice sẽ được đăng ký vào redux store
- endPoints: địnhh nghĩa các hàm tương ứng với từng endpoints như getUsers, createUser...
- builder.query(): dùng để định nghĩa các api dạng get
- builder.mutation(): dùng để định nghĩa các api post/put/delete..
- auto-generated hooks: RTk query sẽ tạo các hook sẵn cho bạn như useGetUsersQuery() hoặc useCreateUserMutation()
- cache: RTk Query sẽ cache lại các response và tự động kiểm soát cache

2. Luồng hoạt động của RTK Query
   ví dụ: giả sử gọi useGetUsersQueryy() để lấy danh sách người dùng:

- component gọi hook
- RTK query kiểm tra cache trong Redux
- nếu chưa có hoặc đã hết hạn -> fetch api
- fetchBaseQuery gửi request HTTP đến server
- Server trả dữ liệu
- RTK query: -lưu dữ liệu vào redux store - cập nhật trạng thái (loading -> success, error nếu fail) - cùng cấp dữ liệu (data) cho component

3. Các phần tự động hóa trong luồng:

- cache & deduplication: tránh gọi lại api nếu dữ liệu đã có
- loading/error state: giảm logic phức tạp
- auto refetch khi cần: luôn có data mới nhất khi cần
- hook sẵn ddể dùng: không cần viết useEffetch, dispatch..

=> khi nào nên dùng RTk Query:

- khi ứng dụng gọi API CRUD nhiều và cần caching
- khi bạn muốn tối ưu hiệu suất render và quản lý trạng thái api tốt hơn
- khi bạn đã dùng redux và muốn tích hợp gọi API mà không viết tay thunk hoặc axios
