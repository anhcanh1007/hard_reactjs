import React, { useState } from "react";

export default function RenderTwo() {
  const [name, setName] = useState("anh canh");

  const handle = () => {
    setName("anh canh dang hoc");
  };

  console.log("rerender");
  return (
    <div>
      RenderTwo
      <h1>{name}</h1>
      <button onClick={handle}>Change</button>
    </div>
  );
}
