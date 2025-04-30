UseImpetiveHandle giups chúng ta có thể gọi function của component con ở component cha

useImperativeHandle(ref, createHandle, [deps])

```

`useImperativeHandle` dùng để đưa function từ component con ra component cha thông qua `ref`. Từ đó component cha có thể thực thi được một function ở component con (trước đây thì ta chỉ thực thi function của component cha tại component con thông qua props).

- Trước đây: Cha -> con: Tại con gọi func của cha thông qua props cha truyền xuống
- Bây giờ: Cha -> con: Tại cha gọi func của con thông qua giao tiếp ref + `useImperativeHandle`

Vì `useImperativeHandle` dùng ref nên là tránh dùng trong hầu hết các trường hợp. Bí quá thì mới dùng thôi! `useImperativeHandle` nên kết hợp với `forwardRef` để có thể dùng ref dễ dàng hơn với component
```
