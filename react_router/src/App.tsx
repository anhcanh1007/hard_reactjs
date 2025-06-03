import {
  Route,
  Routes,
  useLocation,
  useRoutes,
  useSearchParams,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import Staff from "./pages/Staff";
import StaffItem from "./components/StaffItem";
import AddStaff from "./components/AddStaff";
import StaffList from "./components/StaffList";
import { useEffect } from "react";

function App() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/staff",
      element: <Staff />,
      children: [
        {
          path: ":id",
          element: <StaffItem />,
        },
        {
          path: "add",
          element: <AddStaff />,
        },
        {
          index: true,
          element: <StaffList />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  const location = useLocation();
  const [searchparams] = useSearchParams();

  useEffect(() => {
    console.log(location);
  });
  useEffect(() => {
    console.log("searchparams", Object.fromEntries([...searchparams]));
  });

  return (
    <>
      <div className="App">
        <MainLayout>
          {/* Cach 1 */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/staff/*" element={<Staff />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* cach 2 */}
          {/* {elements} */}
        </MainLayout>
      </div>
    </>
  );
}

export default App;
