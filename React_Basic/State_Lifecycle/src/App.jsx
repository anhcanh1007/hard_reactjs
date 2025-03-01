import { useState } from "react";
import "./App.css";
import Clock from "./stateinclasscomponent/Clock";
import Dongho from "./lifecycle/Dongho";

function App() {
  const [visiable, setVisiable] = useState(true);
  return (
    <>
      {/* <Clock /> */}
      {/* <Dongho /> */}
      <button
        onClick={() => {
          setVisiable(false);
        }}
      >
        Hide Dong ho
      </button>
      {visiable && <Dongho />}
    </>
  );
}

export default App;
