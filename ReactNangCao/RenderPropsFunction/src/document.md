Kỹ thuật render props là kĩ thuật truyền props xuống là một function thay vì một object hay kiểu dữ liệu nguyên thủy thông thường

- Lưu ý: khi truyền props là một function thì mỗi lần component re-render thì props đó sẽ bị re-render là vì nó một function nên sẽ tạo ra một instance mới, vì vậy chúng ta nên dùng memorize lại function đó bằng useRef hoặc useMemo , useCallback
