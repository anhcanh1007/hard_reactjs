UseContext các tác dụng giúp chúng ta sử dụng props từ component cha trong bất cứ component nào được gọi trong Context.Provider mà không cần phải truyền props qua nhiều cấp

- Cách hạot động của UseContext:

* Khai báo một Context : const ExamContext = React.createContext<kiểu dữ liệu>(giá trị khởi tạo)
* Sử dụng trong component cha: <ExamContext.Provider value={valueContext}> <Compoentcon> <ExamContext>

- chúng ta muốn các component con nào sử dụng props của component cha thì để component con đó trong ExamContext và nó nhận vào value (mặc định cần value: value chính là các props mà ta muốn truyền)

* Trong component con muốn lấy props ra chúng ta khai báo: const {..prop} = useContext(ExamContent)

## Lưu ý khi dùng useContext

- Provider gần nhất sẽ override Provider xa hơn. Ví dụ dưới đây, footer sẽ nhận `value` từ context là "light"

```jsx
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```

- Nhớ truyền `value` vào Provider, không truyền `value` vào thì nó sẽ lấy giá trị mặc định mà chúng ta khởi tạo từ đầu

- Không nên **truyền thẳng một object** vào `value` ở Provider, vì mỗi lần re-render sẽ là một object mới, dẫn đến component trong Provider của chúng ta bị re-render do value context thay đổi
