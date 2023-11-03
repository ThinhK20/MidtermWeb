import { RouteObject } from "react-router-dom";
import Home from "../components/Home/home";
import ErrorPage from "../components/ErrorPage/error-page";

export const routes: RouteObject[] = [
   {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
   },
];
