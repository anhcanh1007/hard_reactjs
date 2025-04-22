import React, { useEffect, useRef, useState } from "react";

export default function Couter() {
  const [timer, setTimer] = useState<number>(0);
  const ref = useRef(0);
  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);
  function handleclick() {
    ref.current = ref.current + 1;
    alert("you click " + ref.current + " time");
  }

  let couter = 0;
  const handle = () => {
    couter = couter + 1;
    alert(couter);
  };

  return (
    <div>
      <h2>{timer}</h2>
      <button onClick={handle}>Click</button>
      <button onClick={handleclick}>onclick</button>
    </div>
  );
}
