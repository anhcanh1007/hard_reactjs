import React, { useEffect, useState } from "react";
import useCustom from "./useCustom";

export default function Navigation() {
  const { user } = useCustom();
  return <div>Navigation {user?.name}</div>;
}
