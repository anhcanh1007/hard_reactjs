UseCallback sinh ra để ngăn chặn việc function của chúng ta không bị re-render (hay nói cách khác là khởi tạo lại) mỗi khi component cha re-render
Component con bị re-render do các tác vụ sau: cập nhật state, cập nhập props, component cha re-render

Cơ chế ReactMemo là cơ chế dùng bộ nhớ (RAM) để lưu trữ, vì thế khi dùng những thứ liên quan đến memo nghĩa là chúng ta đang đánh đổi giữa tốn nhiều bộ nhớ hơn để tăng tốc performent

Cách hoạt động của useCallback tương tự với useEffect , nó nhận vào một callback và 1 depentdence, khi không truyền gì vào deps thì nó chỉ chạy callback 1 lần, nếu truyền deps thì mỗi lần tham số trong deps thay đổi(re-render) thì useCallback sẽ chạy lại
Khi sử dụng useCallback, chúng ta cần thêm export default React.memo(Component);
cuói cùng vẫn
