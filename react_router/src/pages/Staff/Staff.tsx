import { NavLink, Route, Routes } from "react-router-dom";
import StaffList from "../../components/StaffList";
import AddStaff from "../../components/AddStaff";
import StaffItem from "../../components/StaffItem";

export default function Staff() {
  return (
    <div>
      <h1 className="mb-6 text-lg">Staff List</h1>
      <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500  ">
        <ul className="-mb-px flex flex-wrap">
          <li className="mr-2">
            <NavLink
              to="/staff"
              end
              className={({ isActive }) => {
                const active = isActive ? "font-bold text-blue-700" : "";
                return `inline-block rounded-t-lg ${active} border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 `;
              }}
            >
              List
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              to="/staff/add"
              className={({ isActive }) => {
                const active = isActive ? "font-bold text-blue-700" : "";
                return `inline-block rounded-t-lg ${active} border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 `;
              }}
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<StaffList />} />
        <Route path="add" element={<AddStaff />} />
        <Route path=":id" element={<StaffItem />} />
      </Routes>
      {/* <Outlet context={{ "anh canh": "dang hoc bai" }} /> */}
    </div>
  );
}
