import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import datas from "../src/assets/data/data"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "location/:id",
    element: <Locations />,
  }
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
