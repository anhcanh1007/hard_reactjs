UseRef

- useRef là một hook lưu trữ một biến có thể mutate hoặc cho phép chúng ta truy cập DOM

Mutate là chúng ta thay đổi giá trị bên trong object mà không làm thay đổi tham chiêú của nó
Ví dụ: const A = {name: "anh"}
const B = A
B.name = "cuong"
console.log(A === B) //true vì tham chiếu A và B giống nhau
State hay Prop thì không được mutate
ĐỐi với React thì chúng ta dùng state để lưu trữ giá trị có thể thay đổi theo thời gian và chúng ta không mutate state, chúng ta thay thế state với một giá trị tham chiếu mới kết hợp dùng setState để nói cho react biết

=> UseRef giup ta luu tru bien khong bi khoi tao lai khi component re-render . vi du component: Couter, Watch
=> Một số đặc điểm của ref

- Tham chiếu ref sẽ không thay đổi mỗi khi re-render(không như biến thông thường, bị reset mỗi khi re-render)
- Thay đổi nó sẽ không làm re-render(không như state - làm re-render)
- Thông tin được bao gói bên trong component(không như biến bên ngoài, bị chia sẻ nhiều chổ khác dùng được)

=> Cạm bẫy khi dùng useRef

- Đừng nên ghi hay độc ref.current suốt quá triunhf render. Đây là nguyên tắc React
  // function MyComponent() {
  const myRef = useRef(100)
  //không ghi ref suốt quá trình render
  myRef.current = 123
  //không đọc ref suốt quá trình render
  retunr <h1>{myOthderRef.current}</h1>
  }

-Bạn có thể đọc và ghi trong event handler hay trong useEffect (như trong component Watch)

=> useRef co the truy cap den DOM, thay doi gia tri cua DOM

=>// ForwardRef là một HOC có tác dụng truyền ref từ component cha xuống component con (như component ForwardRef).

- Khi mình muốn ở component cha điều khiển DOM phần tử ở Component con thì dùng ForwardRef để truyền ref xuống component => qua đó có thể truy cập được ở component con
