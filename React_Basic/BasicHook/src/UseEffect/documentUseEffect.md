useEffect
useEffect được sử dụng trong functional component đóng vai trò như những life cycle bên class component.

useEffect nhận vào 2 tham số là effect function và deps array

effect function sẽ chạy sau khi compoponent render và mounted

Chúng ta sẽ có 3 trường hợp là

Không truyền depedency
useEffect(() => {
//...handle something
})
Trường hợp này nó đóng vai trò như một componentDidUpdate. Effect function sẽ chạy lại mỗi khi component re-render

Depedency là array rỗng []
useEffect(() => {
//...handle something
}, [])
Trường hợp này nó đóng vai trò như một componentDidMount. Effect function chạy duy nhất 1 lần sau khi component render lần đầu.

Depedency có các item [a,b]
useEffect(() => {
//...handle something
}, [a, b])
Trường hợp này nó đóng vai trò như một componentDidMount nhưng thêm 1 cái nữa là khi giá trị a hoặc b bị thay đổi tham chiếu (vùng nhớ) thì cái effect function nó sẽ được chạy lại

Trong trường hợp setState trong useEffect mà cần dùng state trước đó, nhưng không muốn khai báo thêm item trong depedency thì hãy dùng prevState = () => {}
useEffect còn có một clean up function dùng để chạy trước khi effect function chạy lại lần tiếp theo
Áp dụng điều này, chúng ta có thể sử dụng clean up function để huỷ đăng ký, huỷ gọi api trước khi component của chúng ta bị destroy. Giống componentWillUnmount bên class.
