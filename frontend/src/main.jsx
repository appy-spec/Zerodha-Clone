import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
4;
import { AuthProvider } from "./landingPage/AuthContext";

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </>
);
