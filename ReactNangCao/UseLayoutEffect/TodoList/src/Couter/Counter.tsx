import React, { useEffect, useLayoutEffect, useState } from "react";

export default function Counter() {
  const [couter, setCouter] = useState<number>(0);

  const increCouter = () => {
    setCouter((prev) => prev + 1);
  };
  useEffect(() => {
    if (couter === 4) {
      setCouter(0);
    }
  }, [couter]);
  //   useLayoutEffect(() => {
  //     if (couter === 5) {
  //       setCouter(0);
  //     }
  //   }, [couter]);
  return (
    <div>
      <h1> {couter}</h1>
      <button className="bg-red-50 p-4" onClick={increCouter}>
        Increment
      </button>
    </div>
  );
}
