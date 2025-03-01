Vòng đời của component

1. Giai đoạn khởi tạo (Mounting)

- đầu tiên sẽ chạy constructor trong component
- tiếp theo nó sẽ thực hiện quá trình render
- sau đó chạy tiếp phần cập nhật state (nếu có) -> chạy lại render
- sau khi xong ba bước trên là hoàn thành component mouted
- sau đó chạy đến componentDidMout

* componentDidMout được gọi sau khi xong giai đoạn mouted và nó thường được dùng để truy cập đến DOM, gọi api hoặc setState

2. Giai đoạn Updating

- giai đoạn này khi chúng ta cập nhật props
- hoặc đôi khi component cha re-render làm component re-render

* componentDidUpdate sẽ được gọi lập tức khi component re-render và cập nhật lại DOM thật, componentDidUpdate sẽ không được gọi ở lần re-render đầu tiên
* componentDidUpdate thường được dùng khi muốn checking sự thay đổi trên state ví dụ truy cập đến DOM thật , tracking sự thay đổi url, cũng có thể gọi api hoặc setState trong này những hay cẩn thận vì có thể tạo ra vòng lặp vô hạn, nên đặt điều kiện để tránh xảy ra lặp vô hạn

3. Giai đoạn UnMounting

- giai đoạn này xảy ra trước khi component bị hủy

* componentWillUnmount sẽ được chạy trước khi component bị hủy
* chúng ta dùng componentWillUnMount khi muốn clean một thứ gì đó như setTimeOut hoặc SetInterval , hủy gọi api hoặc subscription nào đó đã được tạo ở componentDidMount , không nên setState trong componentUnMounting vì component sẽ không re-render lại
