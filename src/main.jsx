import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage.jsx";
import About from "./Pages/AboutPage.jsx";
import RootLayout from "./Component/utilities/RootLayout.jsx";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import CaseStudies from "./Pages/CaseStudies.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />, // 👈 wrap everything in the layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/portfolio/:caseStudyId",
        element: <CaseStudies/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
