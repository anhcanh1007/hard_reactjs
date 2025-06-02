Caching là một tính năng quạn trọng của RTK Querỵ Khi chúng ta fetch dữ liệu từ server, RTK QUery sẽ cache dữ liệu vào Redux. Tấ nhiên đây là cache trên RAM => F5 lại sẽ mất

Caching sẽ dựa vào:

- API endpoint (tức là mấy cái khai báo getPosts, getPost)
- Query parám được sử dụng (ví dụ 1 là param trong useGetPostQuery(1))
- Số lượng actice subscription cộng dồn

Khi một component được mounted và gọi useQuery hook, thì component đó subscribe cái data đó => ta có 1 subscription, nếu nó unmount thì ra sẽ trở lại 0 (unsubscribe)

Khi request được gọi, nếu data đã được cahe thì RTk sẽ không thực hiện request mới đến server mà trả về data cache đó

Số lượng subscription được cộng dồn khi mà cùng gọi 1 endpoint và query param, Miễn là còn component subscribe data thì data nó chưa mất, nếu không còn component nào subscribe thì mặc định sau 60s data sẽ xóa khỏi cache(nếu trong lúc đó có component nào subscribe lại data đó thì còn dữ tiếp)
