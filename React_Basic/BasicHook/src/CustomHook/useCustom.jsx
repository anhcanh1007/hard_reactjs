import { useEffect, useState } from "react";
import { getUser } from "./api";

export default function useCustom() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });
  }, []);
  return { user };
}
