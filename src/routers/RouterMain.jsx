import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Dragable from "../pages/Dragable";
import MenProducts from "../pages/MenProducts";
import MenTshirt from "../pages/MenTshirt";
import WomenProducts from "../pages/WomenProducts";
import WomenTshirt from "../pages/WomenTshirt";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import DynamicForm2 from "../pages/DynamicForm2";

const RouterMain = () => {
  const routerMain = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        { index: true, element: <Home /> },

        { path: "products", element: <Products /> },

        { path: "products/men", element: <MenProducts /> },

        { path: "products/men/tshirt", element: <MenTshirt /> },

        { path: "products/women", element: <WomenProducts /> },

        { path: "products/women/tshirt", element: <WomenTshirt /> },

        { path: "products/:id", element: <ProductDetails /> },

        { path: "contact", element: <DynamicForm2 /> },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={routerMain} />;
};

export default RouterMain;

/* 
--src
  --components
    necessery components
  --layouts
    LayoutMain.jsx
  --pages
    Products.jsx
    ProductDetails.jsx
  --routers
    RouterMain.jsx

    LayoutMain.jsx


    Products.jsx


    ProductDetails.jsx


    RouterMain.jsx
*/
