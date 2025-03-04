import { useState } from "react";
import "./App.css";
import BareInput from "./BareInput";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <h1>Anh cảnh đang học React</h1>
        <BareInput
          type="password"
          className="inputControl"
          autoFocus
          onChange={() => {}}
        />
      </Layout>
    </>
  );
}

export default App;
