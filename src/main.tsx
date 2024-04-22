import React from "react";
import ReactDOM from "react-dom/client";
import "../scss/custom.scss";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
