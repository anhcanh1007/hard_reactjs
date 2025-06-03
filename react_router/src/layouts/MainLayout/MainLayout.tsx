import { NavLink, Route, Routes } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}
export default function MainLayout({ children }: Props) {
  return (
    <div className="grid min-h-screen grid-cols-4">
      <aside className="col-span-1" aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                end // có tác dụng là khi đối chiếu với các url có "/", nếu url nào có "/abc.." thì nó map với url đó và bỏ qua url chứa end
                // replace // có tác dụng không để url vào history của trình duyệt(tức là khi bạn click bao nhiêu url thì trên nút back của trình duyệt cũng khoong ghi nhớ link url trước đó là gì)
                className={({ isActive }) => {
                  const active = isActive ? "bg-gray-300" : "";
                  return `flex items-center rounded-lg ${active} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`;
                }}
              >
                {({ isActive }) => (
                  <span className={isActive ? "ml-3 font-bold" : "ml-3"}>
                    Dashboard
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="staff"
                className={({ isActive }) => {
                  const active = isActive ? "bg-gray-300" : "";
                  return `flex items-center rounded-lg ${active} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`;
                }}
              >
                {({ isActive }) => (
                  <span className={isActive ? "ml-3 font-bold" : "ml-3"}>
                    Staff
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => {
                  const active = isActive ? "bg-gray-300" : "";
                  return `flex items-center rounded-lg ${active} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`;
                }}
              >
                {({ isActive }) => (
                  <span className={isActive ? "ml-3 font-bold" : "ml-3"}>
                    About
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
          <Routes location="/about">
            <Route path="/about" element={<div>About is url</div>} />
          </Routes>
        </div>
      </aside>
      <main className="col-span-3 h-full py-4 px-3">{children}</main>
    </div>
  );
}
