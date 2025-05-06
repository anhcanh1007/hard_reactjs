import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ErrorBoudary from "./ErrorBoudary/ErrorBoudary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoudary>
      <App />
    </ErrorBoudary>
  </StrictMode>
);
