import { createRoot } from "react-dom/client";
import "./styles/globle.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />
  // {/* </StrictMode>, */}
);
