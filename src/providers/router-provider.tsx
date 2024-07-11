import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import App from "../App";
import SignInPage from "@pages/SignIn";
import MainLayout from "../../src/layout";
import SignUpPage from "@pages/SignUp";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

export const RouterProviderComponent = () => {
  return <RouterProvider router={router} />;
};
