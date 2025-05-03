import "./App.css";
import Product from "./Product";
import MainLayout from "./ReactPortal/Layout";
import Manager from "./ReactPortal/Manager";
import ProductStartTransition from "./UseStartTransition/ProductStartTransition";
// import Demo from "./Demo";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <Demo /> */}
      {/* <Product /> */}
      {/* <ProductStartTransition /> */}
      <MainLayout>
        <Manager />
      </MainLayout>
    </>
  );
}

export default App;
