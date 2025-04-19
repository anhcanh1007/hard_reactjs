React Memo được sinh ra để giúp chúng ngăn chặn quá trình re-render của component con khi component cha
Component con bị re-render do các tác vụ sau: cập nhật state, cập nhập props, component cha re-render
Có trương hợp : Tức là khi component cha re-render nó sẽ re-render lại props truyền xuống component con vì vậy làm component con re-render, khi đó chúng ta dùng react memo kèm theo function check prevProps và nextProps sẽ ngăn chặn được việc đó
Cơ chế ReactMemo là cơ chế dùng bộ nhớ (RAM) để lưu trữ, vì thế khi dùng những thứ liên quan đến memo nghĩa là chúng ta đang đánh đổi giữa tốn nhiều bộ nhớ hơn để tăng tốc performent
