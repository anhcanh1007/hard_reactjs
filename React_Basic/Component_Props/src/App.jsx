import { useState } from "react";

import "./App.css";
import Welcome from "./Welcome";
import Comment from "./Comment";
import RutgonComponent from "./RutgonComponent";

function App() {
  return (
    <>
      {/* <Welcome name="anh cảnh 1" age="25" />
      <Welcome name="anh cảnh 2" age="25" />
      <Welcome name="anh cảnh 3" age="25" /> */}

      <Comment
        author={{ avatarUrl: "http://google.com", name: "anh canh" }}
        text="rat hay"
        date="112-02-2025"
      />
      <RutgonComponent
        author={{ avatarUrl: "http://google.com", name: "anh canh" }}
        text="rat hay"
        date="112-02-2025"
      />
    </>
  );
}

export default App;
