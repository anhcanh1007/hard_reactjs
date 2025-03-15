import React, { useContext } from "react";
import { UserContext } from "./User3";

export default function Profile() {
  //   const { address, name, age } = useContext(UserContext);
  const value = useContext(UserContext);
  console.log(value);
  return (
    <div>
      <ul>
        <li>{value.name}</li>
        <li>{value.age}</li>
        <li>{value.address.nation}</li>
        <li>{value.address.city.street}</li>
        <li>{value.address.city.house}</li>
      </ul>
    </div>
  );
}
