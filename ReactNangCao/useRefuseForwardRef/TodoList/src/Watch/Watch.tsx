import React, { useEffect, useRef, useState } from "react";

function WatchTimer() {
  const [timer, setTimer] = useState<number>(0);
  const intervalRef = useRef<any>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
      console.log("interval dang chay");
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [intervalRef]);

  return <div className="flex flex-col gap-8">Watch {timer}</div>;
}

export default function Watch() {
  const [visiable, setVisiable] = useState<boolean>(true);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const handleClick = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = "red";
    }
  };
  return (
    <div>
      <h1 onClick={handleClick} ref={h1Ref}>
        anh canh dang hoc
      </h1>
      {visiable && <WatchTimer />}
      <button onClick={() => setVisiable((prev) => !prev)}>Visiable</button>
    </div>
  );
}
