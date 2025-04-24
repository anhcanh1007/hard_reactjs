Hiểu sâu về luồng chạy của component:

- Khi component được gọi, nó sẽ tiền hành render và tính toán DOM ảo
- sau đó là quá trình so sánh DOM ảo với DOM ảo trước đó
- sau đó là quá tình patching (DOM update), tức là cập nhật lên DOM thật
- paint(quá trình trình duyệt vẽ DOM)
- người dùng có thể nhìn và tương tác
