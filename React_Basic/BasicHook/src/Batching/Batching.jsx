import React, { useState } from "react";
import { flushSync } from "react-dom";

export default function Batching() {
  const [name, setName] = useState("anh canh");
  const [flag, setFlag] = useState(false);

  //mặc dù set 2 state nhưng component chỉ render 1 lần, đây gọi là batching , một tính năng mới được react tích hợp vào
  //   const handle = () => {
  //     setName("anh canh dang hoc");
  //     setFlag(true);
  //   };

  //nếu bạn không muốn react tích hợp các state và chỉ rerender 1 lần, thì có thể dùng flushSync để render theo logic bạn muốn
  const handle = () => {
    flushSync(() => {
      setName("anh canh dang hoc");
    });
    flushSync(() => {
      setFlag(true);
    });
  };
  console.log("rerender");
  return (
    <div>
      Batching
      <ul>
        <li>{name}</li>
        <li>{flag.toString()}</li>
      </ul>
      <button onClick={handle}>Change</button>
    </div>
  );
}
