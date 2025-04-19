UseMemo là một hook của React, nó sinh ra có tác dụng giống như ReactMemo, là ngắn chặn quá trình re-render của component con khi component cha re-render , nhưng nó giúp code ngắn gọn hơn khi chúng ta không cần dùng hàm để check sự thay đổi của props, tức là khi dùng useMemo thì nó sẽ không khởi tạo instance của props khi component re-render, còn khi dùng Reactmemo thì nó vẫn sẽ tạo mới instance props, nen chúng ta cần làm thêm một việc là check xem props cũ và mới có bằng nhau hay không
Component con bị re-render do các tác vụ sau: cập nhật state, cập nhập props, component cha re-render

<!-- Có trương hợp : Tức là khi component cha re-render nó sẽ re-render lại props truyền xuống component con vì vậy làm component con re-render, khi đó chúng ta dùng react memo kèm theo function check prevProps và nextProps sẽ ngăn chặn được việc đó -->

Cơ chế ReactMemo là cơ chế dùng bộ nhớ (RAM) để lưu trữ, vì thế khi dùng những thứ liên quan đến memo nghĩa là chúng ta đang đánh đổi giữa tốn nhiều bộ nhớ hơn để tăng tốc performent
Cách hoạt động của useMemo tương tự với useEffect , nó nhận vào một callback và 1 depentdence, khi không truyền gì vào deps thì nó chỉ chạy callback 1 lần, nếu truyền deps thì mỗi lần tham số trong deps thay đổi(re-render) thì useMemo sẽ chạy lại
Khi sử dụng useMemo, chúng ta cần thêm export default React.memo(Component);
