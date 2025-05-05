import React, { useEffect, useState } from "react";

interface UserProps {
  id: number;
  name: string;
}
// https://reqres.in/api/users?page=2
export default function User() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    let ignore = false;
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return new Promise((relsove) => {
          setTimeout(() => {
            relsove(res.json());
          }, 2000);
        });
      })
      .then((res: any) => {
        if (!ignore) {
          console.log(res);
          setUsers(res);
        }
      })
      .catch((err) => console.log(err));
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h1>List User</h1>
      <div>
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
