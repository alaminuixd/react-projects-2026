import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import LayoutMain from "../layouts/LayoutMain";
import About from "../pages/About";
import Help from "../pages/Help";

const RouterMain = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/help", element: <Help /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterMain;
