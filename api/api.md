REST là quy ước một số quy tắc ràng buộc khi thiết kế hệ thống mạng. Nó cho phép máy khách tương tác với dữ liệu trên máy chủ mà không cần phải có bất kỳ kiến thức nào về máy chủ hoặc những gì tồn tại trên đó

REST có một số ràng buộc sau:

- Uniform Interface (giao diện thống nhất)
- Stateless (không trạng thái)
- Cacheable (dữ liệu có thể lưu vào bộ nhớ cache)
- Client-Server (máy khách - máy chủ)
- Layered System (hệ thống phân lớp)
- Code on Demand (code theo yêu cầu)

API là cơ chế cho phép hai thành phần phần mềm giao tiếp với nhau bằng tập hợp các định nghĩa và giao thức
Ví dụ: hệ thống phần mềm của cơ quan thời tiết chứa dữ liệu về thời tiết hằng ngày. Ứng dụng thời tiết trên điện thoại của bạn sẽ "trò chuyện" với hệ thống này qua api và hiển thị thông tin cập nhật về thời tiết hằng ngày trên điện thoại của bạn

RESTFUL API: là một api chuẩn Rest. Nó áp dụng các kĩ thuật dưới đây

- Sử dụng các phương thức http request có ý nghĩa:
  - GET: đọc một hoặc nhiều tài nguyên nào đó
  - PUT: cập nhật một hoặc nhiều tài nguyên nào đó
  - POST: tạo mới một tài nguyên nào đó
  - DELETE: xóa một tài nguyên nào đó
- Cung cấp tên tài nguyên hợp lí:
  - Sử dụng id định danh url thay vì query string . Sử dụng url query string cho việc filter chứ không dùng cho việc lấy một tài nguyên
    - Good: /users/23
    - Poor: /api?type=user&id=123
  - Thiết kế cho người sử dụng chứ không phải thiết kế cho data của bạn
  - Giữ Url ngắn và dễ đọc nhất cho client
  - Sử dụng số nhiều trong url để có tính nhất quán
  - Nên dùng: /customers/3345/orders/2232/lineitem/1
  - Không nên dùng: /customer/3345/order/2232/lineitem/1
  - Sử dụng http response code để xác định trạng thái trả về của api
  * 200 OK: thành công
  * 201 CREATE: tạo thành công (có thể từ method post hoặc put)
  * 204 NO CONTENT: thành công nhưng không có gì trả về trong body cả, thường được dùng cho DELETE hoặc PUT
  * 400 BAD REQUEST: lỗi, có thể nguyên nhân từ validate lỗi, thiếu data....
  * 404 UNAUTHORIZED: lỗi liên quan đến thiếu hoặc sai authentication token
  * 403 FORBIDDEN: lỗi liên quan đến phần không có quyền truy cập
  * 404 NOT FOUND: lỗi liên quan đến tài nguyên không tìm thấy
  * 405 METHOD NOT ALLOWED: lỗi liên quan method không chấp nhận. Ví dụ api chỉ cho phép sử dụng GET, PUT, DELETE mà bạn dùng POST thì trả về lỗi này
  * 500 INTERNAL SERVER ERROR: lỗi liên quan đến server
  - Sử dụng json để giao tiếp client - server
