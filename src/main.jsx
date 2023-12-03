import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { AuthProvider } from "./contexts/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <main className="max-w-7xl mx-auto box-border">
        <RouterProvider router={router} />
      </main>
    </AuthProvider>
  </React.StrictMode>
);
