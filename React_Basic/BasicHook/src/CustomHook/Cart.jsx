import React, { useEffect, useState } from "react";
import useCustom from "./useCustom";

export default function Cart() {
  const { user } = useCustom();
  return <div>Header {user?.name}</div>;
}
