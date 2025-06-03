import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", {
        state: "anh canh dang test",
      }); //redirec ve trang home
      // navigate(-1); //redirec ve trang truoc do
    }, 2000);
  }, [navigate]);
  return <div>NotFound</div>;
}
