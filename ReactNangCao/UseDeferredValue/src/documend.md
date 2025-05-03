useDeferredValue dùng để trả về một giá trị bị trì hoãn, mà giá trị đó không thể set bằng thời gian trì hoãn
Mà nó được trả về dựa trên các yếu tố sau:

- Tính chất cập nhật liện tục của state
- Tốc độ thiết bị
- Độ phức tạp của thuật toán và render JSX

- Cú pháp:
  const deferredValue = useDeferredValue(value)e
