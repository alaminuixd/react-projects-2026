import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import MenProducts from "../pages/MenProducts";
import MenTshirt from "../pages/MenTshirt";
import WomenProducts from "../pages/WomenProducts";
import WomenTshirt from "../pages/WomenTshirt";
import NotFound from "../pages/NotFound";
import DynamicForm2 from "../pages/DynamicForm2";
import TestProducts from "../pages/TestProducts";
import TodoApp from "../pages/projects/todo/TodoApp";
import InputApp from "../pages/projects/input-app/InputApp";
import ContactApp from "../pages/projects/contact-app/ContactApp";
import JqueryTest from "../pages/JqueryTest";
import BlogOne from "../pages/projects/blog-one/BlogOne";
import CustomHooks from "../pages/projects/others/custom-hooks/CustomHooks";
import ApiCallOne from "../pages/projects/api-call-one/ApiCallOne";
import AppInputs from "../pages/projects/app-inputs/AppInputs";
import SimpleFocusGuard from "../pages/projects/app-inputs/SimpleFocusGuard";
import FocusGuard2 from "../pages/projects/app-inputs/FocusGuard2";

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

        { path: "checklist", element: <JqueryTest /> },

        { path: "contact", element: <DynamicForm2 /> },

        { path: "test/products", element: <TestProducts /> },

        { path: "test/todo", element: <TodoApp /> },

        { path: "test/inputapp", element: <InputApp /> },

        { path: "text/contact-app", element: <ContactApp /> },

        { path: "text/blog-one", element: <BlogOne /> },

        { path: "text/custom-hooks", element: <CustomHooks /> },

        { path: "text/api-call-one", element: <ApiCallOne /> },

        { path: "text/app-inputs", element: <AppInputs /> },
        // { path: "text/app-inputs", element: <SimpleFocusGuard /> },
        // { path: "text/app-inputs", element: <FocusGuard2 /> },

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
