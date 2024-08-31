import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/error/ErrorPage";
import LoginPage from "../pages/login/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import DashBoardPage from "../pages/dashBoard/DashBoardPage";
import NoAuthLayout from "../layouts/NoAuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: (
          <NoAuthLayout>
            <LoginPage />
          </NoAuthLayout>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout>
            <DashBoardPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
