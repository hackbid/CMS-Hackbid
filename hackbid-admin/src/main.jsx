import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import User from "./pages/User/User.jsx";
import Item from "./pages/Item/Item.jsx";
import SummaryDashboard from "./pages/SummaryDashboard/SummaryDashboard.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TodayItems from "./pages/TodayItem/TodayItems.jsx";
import Reported from "./pages/Reported Items/Reported.jsx";
import Refund from "./pages/Refund/Refund.jsx";

const queryClient = new QueryClient();

const route = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,
    children: [
      {
        path: "/",
        element: <SummaryDashboard />,
      },
      {
        path: "User",
        element: <User />,
      },
      {
        path: "Item",
        element: <Item />,
      },
      {
        path: "Refund",
        element: <Refund />,
      },
      {
        path: "Reported",
        element: <Reported />,
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
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
