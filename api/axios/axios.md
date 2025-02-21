AXIOS có một số tính năng nổi trội sau:

- chạy được ở cả trình duyệt và nodejs
- hỗ trợ promise api
- tạo được interceptor request và reponse
- cancel request
- tự động chuyển json sang object
- chống tấn công XSRF ở client

INTERCEPTOR giống như là trung gian, trước khi gửi request lên server sẽ đi qua nó hoặc trước khi nhận data sẽ đi qua nó. Mục đích là tiền xử lí tác vụ
