React.startTransition(callback) và useStartTransition(pending, start)

- Là hai cơ chế nhằm giúp chúng ta trì hoãn việc trả về một giá trị, hoặc function nào đó
- Callback được truyền vào trong hai function trên sẽ được React đánh dấu là độ ưu tiên thấp, khi nào các tác vụ có độ ưu tiên cao như cập nhật các state khác, render.. hoàn thành thì cái callback trong đó mới được gọi
- useStartTransition có thêm tham số pending
- không nên lạm dụng useDeffedValue, startTransion, useStartransition
