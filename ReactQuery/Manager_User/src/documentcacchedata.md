## Một số khái niệm quan trọng

- StaleTime (default 0 ms): thời gian data được cho là đã cụ Khi get datãong thì sau một thời gian bạn quy định thì data nó sẽ tự cũ . Lưu ý" cái stale trên devtool là nó hiển thị data gồm stale và active
- CacheTime (default 5 minutes): thời gian data sẽ bị xóa ra khỏi bộ nhớ đệm . Có thể data đã cũ nhưng nó chưa bị xóa ra khỏi bộ nhớ đệm vì bạn set staleTime < CacheTime. Thường thì người ta set staleTime < cacheTime
- inactive: là khi data đó không còn component nào subscribe cả
- result là một object chứa một vài state rất quan trọng: status, fetchStatus ...

- Những state về các khoảnh khắc của data

  - isLoading or status === loading => query chưa có data
  - isEror or status === error => query xảy ra lỗi
  - isSuccess or status === success => query thành công và data đã có sẵn

- Những state về data
  - error - nếu isError === true thì error sẽ xuất hiện ở đây
  - data - nếu isSuccess === true thì data sẽ xuất hiện ở đây

Đặc biệt là fetchStatus - isFetching or fetchStatus === fetching => đang fetching API - isPaused or fetchStatus === paused => query muốn fetch API nhưng bị dừng vì một lý do nào đó - fetchStatus === "idle => query không làm gì cả

=> chỉ cần nhớ status cho thông tin data có hay không và fetchStatus cho thông về query có đang chạy hay không

# Cơ chế caching

Một data mà đã stale thì khi gọi lại query của data đó, nó sẽ fetch lại APỊ Nếu không stale thì không fetch lại API
Một data mà bị xóa khỏi bộ nhớ (tức là quá thời gian cacheTime) thì khi gọi laij query của data đó, nó sẽ fetch lại API . Nếu còn chưa bị xóa khỏi bộ nhớ nhưng đã stale thì nó sẽ trả về data cached và fetch API ngầm . Sau khi fetch xong nó sẽ update lại data cached và trả về data mới cho bạn

Còn đối với trường hợp `staleTime` giữa 2 lần khác nhau thì nếu data của lần query thứ 1 xuất hiện lâu hơn thời gian `staleTime` của lần query thứ 2 thì nó sẽ bị gọi lại ở lần thứ 2, dù cho có stale hay chưa.Add commentMore actions

> Ví dụ: `useQuery({ queryKey: ['todos'], queryFn: fetchTodos, staleTime: 10*1000 })` xuất hiện 5s trước, bây giờ chúng ta gọi lại `useQuery({ queryKey: ['todos'], queryFn: fetchTodos, staleTime: 2*1000 })` thì rõ ràng cái data của lần 1 dù nó chưa được cho là stale nhưng nó xuất hiện 5s trước và lâu hơn thời gian staleTime là 2s nên nó sẽ bị gọi lại ở lần 2.

# Caching là vòng đời của:

- Query Instance có hoặc không cache data
- Fetch ngầm
- Các inactive query
- xóa cache khỏi bộ nhớ

Một ví dụ:
Giả sử chúng ta dùng cacheTime mặc định là 5 phút và staleTime là 0

function A() {
const result = useQuery({
queryKey: ['todos'],
queryFn: fetchTodos
})
}
function B() {
const result = useQuery({
queryKey: ['todos'],
queryFn: fetchTodos
})
}
function C() {
const result = useQuery({
queryKey: ['todos'],
queryFn: fetchTodos
})
}

- A component được mount
  - Vì không có query nào với ['todos'] trước đó, nó sẽ fetch data
  - khi fetch xong, data sẽ được cache dưới key là ['todo']
  - hook đánh dấu data là stale (cũ) vì sau 0s
- Bây giờ thì B component được mount ở một nơi nào đó
  - vì cache data ['todos'] đã có trước đó, data từ cache sẽ trả về ngay lập tức cho component B
  - vì cache data ['todos'] được cho là đã stale nên nó sẽ fetch API tại component B
  - Không quan trọng function fetchTodos ở A và B có giống nhau hay không , việc fetch API tại B sẽ cập nhật tất cả các state query liên quan của B và A vì 2 component cùng key => cùng subscribe đến một data
  - khi fetch thành công, cache data ['todos'] sẽ được cập nhật , cả 2 component A và B cũng được cập nhật data mới
  - Bây giờ thì A và B unmount , không còn sử dụng nữa, không còn subscribe đến cache data nữa nên data ["todoss"] bị cho là inactive
  - vì inactive nên cacheTime sẽ bắt đầu đếm ngược 5 phút
- Trước khi cache hết thì ông C component được mount, cache data ["todos"] được trả về ngay lập tức cho C và fetchTodos sẽ chạy ngậm Khi nó hoàn thành thì cập nhật lại cache với data mới
- Cuối cùng thì C unmount
- Khoong còn ai subscribe đến cache data thì cacheTime sẽ abwts đầu đếm ngược 5 phút và bị xóa hoàn toàn
