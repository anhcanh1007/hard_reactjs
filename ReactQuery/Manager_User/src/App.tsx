import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import AddStudent from "./pages/AddStudent";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/students",
      element: <Students />,
    },
    {
      path: "/students/:id",
      element: <AddStudent />,
    },
    {
      path: "/students/add",
      element: <AddStudent />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      <MainLayout>{elements}</MainLayout>
    </div>
  );
}

export default App;
