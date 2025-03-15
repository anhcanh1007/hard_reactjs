import React, { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./User3";

export default function UserProfile() {
  const { increAge } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={increAge}>Change Age</button>
    </>
  );
}
