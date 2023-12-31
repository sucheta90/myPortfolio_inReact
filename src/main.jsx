// import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.jsx";
import Home from "./pages/HomePage.jsx";
import Contact from "./pages/ContactPage.jsx";
import About from "./pages/AboutPage.jsx";
import Project from "./pages/ProjectPage.jsx";
import OpenSourceContribution from "./pages/OpenSource.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement:
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/OpenSource",
        element: <OpenSourceContribution />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      // {
      //   path: "/Resume",
      //   element: <Resume />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
