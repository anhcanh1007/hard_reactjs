Quá trình render của React như một dòng chay. Khi một component cần được cập nhật (do state thay đổi, props thay đổi, hoặc component cha render lại), React sẽ thực hiện các bước sau:

- Tiến trình chạy của useLayoutEffect:

1. Render: React render component, tính toán DOM ảo (virtual DOM)
2. DOM update: react so sánh DOM ảo với DOM thực tế và thực hiện các thay đổi cần thiết trên DOM thât. Ngay sau khi DOM được cập nhật (trước khi trình duyệt vẽ những thay đổi này lên màn hình), tất cả các hàm callback trong useLayoutEffect sẽ được chạy một cách đồng bộ(synchronously). Điều này có nghĩa là trình duyệt sẽ bị block và không hiển thị bất kỳ thay đổi nào cho đến khi tất cả các useLayoutEffect callbacks hoàn thành
3. Paint: trình duyệt vẽ những thay đổi đã được thực hiện lên màn hình
   => Điểm mấu chốt của useLayoutEffect là nó chạy trước khi trình duyệt vẹ Điều này cho phép bạn thực hiện các phép đo DOM (ví dụ: lấy kích thước, vị trí của một elêmnt) và thực hiện các thay đổi DOM một cách đồng bộ,tránh được hiện tượng "nhảy" màn hình(visual flicke) mà người dùng có thể nhận thấy nếu các thay đổi DOM xảy ra sau khi đã vẽ

- Tiến trình chạy của useEffect:

1. Render: tương tự như trên, React render component và cập nhật DOM
2. Paint: trình duyệt vẽ nhưng thay đổi lên màn hình
3. Effect Run: sau khi trình duyệt đã vẽ xong, các hàm callback trong useEffect sẽ được chạy một cách bất đồng bộ (asynchronously). Điều này có nghĩa là React sẽ không đợi cho các useEffect callback hoàn thành trước khi cho phép trình duyệt hiển thị
   => Điểm mấu chốt của useEfcet alf nó chạy sau khi trình duyệt vẹ Điều này làm cho nó phù hợp với hầu hết các side effect khong liên quan trực tiếp đến việc đo lường hoặc thao tác DOM một cách đồng bộ để tránh hiện tượng "nhảy" màn hình, ví dụ như:

- Gọi API
- Thiết lập timers(setTimeout, setInterval)
- Đăng ký hoặc hủy đăng ký các event listeners
- Thực hiện các thao tác không chặn

Tóm lại sự khác biệt chính:

- useEffect: thời điên chạy là sau chi paint(bât đòng bộ), mục đích chính là thực hiện hâù hết các side effect khác, ảnh hưởng hiệu suất là ít ảnh hưởng đến hiệu suất hơn
- useLayoutEffect: thời điển chạy là sau khi DOM được cập nhật, trước khi paint (đồng bộ). Mục đích chính là thực hiện các thao tác DOM đòng bộ để tránh "nhảy" màn hình . Ảnh hưởng hiệu suất là có thể ảnh hưởng đén hiệu suất nếu callback phức tạp
