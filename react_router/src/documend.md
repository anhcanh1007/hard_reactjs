Phân biệt một số loại Router Component

# BrowsersRouter

- được build trên history API của trình duyệt, dùng để lưu trữ URL và chuyển trang
  Ví dụ: - Đối với SPA thì server sẽ cấu hình là khi bạn nhập url nào thì server cũng trả về url nhắm đến file "index.html"
- Khi enter url "https://duthanhduọccom/about" vào trình duyệt, server nhận được là "https://duthanhduọccom/about" và sẽ trả về nội dung là file "index.html. Lúc này React Router sẽ đẩm nhận việc hiển thị component cho đúng tùy vào url

# HashRouter

- HashRouter dùng đấy # trong url ví dụ:
  `https://duthanhduoc.com/#/about`, `https://duthanhduoc.com/#/blog/hoc-react-nhu-the-nao`
- Lợi ích của việc thêm dấu # vào url là để server không nhận biết được chúng ta vào url nạo Khi mọi người nhập các url ở ví dụ trên vào trình duyệt và nhấn enter thì trình duyệtr chỉ gửi lên server là "https://duthanhduoc.com" và server chỉ nhận được là "https://duthanhduoc.com"
- Điều này khá hữu ích khi server anh em là một share hosting và không toàn quyền điều hành server.
  Vi dụ:
- Có một server được cấu hình cho nhiều dịch vụ, mỗi dịch vụ là một url khác nhau
- Landing Page cho user:`https://hospital.com`
- Manager: `https://hospital.com/manager`
- Doctor: `https://hospital.com/doctor`
- Staff: `https://hospital.com/staff`
- Mình đảm nhận thiết kế một landing page cho user là một SPA có nhiều trang trong đó và chỉ đựoc cấp cho url là `https://hospital.com`
- Bây giờ mình thiết kế thêm url "/manager" là dành cho việc quản lý profile các nhân của người dùng
- BrowsersRouter: người dùng enter url `https://hospital.com/manager` thì server sẽ trả về trang của manager (người quản lý), điều này không tốt!

- HashRouter: người dùng enter url `https://hospital.com/#/manager` thì server sẽ trả về trang `https://hospital.com`, lúc này React Router sẽ thực hiện hiển thị cho đúng trang `/manager`.

# MemoryRouter

- MemoryRouter lưu trữ url vào một array, không như `<BrowserHistory>` và `<HashRouter>`., nó không bị ràng buộc bởi history stack trong trình duyêt. Điều này rất hữu ích khi viết unit test cho React Router

### Router

Đây là cấp thấp nhất của tất cả Router component, tức là các Router component như `BrowsersRouter` hay `HashRouter` đều được build nên từ `Router` này.

Bạn không cần dùng Router, thay vì đó dùng các Router cấp cao hơn như `BrowsersRouter`

# Static Router

- Static Router dùng để render React Router trong môi trường nodejs, phục vụ cho việc server side rendering

Cách Hook thường được dùng trong React Router Dom

- useLocation(): const location = useLocation()
  => có tác dụng log ra : pathname, search, hash, state, key => giúp mình tracking
- useSearchParams() : const [searchparams] = useSearchParams();
  => có tác dụng log ra param kèm theo trên url => giúp mình tracking
- useNavigate() : const navigate = useNavigate();
  => có tác dụng redicrec về route được chỉ định
- useParams: const {id} = useParmas()
  => được dùng để lấy id trên url (có tác dụng khi chuyển trang đến sản phẩm chi tiết)

NavLink và Link khác nhau ở chỗ : navlink có tác dụng isactive... để active các link đang focus (có thể biến tấu css ở đây)

Để giao tiếp các page với nhau qua state thì sử dụng useNavigate(điểm đầu) và useLocation(điểm đích)
