import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import User from "./pages/User/User.jsx";

const queryClient = new QueryClient();

const route = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,
    children: [
      {
        path: "users",
        element: <User />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={route} />
  </QueryClientProvider>
);
