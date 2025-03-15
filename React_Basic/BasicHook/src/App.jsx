import { useState } from "react";
import "./App.css";
import Life from "./Life";
import User from "./UseState/User";
import User2 from "./UseEffect/User2";

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {/* <Life /> */}
      {isShow && <User2 />}
      <button
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
      >
        Change Show
      </button>
    </>
  );
}

export default App;
