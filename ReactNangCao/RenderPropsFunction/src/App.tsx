import { useCallback, useState } from "react";
import "./App.css";
import Ads from "./RenderProps/Ads";
import MouseTracker from "./RenderProps/MouseTracker";
import { PositionType } from "./RenderProps/MouseTracker/MouseTracker";

function App() {
  const [, force] = useState({});
  const renderAds = useCallback(
    (value: PositionType) => <Ads {...value} />,
    []
  );
  // return (
  //   <>
  //     <MouseTracker />
  //   </>
  // ); //đây là cách truyền props thông thường
  return (
    <>
      <button onClick={() => force({})}>Force</button>
      <MouseTracker children={renderAds} />
    </>
  ); //đây là cách truyền props theo kiểu render props

  // return (
  // {/* <Ads />; //Cách dùng với HOC */}
  // )
}

export default App;
