import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import LayoutMain from "../layouts/LayoutMain";
import About from "../pages/About";
import Help from "../pages/Help";
import Random from "../pages/Random";
import RenderTest from "../pages/RenderTest";
import RenderTest2 from "../pages/RenderTest2";
import Clock from "../pages/Clock";
import Todo from "../todo/Todo";
const RouterMain = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/help", element: <Help /> },
        { path: "/random", element: <Random /> },
        { path: "/render", element: <RenderTest /> },
        { path: "/render2", element: <RenderTest2 /> },
        { path: "/clock", element: <Clock /> },
        { path: "/todo", element: <Todo /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterMain;
