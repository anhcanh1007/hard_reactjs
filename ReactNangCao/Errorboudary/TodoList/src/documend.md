Error boundary là một class component giúp chúng ta bắt lỗi trong ứng dụng React và trả về một fallback UI (UI dự phòng)

Error boundary bắt lỗi các component trong nó

- lỗi trong quá tình rendering
- lỗi trong lifecycle
- lỗi trong constructor

Lưu ý Error boundary khong bắt được các lỗi

- Event handler
- code bất đồng bộ
- server side rendering
- lỗi trong error boundary
